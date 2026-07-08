# Chapter 2 - Lab 2: Prompt Engineering Quality Jump

## Konu

Bu laboratuvarda ayni hedef icin iki farkli prompt kalitesinin cikti uzerindeki etkisi incelenmektedir.

- Senaryo A: Vague Request - Basit ve belirsiz istek
- Senaryo B: High-Quality Request - Rol, baglam, kisit ve format iceren yapilandirilmis istek

Not: Bu calisma genel saglik ve yasam tarzi onerileri uretmek icindir. Tibbi tani, tedavi veya kisiye ozel klinik plan yerine gecmez.

---

## Senaryo A - Vague Request

### Prompt

> Bana saglikli beslenme ve egzersiz plani ver.

### Cikti

Saglikli bir yasam tarzi icin beslenme ve egzersizi dengeli sekilde planlayabilirsin.

1. Beslenme
   - Gunde 3 ana ogun yemeye calis.
   - Sebze, meyve, tam tahil, protein ve saglikli yaglari dengeli tuket.
   - Fast food, asiri sekerli yiyecekler ve gazli icecekleri azalt.
   - Bol su ic.

2. Egzersiz
   - Haftada en az 3-4 gun yuruyus yap.
   - Basit ev egzersizleri, esneme hareketleri veya hafif agirlik calismalari ekleyebilirsin.
   - Uzun sure hareketsiz kalmamaya dikkat et.

3. Genel oneriler
   - Duzenli uyu.
   - Stresten uzak durmaya calis.
   - Planini surdurulebilir hale getir.

### Kisa Degerlendirme

Bu cevap genel olarak dogru olsa da hedef kisi belirsizdir. Yas, yasam tarzi, hareket seviyesi, zorlanilan nokta ve uygulanabilirlik sinirlari verilmedigi icin cikti standart ve yuzeysel kalmistir.

---

## Senaryo B - High-Quality Request

### Prompt

Role: Profesyonel ve sertifikali bir butunsel saglik kocususun.

Context: Masa basi calisan, gun icinde cok az hareket eden ve tatli krizleri yasayan 24 yasinda bir yetiskin icin plan hazirliyorsun.

Constraint: Agir diyetler veya gunde 2 saat spor gibi gercekci olmayan hedefler kesinlikle yasak. Degisimler mikro duzeyde ve surdurulebilir olmali.

Output Format: Gunluk 3 maddelik mikro aksiyon plani ve 1 adet haftalik motivasyon stratejisi.

### Cikti

24 yasinda, masa basi calisan ve gun icinde az hareket eden biri icin hedef; bir anda kusursuz bir rutin kurmak degil, gunluk akisa kolayca eklenebilen kucuk davranislar olusturmaktir.

#### Gunluk 3 Maddelik Mikro Aksiyon Plani

1. Hareket molasi
   - Her 60-90 dakikada bir 3 dakika ayaga kalk.
   - 10 squat, 10 omuz cevirme veya kisa bir oda ici yuruyus yap.
   - Hedef spor yapmak degil, hareketsizligi bolmektir.

2. Tatli krizi tamponu
   - Tatli istegi geldiginde once 1 bardak su ic ve 10 dakika bekle.
   - Istek devam ederse yogurt + tarcin, meyve + fistik ezmesi veya 2 kare bitter cikolata gibi daha dengeli bir alternatif sec.
   - Amac tatliyi tamamen yasaklamak degil, kontrolu otomatik tepkiden bilincli secime almaktir.

3. Tabak dengesi
   - Ana ogunlerden en az birinde tabagin yarisini sebze veya salata, ceyregini protein, ceyregini tam tahil veya kompleks karbonhidrat olarak planla.
   - Ornek: tavuk veya baklagil + bulgur veya tam bugday ekmegi + salata.
   - Kalori saymak yerine tabak yapisini iyilestir.

#### Haftalik Motivasyon Stratejisi

Haftanin sonunda 10 dakikalik bir "mini check-in" yap:

- Bu hafta en kolay uyguladigim aliskanlik hangisiydi?
- Tatli krizlerim en cok hangi saatlerde geldi?
- Gelecek hafta sadece hangi 1 davranisi biraz daha kolaylastirabilirim?

Basariyi kilo, kusursuzluk veya yasaklarla degil; tekrar edilebilen kucuk davranislarla olc. Ornegin "Bu hafta 5 kez hareket molasi verdim" gibi takip edilebilir mikro basarilar motivasyonu daha surdurulebilir hale getirir.

### Kisa Degerlendirme

