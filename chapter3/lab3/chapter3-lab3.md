---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #0f172a
color: #ffffff
style: |
  section {
    font-family: 'Segoe UI', Roboto, sans-serif;
    padding: 40px 50px;
    font-size: 1.4em; /* Biraz daha büyütüldü, tam ideal okuma boyutu */
  }
  h1 {
    color: #38bdf8;
    font-size: 1.9em;
    font-weight: bold;
    margin-bottom: 12px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.6);
  }
  h2 {
    color: #38bdf8;
    font-size: 1.4em;
    margin-top: 0;
  }
  footer {
    color: #64748b;
  }
  ul, ol {
    margin-top: 10px;
  }
  li {
    font-size: 0.95em; /* Listeler daha belirgin */
    margin-bottom: 12px;
    line-height: 1.4;
    color: #ffffff; 
  }
  strong {
    color: #38bdf8;
    font-weight: bold;
  }
  blockquote {
    background: #1e293b;
    border-left: 6px solid #38bdf8;
    padding: 12px 20px;
    margin: 10px 0;
    font-size: 0.85em;
    line-height: 1.4;
    color: #ffffff;
    border-radius: 4px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 15px;
  }
  th {
    background-color: #1e293b;
    color: #38bdf8;
    border: 2px solid #334155;
    padding: 10px;
    font-size: 0.85em;
    font-weight: bold;
  }
  td {
    border: 1px solid #334155;
    padding: 10px;
    font-size: 0.82em; /* Tablo içi yazılar netleştirildi */
    color: #ffffff;
  }
  .highlight-green {
    color: #4ade80;
    font-weight: bold;
  }
  .highlight-red {
    color: #f87171;
    font-weight: bold;
  }

---

# Bridging the Enterprise Trust Gap
## Context-Free AI vs. Grounded RAG
### Unit 03 - Lab 3: RAG Performance Analysis

**Ahmet Karakoyun**
*Department of Software Engineering, Çankaya University*

---

## 📌 Executive Summary

* **The Core Problem:** Pre-trained Large Language Models (LLMs) are incredibly powerful reasoning engines, but they are *factually blind* to internal corporate data, leading to outdated answers or high-risk hallucinations.
* **The Solution:** Retrieval-Augmented Generation (RAG) grounds the model by feeding exact document contexts dynamically into the prompt before generation.
* **Enterprise Mandate:** Professional applications require deterministic, auditable, and verifiable outputs. Grounding is not an option; it is a foundational requirement.

---

## 🔍 Case Study: Step 1 vs. Step 2 Execution

### Scenario: Querying a specific B2B service level agreement and late penalty metrics.

* **Step 1: Context-Free (Without Documents)**
  > *"Our corporate refund policy generally follows standard consumer protection laws. Refunds are typically processed within a reasonable business timeframe (usually 7-14 days)..."* 
  > ❌ **Critique:** Vague, evasive, and professionally unusable.

* **Step 2: Grounded (With RAG / Docs Provided)**
  > *"According to Section 4.2 of the Provided Service Policy, refunds are strictly processed within **4 business days**. A **2.5% late processing fee** applies if the submission misses the **15-day quarterly window**..."* 
  >  **Critique:** High-precision, actionable data points.

---

## 📊 Performance Comparison Matrix

| Evaluation Criteria | Step 1: Context-Free (No Docs) | Step 2: Grounded (With RAG) |
| :--- | :--- | :--- |
| **1. Accuracy** | <span class="highlight-red">Low to Medium</span> (Static data) | <span class="highlight-green">Absolute (100%)</span> (Active sources) |
| **2. Specificity** | <span class="highlight-red">Generic / Evasive</span> ("standard terms") | <span class="highlight-green">Hyper-Specific</span> (Exact metrics and dates) |
| **3. Grounding** | <span class="highlight-red">None</span> (Zero source tracking) | <span class="highlight-green">Complete</span> (Line-by-line citations) |
| **4. Hallucination Risk** | <span class="highlight-red">High</span> (Prone to guessing) | <span class="highlight-green">Zero</span> (Confined within prompt) |
| **5. Trustworthiness** | <span class="highlight-red">Unsafe</span> (Production risk) | <span class="highlight-green">Production-Ready</span> (Audit-safe use) |

---

## 🎯 Architectural Conclusion

### The Golden Rule of Enterprise AI:
> "Generative AI should never act as a static database of facts—it must act as a **reasoning engine** over provided data assets."

* **Auditability & Compliance:** RAG allows enterprise engineers to trace every single generated sentence back to an exact paragraph in an authorized PDF.
* **Cost & Maintenance Efficiency:** Instead of continuously re-training or fine-tuning massive parameters, developers can simply swap or update the underlying vector database context in seconds.