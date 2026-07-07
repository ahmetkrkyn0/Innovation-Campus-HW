/* Ahmet Karakoyun — chapter1 personal site
   1. terminal typing animation
   2. scroll-reveal sections
   3. active-section nav highlight
   4. A* pathfinding hero animation (LunaPath homage)          */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. terminal typing ---------- */

  function runTerminal() {
    var body = document.getElementById("terminal-body");
    if (!body) return;
    var lines = Array.prototype.slice.call(body.querySelectorAll(".t-line"));
    if (reducedMotion) return; // lines are already fully in the DOM

    lines.forEach(function (line) {
      line.dataset.text = line.textContent;
      line.textContent = "";
      line.classList.add("t-hidden");
    });

    var i = 0;

    function nextLine() {
      if (i >= lines.length) return;
      var line = lines[i++];
      line.classList.remove("t-hidden");

      if (line.classList.contains("t-cmd")) {
        typeChars(line, line.dataset.text, 0, function () {
          setTimeout(nextLine, 220);
        });
      } else {
        line.textContent = line.dataset.text;
        setTimeout(nextLine, 120);
      }
    }

    function typeChars(line, text, pos, done) {
      line.classList.add("t-cursor");
      if (pos <= text.length) {
        line.textContent = text.slice(0, pos);
        setTimeout(function () { typeChars(line, text, pos + 1, done); }, 34);
      } else {
        line.classList.remove("t-cursor");
        done();
      }
    }

    setTimeout(nextLine, 500);
  }

  /* ---------- 2. scroll reveal ---------- */

  function setupReveal() {
    var sections = document.querySelectorAll(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      sections.forEach(function (s) { s.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- 3. active nav ---------- */

  function setupActiveNav() {
    var links = document.querySelectorAll(".nav-links a");
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var link = byId[e.target.id];
        if (!link) return;
        if (e.isIntersecting) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    document.querySelectorAll("main .section").forEach(function (s) { io.observe(s); });
  }

  /* ---------- 4. A* pathfinding canvas ---------- */

  function setupPathfinder() {
    var canvas = document.getElementById("pathfinder");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");

    var CELL = 42;
    var cols, rows, dpr, w, h;
    var seedCounter = 20260707;

    function mulberry32(a) {
      return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        var t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.max(6, Math.ceil(w / CELL));
      rows = Math.max(4, Math.ceil(h / CELL));
    }

    function buildRun() {
      // retry with new seeds until A* finds a path
      for (var attempt = 0; attempt < 12; attempt++) {
        var rand = mulberry32(seedCounter++);
        var blocked = [];
        for (var y = 0; y < rows; y++) {
          blocked.push([]);
          for (var x = 0; x < cols; x++) {
            blocked[y].push(rand() < 0.24); // crater density
          }
        }
        var start = {
          x: Math.floor(rand() * Math.max(1, Math.floor(cols / 5))),
          y: Math.floor(rand() * rows)
        };
        var goal = {
          x: cols - 1 - Math.floor(rand() * Math.max(1, Math.floor(cols / 5))),
          y: Math.floor(rand() * rows)
        };
        blocked[start.y][start.x] = false;
        blocked[goal.y][goal.x] = false;

        var result = astar(blocked, start, goal);
        if (result) return { blocked: blocked, start: start, goal: goal, visited: result.visited, path: result.path };
      }
      return null;
    }

    function astar(blocked, start, goal) {
      var open = [];
      var came = {};
      var g = {};
      var visited = [];
      var key = function (x, y) { return x + "," + y; };
      var hFn = function (x, y) { return Math.abs(x - goal.x) + Math.abs(y - goal.y); };

      g[key(start.x, start.y)] = 0;
      open.push({ x: start.x, y: start.y, f: hFn(start.x, start.y) });
      var closed = {};

      while (open.length) {
        var bi = 0;
        for (var i = 1; i < open.length; i++) if (open[i].f < open[bi].f) bi = i;
        var cur = open.splice(bi, 1)[0];
        var ck = key(cur.x, cur.y);
        if (closed[ck]) continue;
        closed[ck] = true;
        visited.push(cur);

        if (cur.x === goal.x && cur.y === goal.y) {
          var path = [cur];
          var k = ck;
          while (came[k]) {
            path.unshift(came[k]);
            k = key(came[k].x, came[k].y);
          }
          return { visited: visited, path: path };
        }

        var dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (var d = 0; d < 4; d++) {
          var nx = cur.x + dirs[d][0], ny = cur.y + dirs[d][1];
          if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
          if (blocked[ny][nx] || closed[key(nx, ny)]) continue;
          var ng = g[ck] + 1;
          var nk = key(nx, ny);
          if (g[nk] === undefined || ng < g[nk]) {
            g[nk] = ng;
            came[nk] = { x: cur.x, y: cur.y };
            open.push({ x: nx, y: ny, f: ng + hFn(nx, ny) });
          }
        }
      }
      return null;
    }

    function cx(x) { return (x + 0.5) * (w / cols); }
    function cy(y) { return (y + 0.5) * (h / rows); }

    function drawFrame(run, visCount, pathCount, alpha) {
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = alpha;

      // node lattice + craters
      for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
          if (run.blocked[y][x]) {
            ctx.fillStyle = "rgba(139, 153, 173, 0.10)";
            ctx.beginPath();
            ctx.arc(cx(x), cy(y), 4.5, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = "rgba(139, 153, 173, 0.14)";
            ctx.fillRect(cx(x) - 1, cy(y) - 1, 2, 2);
          }
        }
      }

      // explored nodes
      ctx.fillStyle = "rgba(87, 217, 192, 0.22)";
      for (var i = 0; i < visCount && i < run.visited.length; i++) {
        var v = run.visited[i];
        ctx.beginPath();
        ctx.arc(cx(v.x), cy(v.y), 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // final path
      if (pathCount > 1) {
        ctx.strokeStyle = "rgba(87, 217, 192, 0.9)";
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(cx(run.path[0].x), cy(run.path[0].y));
        for (var p = 1; p < pathCount && p < run.path.length; p++) {
          ctx.lineTo(cx(run.path[p].x), cy(run.path[p].y));
        }
        ctx.stroke();
      }

      // start node
      ctx.fillStyle = "rgba(215, 224, 236, 0.9)";
      ctx.beginPath();
      ctx.arc(cx(run.start.x), cy(run.start.y), 3.5, 0, Math.PI * 2);
      ctx.fill();

      // goal node — gold (1st place)
      ctx.fillStyle = "#e8b44f";
      ctx.beginPath();
      ctx.arc(cx(run.goal.x), cy(run.goal.y), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(232, 180, 79, 0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx(run.goal.x), cy(run.goal.y), 9, 0, Math.PI * 2);
      ctx.stroke();

      ctx.globalAlpha = 1;
    }

    var run = null;
    var phase = "explore";      // explore -> trace -> hold -> fade
    var visCount = 0, pathCount = 0, holdUntil = 0, fadeStart = 0;
    var running = true;
    var rafId = null;

    function tick(ts) {
      if (!running) { rafId = null; return; }
      if (!run) {
        run = buildRun();
        if (!run) { rafId = null; return; }
        phase = "explore"; visCount = 0; pathCount = 0;
      }

      if (phase === "explore") {
        visCount += 4;
        drawFrame(run, visCount, 0, 1);
        if (visCount >= run.visited.length) phase = "trace";
      } else if (phase === "trace") {
        pathCount += 1;
        drawFrame(run, run.visited.length, pathCount, 1);
        if (pathCount >= run.path.length) {
          phase = "hold";
          holdUntil = ts + 3200;
        }
      } else if (phase === "hold") {
        drawFrame(run, run.visited.length, run.path.length, 1);
        if (ts >= holdUntil) { phase = "fade"; fadeStart = ts; }
      } else if (phase === "fade") {
        var a = Math.max(0, 1 - (ts - fadeStart) / 900);
        drawFrame(run, run.visited.length, run.path.length, a);
        if (a <= 0) run = null; // triggers a fresh run
      }

      rafId = window.requestAnimationFrame(tick);
    }

    function start() {
      if (rafId === null && running) rafId = window.requestAnimationFrame(tick);
    }

    resize();

    if (reducedMotion) {
      // static: draw the completed search once, no animation
      run = buildRun();
      if (run) drawFrame(run, run.visited.length, run.path.length, 1);
      window.addEventListener("resize", function () {
        resize();
        run = buildRun();
        if (run) drawFrame(run, run.visited.length, run.path.length, 1);
      });
      return;
    }

    start();

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { resize(); run = null; }, 150);
    });

    // pause when tab hidden or hero scrolled away
    document.addEventListener("visibilitychange", function () {
      running = !document.hidden;
      if (running) start();
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        running = entries[0].isIntersecting && !document.hidden;
        if (running) start();
      }).observe(canvas);
    }
  }

  /* ---------- boot ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    runTerminal();
    setupReveal();
    setupActiveNav();
    setupPathfinder();
  });
})();
