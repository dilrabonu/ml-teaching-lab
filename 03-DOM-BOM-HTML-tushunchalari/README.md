# DOM, BOM va Event'lar: HTML elementlarini JavaScript orqali boshqarish

**Mentor:** Dilrabo Xidirova
**Loyiha:** "Al-Xorazmiy vorislari" mentorlik dasturi
**Yo'nalish:** Frontend Development / JavaScript asoslari
**Auditoriya:** 8–11-sinf o'quvchilari
**Davomiyligi:** 20–25 daqiqa (demo dars, video-yozib olinadi)

## Dars haqida

Ushbu dars o'quvchilarni veb-sahifaning ichki tuzilishi (**DOM**), brauzerning o'zi bilan ishlash (**BOM**), JavaScript yordamida sahifani "jonlantirish" (**elementni boshqarish**) va foydalanuvchi harakatiga javob berish (**Event'lar**) bilan tanishtiradi. Dars atamasiz warm-up'dan boshlanadi, hikoya orqali yumshoq kirish qiladi, jonli demolar bilan davom etadi, barcha mavzularni birlashtiruvchi kichik loyiha bilan mustahkamlanadi va musobaqa-o'yin bilan yakunlanadi.

## Dars maqsadlari

- DOM va BOM nima ekanini va ular orasidagi farqni tushunish
- `querySelector` orqali elementni topish mantiqini tushunish
- `.textContent` va `.style` orqali elementni o'zgartira olish
- `addEventListener` orqali foydalanuvchi harakatiga interaktiv javob hosil qila olish
- Barcha to'rt tushunchani bitta izchil hikoya sifatida bog'lay olish

## Dars tuzilishi (~22 daqiqa)

| # | Bosqich | Vaqt | Vosita |
|---|---|---|---|
| 1 | Warm-up: "Taxmin qiling!" | 0:00–2:30 | `Taxmin_Qiling.html` |
| 2 | Hikoya: Pult va Qo'ng'iroq | 2:30–4:00 | `Hikoya_Tushuntirish.html` |
| 3 | DOM nima? | 4:00–7:00 | `DOM_Sxema.excalidraw` + Chrome DevTools |
| 4 | BOM nima? | 7:00–9:30 | `BOM_Sxema.excalidraw` + `DOM_BOM_Playground.html` |
| 5 | Elementni boshqarish + Event'lar | 9:30–14:00 | `DOM_BOM_Playground.html` |
| 6 | Konsolidatsiya loyihasi | 14:00–18:00 | `JS_Playground_Loyiha/` |
| 7 | Yakunlovchi o'yin | 18:00–20:30 | `60_Soniyalik_Chaqiriq.html` |
| 8 | Yakunlash + uy vazifasi | 20:30–22:00 | `Element_Event_Amaliyoti.html` |

To'liq dars rejasi va metodika: **`Dars_Rejasi_FINAL_DOM_BOM_Event.docx`**
So'zma-so'z nutq skripti: **`Nutq_Skripti_YAKUNIY_DOM_BOM_Event.docx`**

## Fayllar va vositalar

### Taqdimot va hujjatlar
| Fayl | Vazifasi |
|---|---|
| [`DOM_BOM_Event_Taqdimot_YAKUNIY.pptx`](./DOM_BOM_Event_Taqdimot_YAKUNIY.pptx) | Video uchun asosiy taqdimot (12 slayd, barcha 8 bosqichni qamrab oladi) |
| [`Dars_Rejasi_FINAL_DOM_BOM_Event.docx`](./Dars_Rejasi_FINAL_DOM_BOM_Event.docx) | To'liq professional dars rejasi |
| [`Nutq_Skripti_YAKUNIY_DOM_BOM_Event.docx`](./Nutq_Skripti_YAKUNIY_DOM_BOM_Event.docx) | So'zma-so'z nutq skripti (video yozish uchun) |

### Interaktiv vositalar (brauzerda ochiladi, internet kerak emas)
| Fayl | Vazifasi |
|---|---|
| [`Taxmin_Qiling.html`](./Taxmin_Qiling.html) | Warm-up — atamasiz bashoratchilik o'yini |
| [`Hikoya_Tushuntirish.html`](./Hikoya_Tushuntirish.html) | Pult/Televizor va Eshik qo'ng'irog'i animatsiyali hikoyalari |
| [`DOM_BOM_Playground.html`](./DOM_BOM_Playground.html) | Mentor ko'rsatadigan asosiy jonli demo (DOM, BOM, Element, Event) |
| [`60_Soniyalik_Chaqiriq.html`](./60_Soniyalik_Chaqiriq.html) | Yakunlovchi tezkor toifalash o'yini (vaqt + ball) |
| [`Element_Event_Amaliyoti.html`](./Element_Event_Amaliyoti.html) | O'quvchi mustaqil bajaradigan amaliy mashqlar (uy vazifasi) |

### Sxemalar (Excalidraw)
| Fayl | Vazifasi |
|---|---|
| [`DOM_Sxema.excalidraw`](./DOM_Sxema.excalidraw) | DOM tushunchaviy sxemasi (uy/xona o'xshatishi + haqiqiy daraxt) |
| [`BOM_Sxema.excalidraw`](./BOM_Sxema.excalidraw) | BOM tushunchaviy sxemasi (DOM ichkarida, BOM tashqarida) |

### Konsolidatsiya loyihasi
| Fayl | Vazifasi |
|---|---|
| [`JS_Playground_Loyiha/index.html`](./JS_Playground_Loyiha/index.html) | Streamlit uslubidagi, barcha 4 mavzuni birlashtirgan yakuniy ilova |
| [`JS_Playground_Loyiha/style.css`](./JS_Playground_Loyiha/style.css) | Ilovaning ko'rinishi |
| [`JS_Playground_Loyiha/script.js`](./JS_Playground_Loyiha/script.js) | Barcha mantiq, 4 bo'limga izohlar bilan bo'lingan |

### Tashqi vositalar (qo'shimcha mustahkamlash uchun)
- [Excalidraw](https://excalidraw.com/) — sxemalarni tahrirlash uchun
- [Miro taxtasi](https://miro.com/app/board/uXjVH-X_4HU=/) — kengaytirilgan vizual taxta
- [Nearpod — DOM, BOM va Event'lar darsi](https://nearpod.com/library/) — interaktiv taqdimot va "Time to Climb" viktorinasi

## Video yozish tartibi (tavsiya)

1. `DOM_BOM_Event_Taqdimot_YAKUNIY.pptx` ni prezentatsiya rejimida oching (1, 2-slaydlar)
2. `Taxmin_Qiling.html` ni ochib, warm-up o'yinini o'tkazing
3. Taqdimotga qayting (3-slayd), so'ng `Hikoya_Tushuntirish.html` ni ochib, ikkala sahnani ko'rsating
4. Taqdimotga qayting (4-slayd), so'ng `DOM_Sxema.excalidraw` ni oching, keyin Chrome DevTools bilan davom eting
5. Taqdimotga qayting (5-slayd), so'ng `BOM_Sxema.excalidraw` ni oching
6. Taqdimotga qayting (6, 7-slaydlar), so'ng `DOM_BOM_Playground.html` da to'liq demo qiling
7. Taqdimotga qayting (8-slayd), so'ng Windsurf'da `JS_Playground_Loyiha` ni oching — `script.js` va brauzerni yonma-yon ko'rsatib, barcha 4 bo'limni ko'rib chiqing
8. Taqdimotga qayting (9-slayd), so'ng `60_Soniyalik_Chaqiriq.html` bilan yakunlovchi o'yinni o'ynang
9. Taqdimotga qayting (10, 11-slaydlar — Xulosa, Yakunlash), `Element_Event_Amaliyoti.html` ni uy vazifasi sifatida tavsiya qiling

**Maslahat:** har bir vosita alohida brauzer tab'ida oldindan ochib qo'yilsa, video yozish paytida tab almashtirish tezroq va tekis chiqadi.

## Foydalanilgan AI va texnologik vositalar

- **Claude (Anthropic)** — barcha interaktiv vositalar, taqdimot, dars rejasi va nutq skripti tayyorlash uchun
- **Chrome DevTools** — real saytning DOM daraxtini jonli ko'rsatish uchun
- **Excalidraw** — DOM va BOM tushunchaviy sxemalari
- **Miro** — kengaytirilgan vizual taxta
- **Nearpod** — interaktiv taqdimot va yakunlovchi viktorina
- **Windsurf** — kod yozish va ko'rsatish muhiti

## Fayllar tuzilishi (GitHub joylashuvi)

```
03-DOM-BOM-HTML-tushunchalari/
├── README.md
├── DOM_BOM_Event_Taqdimot_YAKUNIY.pptx
├── Dars_Rejasi_FINAL_DOM_BOM_Event.docx
├── Nutq_Skripti_YAKUNIY_DOM_BOM_Event.docx
├── Taxmin_Qiling.html
├── Hikoya_Tushuntirish.html
├── DOM_BOM_Playground.html
├── 60_Soniyalik_Chaqiriq.html
├── Element_Event_Amaliyoti.html
├── DOM_Sxema.excalidraw
├── BOM_Sxema.excalidraw
├── JS_Playground_Loyiha/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── video-link.md
```

## Video

Video-yozuv havolasi: 

## Muallif

**Dilrabo Xidirova** — Senior Lecturer, IT Park University (ITPU), Fergana, Uzbekistan. ML muhandisi, "Al-Xorazmiy vorislari" mentorlik dasturi ishtirokchisi.