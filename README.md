# 🧠 ML Teaching Lab

> Hands-on Machine Learning demos, interactive lesson plans,
> and Python notebooks — where teaching meets engineering.

**By [Dilrabo](https://github.com/dilrabonu)** | ML Engineer & AI Educator

---

## 📁 Repository Structure

```
ml-teaching-lab/
├── 01-decision-trees-random-forests/   # Demo lesson + Python practice
├── 02-ML-jarayoni-model-baholash/      # ML workflow & model evaluation
├── 03-DOM-BOM-HTML-tushunchalari/      # DOM, BOM & interactive web basics
├── AI_Automation/                      # AI automation lesson (Claude + Notion MCP)
└── resources/                          # Cheat sheets, lesson plans, slides
```

---

## 🎯 Purpose

This repo serves two goals:

1. **Teaching** — Complete lesson materials for university courses, including
   lesson plans, interactive activities, and student handouts.

2. **Portfolio** — Demonstrates practical ML engineering and AI-integration
   skills for Applied Scientist and ML Engineer roles.

---

## 📚 Lessons

### 🌳 01 — Decision Trees & Random Forests
Demo lesson with a full Python practice notebook.

| File | Description |
|------|-------------|
| `heart_disease_ml_demo.ipynb` | Full practice — Gini, overfitting, RF, GridSearch |
| `Demo_Lesson_plan_Dilrabo_Khidirova` | 90-min interactive lesson plan |
| `live_tree_game.html` | Interactive in-class activity |

**Dataset:** UCI Heart Disease (Cleveland) · **Skills:** Sklearn, Matplotlib, Hyperparameter tuning

### 🔬 02 — ML Workflow & Model Evaluation
ML pipeline and model-evaluation lesson with a live simulator.

| File | Description |
|------|-------------|
| `CatDog_Classifier_ML_Jarayoni.ipynb` | Image classification workflow |
| `Demo_Dars_2_ML_v2_Simulyator` | Interactive evaluation simulator |
| `ML_Jarayoni_Taqdimot.pptx` | Lesson slides |

### 🌐 03 — DOM, BOM & HTML Concepts
Web fundamentals lesson with interactive diagrams and playground.

| File | Description |
|------|-------------|
| `DOM_Sxema.excalidraw` / `BOM_Sxema.excalidraw` | Visual concept diagrams |
| `Dars_Rejasi_FINAL_DOM_BOM_Event` | Full lesson plan |
| `interactive_tools.md` | Interactive teaching tools |

### 🤖 AI_Automation — How Automation Works *(new)*
A 30-minute interactive lesson: automate real work with AI — **no code required**.
Live demo of connecting **Claude to Notion via MCP** to automate a lesson-plan generator.

| File | Description |
|------|-------------|
| `README.md` | Full lesson guide + Notion MCP setup |
| `warmup.html` | "Our Day" — which tasks can AI do? (teacher/student modes) |
| `avtomatlashtirish-retsepti.excalidraw` | Automation flow: Trigger → AI → Tool → Result |
| `prompt.py` | The professional RKVF prompt used in the demo |

**Audience:** Teachers & students (mixed) · **Tools:** Claude, Notion (MCP), Gamma, Mentimeter, Excalidraw
**Lesson plan (Miro):** https://miro.com/app/board/uXjVH4P5NKc=/

---

## 🛠️ Tech Stack

**ML:** Python · Scikit-learn · Pandas · NumPy · Matplotlib
**AI/Automation:** Claude · Notion MCP · LangChain · HuggingFace
**Web/Teaching:** HTML · Excalidraw · Gamma · Mentimeter · Miro

---

## ▶️ How to Run

**Python notebooks:**
```bash
git clone https://github.com/dilrabonu/ml-teaching-lab.git
cd ml-teaching-lab/01-decision-trees-random-forests
pip install -r requirements.txt
python heart_disease_ml_demo.ipynb
```

**AI Automation lesson:**
```bash
cd ml-teaching-lab/AI_Automation
# Open warmup.html in a browser, follow README.md for the Notion MCP demo
```

---

## 📫 Contact

**LinkedIn:** https://www.linkedin.com/in/dilrabo-khidirova-3144b8244/
**Email:** dilrabo.khidirova91@gmail.com