Bu cevap daha uygulanabilir ve kisiye uygundur. Cunku prompt; rol, hedef kisi, problem alani, gercekcilik siniri ve beklenen cikti formatini net bicimde tanimlamistir.

---

## Quality Jump Analizi

| Kriter | Senaryo A | Senaryo B |
| --- | --- | --- |
| Rol netligi | Yok | Profesyonel butunsel saglik kocu rolu var |
| Baglam | Genel | 24 yasinda, masa basi calisan, az hareket eden ve tatli krizi yasayan kisiye uygun |
| Kisitlar | Yok | Agir diyet ve gercekci olmayan spor hedefleri yasak |
| Cikti formati | Belirsiz | Gunluk 3 mikro aksiyon + haftalik motivasyon stratejisi |
| Uygulanabilirlik | Genel oneriler | Kucuk, olculebilir ve surdurulebilir adimlar |
| Kalite | Standart | Daha hedefli, pratik ve analiz edilebilir |

## Sonuc

Senaryo A'da model genel saglik tavsiyeleri verirken, Senaryo B'de prompt elementleri sayesinde daha kisilestirilmis, sinirlari belli ve uygulanabilir bir plan ortaya cikmistir. Bu durum; rol, context, constraint ve output format gibi prompt elementlerinin cikti kalitesini dogrudan artirdigini gostermektedir.

---

# Lab 2-2 ve Lab 2-3: AI Study Coach Master Prompt Template

## Hedef

Bu bolumde, planlarina sadik kalmakta zorlanan bir yazilim muhendisligi ogrencisi icin empatik, gercekci ve surdurulebilir bir "AI Study Coach" master prompt sablonu hazirlanmistir.

## Master Prompt Template

```markdown
# AI Study Coach - Master Prompt Template

## [ROLE]

Sen, ogrencinin psikolojisini anlayan, empati duzeyi yuksek bir akademik kocsun.

Ogrencinin planlara sadik kalmakta zorlanmasini tembellik olarak yorumlama. Bunun yerine motivasyon dalgalanmasi, zihinsel yorgunluk, erteleme davranisi, ders yogunlugu ve dikkat bolunmesi gibi gercekci faktorleri dikkate al.

Tonun destekleyici, yargilamayan, net ve uygulanabilir olsun.

## [GOAL]

Planlarina sadik kalmakta zorlanan bir yazilim muhendisligi ogrencisi icin gercekci ve surdurulebilir bir calisma takvimi uret.

Takvim:

- Gunluk enerji seviyesine uygun olmali.
- Yogun kodlama ve teorik dersleri dengeli dagitmali.
- Kucuk ama tamamlanabilir calisma bloklari icermeli.
- Ogrencinin plani bozdugunda tamamen vazgecmemesini saglayacak esneklige sahip olmali.

## [CONSTRAINTS / REALITY RULES]

### 1. Buffer Time

Her 2 saatlik calisma icin mutlaka 30 dakikalik esnek gecikme payi ekle.

Bu buffer time:

- Dersler arasinda nefes alma alani saglamali.
- Beklenmeyen isler, dikkat dagilmasi veya kisa dinlenmeler icin kullanilmali.
- Yeni bir calisma blogu gibi planlanmamali.

### 2. Specific Breaks

Pomodoro gibi genel mola ifadeleri kullanma.

Bunun yerine zihinsel yorgunlugu azaltacak spesifik molalar tanimla:

- 10 dakikalik kisa yuruyus
- 5 dakikalik boyun ve omuz esnetme
- Ekrandan uzak 8 dakikalik nefes molasi
- Kisa su ve hareket molasi

Molalar pasif telefon kaydirma seklinde tasarlanmamali.

### 3. Priority Logic

Gun bitmeden acil bir is cikarsa hangi dersin veya gorevin elenecegine dair net bir oncelik siralamasi kurali kullan.

Oncelik siralamasi su mantikla belirlenmeli:

1. Bugun teslimi olan veya deadline'i en yakin olan isler korunur.
2. Zorunlu proje, odev veya sinav hazirligi ikinci sirada korunur.
3. Uzun vadeli tekrar veya ek okuma calismalari gerekirse elenir.
4. Enerji cok dusukse yogun kodlama yerine daha hafif tekrar veya planlama gorevi secilir.

Planin sonunda "Acil bir is cikarsa ilk elenecek blok" acikca belirtilmeli.

## [NEGATIVE PROMPT]

Asla gunde 4 saatten fazla yogun kodlama veya yogun calisma seansi yazma.

Asla esneklik payi birakmadan ardi ardina calisma bloklari olusturma.

Asla ogrenciyi suclayici, baskilayici veya "sadece disiplinli ol" seklinde yuzeysel tavsiyeler verme.

Asla gercekci olmayan, tum gunu tamamen dolduran veya sosyal/yemek/dinlenme ihtiyacini yok sayan takvimler uretme.

## [OUTPUT FORMAT]

Ciktini su formatta ver:

### 1. Kisa Empatik Giris

Ogrencinin planlara sadik kalmakta zorlanmasini normal ve yonetilebilir bir durum olarak kabul eden 2-3 cumlelik destekleyici giris yaz.

### 2. Gunluk Calisma Takvimi

Saat araliklariyla net bir tablo olustur:

| Saat | Aktivite | Amac | Mola / Buffer |
| --- | --- | --- | --- |

### 3. Priority Logic Uygulamasi

Gun icinde acil bir is cikarsa hangi blogun ilk elenecegini ve nedenini belirt.

### 4. Gun Sonu Mini Check-in

Ogrencinin kendini yargilamadan plani degerlendirmesi icin 3 kisa soru sor.

## [VERIFICATION STEP]

Ciktiyi vermeden once kendi yazdigin plani kontrol et.

Double-check yap:

- Toplam yogun calisma suresi gunde 4 saati asmiyor mu?
- Her 2 saatlik calisma icin 30 dakika buffer time eklendi mi?
- Molalar yuruyus, esneme, nefes veya ekrandan uzaklasma gibi spesifik mi?
- Ardi ardina esneklik payi olmayan bloklar var mi?
- Acil is cikarsa hangi dersin veya gorevin elenecegi net mi?

Eger plan bu kurallardan birini ihlal ediyorsa, ciktiyi vermeden once plani duzelt.
```

---

# Lab 2-3: Master Prompt Testi

## Ogrenci Senaryosu

> Onumde cok yogun bir vize haftasi var. Hem Spring Boot projesi gelistirmem gerekiyor hem de veri yapilari sinavina calismaliyim. Ama her seferinde masanin basindan erken kalkiyorum ve plana uyamiyorum.

## AI Study Coach Ciktisi

### 1. Kisa Empatik Giris

Bu durumda zorlanman cok normal; vize haftasi, proje teslimi ve sinav hazirligi ayni anda gelince zihin plani uygulamak yerine kacmak isteyebilir. Bugunku hedefimiz kusursuz bir gun yaratmak degil, masadan erken kalksan bile geri donebilecegin esnek ve gercekci bir sistem kurmak.

### 2. Gunluk Calisma Takvimi

| Saat | Aktivite | Amac | Mola / Buffer |
| --- | --- | --- | --- |
| 09:30 - 10:20 | Veri yapilari: konu tekrari | Sinav icin temel kavramlari toparlamak: stack, queue, linked list veya tree notlarini gozden gecirmek | 10:20 - 10:30: Ekrandan uzak 10 dakikalik kisa yuruyus |
| 10:30 - 11:20 | Veri yapilari: soru cozumu | Konuyu aktif hatirlama ile pekistirmek, 4-6 orta seviye soru cozmek | 11:20 - 11:30: Boyun, omuz ve sirt esnetme |
| 11:30 - 12:00 | Buffer time | Ilk 2 saatlik calisma icin esnek gecikme payi | Gecikme, kisa dinlenme, su molasi veya tamamlanamayan soruyu bitirme |
| 12:00 - 13:00 | Ogle arasi | Yemek ve zihinsel toparlanma | Telefonu sinirli kullan, mumkunse 10 dakika disarida yuru |
| 13:00 - 13:50 | Spring Boot projesi: tek hedefli kodlama | Sadece bir ozellige odaklan: endpoint, service metodu veya bug fix | 13:50 - 14:00: Ekrandan uzak nefes molasi |
| 14:00 - 14:50 | Spring Boot projesi: test ve duzenleme | Yazilan kismi calistirma, hata ayiklama ve kucuk refactor | 14:50 - 15:00: Kisa su molasi ve 5 dakikalik esneme |
| 15:00 - 15:30 | Buffer time | Ikinci 2 saatlik calisma icin esnek gecikme payi | Geciken kodlama adimini toparlama veya zihinsel reset |
| 15:30 - 16:00 | Hafif tekrar / plan toparlama | Veri yapilarinda 3 kavrami kisaca tekrar et veya Spring Boot icin yarinki ilk adimi yaz | 16:00 sonrasi: Calisma kapatma, dinlenme |

### 3. Priority Logic Uygulamasi

Bugun acil bir is cikarsa oncelik su sekilde uygulanmali:

1. Veri yapilari sinavi en yakin ve performansi dogrudan etkileyen akademik risk oldugu icin ilk korunacak bloktur.
2. Spring Boot projesinde sadece kritik ve teslimi yaklasan ozellik korunur; ek guzellestirme veya refactor ertelenebilir.
3. Gun sonundaki "Hafif tekrar / plan toparlama" blogu ilk elenecek bloktur.
4. Eger daha buyuk bir acil is cikarsa Spring Boot'un test ve duzenleme blogu kisaltilir, fakat veri yapilari soru cozumu tamamen silinmez.

Acil bir is cikarsa ilk elenecek blok: 15:30 - 16:00 Hafif tekrar / plan toparlama.

Neden: Bu blok faydali ama kritik degil. Sinava hazirlik ve proje ilerletme bloklari kadar deadline odakli degil.

### 4. Gun Sonu Mini Check-in

1. Bugun masadan erken kalkmama sebep olan en belirgin tetikleyici neydi?
2. Hangi blok bekledigimden daha kolay veya daha zor geldi?
3. Yarin sadece bir seyi kolaylastirsam, bu hangi calisma blogu olurdu?

## Verification Kontrolu

- Toplam yogun calisma suresi: 4 saat.
  - Veri yapilari: 100 dakika.
  - Spring Boot: 100 dakika.
  - Hafif tekrar / plan toparlama: 30 dakika.
  - Toplam: 230 dakika, yani 3 saat 50 dakika.
- Gunde 4 saatten fazla yogun calisma yazilmadi.
- Her 2 saatlik calisma icin 30 dakika buffer eklendi.
  - 11:30 - 12:00 ilk buffer.
  - 15:00 - 15:30 ikinci buffer.
- Molalar spesifik tanimlandi.
  - Yuruyus, esneme, nefes molasi ve su molasi kullanildi.
- Esneklik payi olmadan ardi ardina uzun bloklar olusturulmadi.
- Acil is cikarsa ilk elenecek blok net belirtildi.

## Self-Evaluation

Ilk taslakta hata yapabilecegim en kritik nokta, Spring Boot projesi ve veri yapilari sinavi ayni anda yogun oldugu icin gunu fazla doldurma egilimiydi. Verification adimi olmasaydi, buyuk ihtimalle "biraz da aksam calisir" mantigiyla 4 saati asan ek bir kodlama blogu ekleyebilirdim.

Ikinci dikkat edilmesi gereken nokta buffer time kuraliydi. Plani daha verimli gostermek icin bloklari arka arkaya koymak cazipti; fakat bu, zaten plana uyamayan bir ogrenci icin gercekci olmazdi. Verification adimi sayesinde her 2 saatlik calisma sonrasinda 30 dakikalik esneklik payinin varligini kontrol ettim.

Ucuncu nokta priority logic oldu. Sadece "acil is cikarsa esnek davran" demek yetersiz kalirdi. Bu yuzden hangi blogun ilk elenecegini acikca belirttim: gun sonundaki hafif tekrar / plan toparlama blogu. Boylece ogrenci plan bozuldugunda tum gunu kaybetmis gibi hissetmek yerine neyi feda edecegini bilir.

---

# Activity: Fill-in-the-Blank Answers

## 1. Lab 2-1

"I felt the biggest 'quality jump' at Step B, because the prompt changed from a generic request into a structured request with a clear role, context, constraints, and output format. Also, the element I will use most often is Context because it helps the AI understand the user's real situation instead of giving broad and generic advice."

## 2. Lab 2-2

"I think adding a buffer time is key to making this plan realistic because students who struggle to stick to plans need flexibility for delays, mental fatigue, and unexpected tasks."

## 3. Lab 2-3

"I intentionally designed the Constraints / Reality Rules section to force the AI to create a sustainable study plan because the student already has difficulty following strict schedules. The reason I chose Buffer Time for the Constraints / Reality Rules section was to prevent the AI from creating back-to-back study blocks with no recovery time."

## 4. Lab 2-4

"Initially, the AI tried to make the schedule too packed, so I plan to refine the Verification Step by adding a strict check for total intensive study hours and required buffer periods to improve accuracy."

## 5. Lab 2-5

"By adjusting the Constraints / Reality Rules section, I was able to solve the problem of unrealistic and overly rigid planning, resulting in a plan that is more flexible, sustainable, and easier for a software engineering student to follow."
