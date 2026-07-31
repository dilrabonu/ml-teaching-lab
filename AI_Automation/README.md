Step 1 
Introduction:
https://gamma.app/docs/Avtomatlashtirish-qanday-ishlaydi-fmp2ce3kvdmw9v9?mode=doc

Step 2:
Asking homeowrk in Mentimeter:
https://www.mentimeter.com/app/presentation/alyjgz8qgohvrqobjgwofzsvgdmm8ec5/edit?question=zxsdd9gjbkfw

Step 3:
Warm up:
file:///C:/Users/user/Downloads/3-warmup-bir-kunimiz.html 


Step 4:
New Theme:
Notion connect with Claude
1. Install MCP
2. Browse Notion
3. Write prompt for checking 
4. Excalidarw show the process
https://excalidraw.com/  

Step 5:
Consolidation:
file:///C:/Users/user/Downloads/5-konsolidatsiya-retsept-quruvchi.html


Lesson Plan:
https://miro.com/app/board/uXjVH4P5NKc=/


MCP notion
https://developers.notion.com/guides/mcp/get-started-with-mcp

# 🤖 How Automation Works — AI-Powered Lesson

> A 30-minute interactive lesson that shows how to automate real work with AI — **without writing any code**.

**Author:** Dilrabo Khidirova · ITPU, Fergana
**Audience:** Teachers and students (mixed level)
**Tools:** Claude + Notion (MCP) + interactive activities
**Language:** Uzbek (delivery) · English (this guide)

---

## 📖 About This Lesson

This lesson teaches **how AI automation works** through a live demo: connecting Claude to Notion via MCP and automating a real task (a lesson-plan generator). Each stage uses a different tool to keep learners engaged, and the whole flow builds from a warm-up to hands-on practice.

The core idea learners take away: **any automation = Trigger → AI → Tool → Result**, and a good result depends on a good prompt (RKVF: Role, Context, Task, Format).

---

## 🗺️ Lesson Flow (30 minutes)

| # | Stage | Time | Tool | What Happens |
|---|-------|------|------|--------------|
| 1 | **Introduction** | 2 min | Gamma | Title slide + hook: *"I planned this lesson with AI too — let me show you live."* |
| 2 | **Homework Review** | 2 min | Mentimeter | 3 interactive questions on prompts & RKVF (bridge to today) |
| 3 | **Warm-up** | 4 min | HTML activity | *"Our Day"* — which tasks can AI do? Learners guess, teacher reveals |
| 4 | **Main Part** | 14 min | Claude + Notion (MCP) | Live demo: connect, prompt, automate — a lesson-plan generator |
| 5 | **Consolidation** | 5 min | HTML game | *Recipe Builder* — drag & drop an automation flow, test it live |
| 6 | **Homework** | 3 min | Gamma | Assignment card: automate one task from your own field |

---

## 🔗 Lesson Resources

| Stage | Resource | Link |
|-------|----------|------|
| 1 & 6 | Gamma slides (intro + homework) | https://gamma.app/docs/Avtomatlashtirish-qanday-ishlaydi-fmp2ce3kvdmw9v9?mode=doc |
| 2 | Mentimeter presentation | https://www.mentimeter.com/app/presentation/alyjgz8qgohvrqobjgwofzsvgdmm8ec5 |
| 3 | Warm-up activity | `3-warmup-bir-kunimiz.html` |
| 4 | Excalidraw process diagram | https://excalidraw.com/ |
| 5 | Consolidation game | `5-konsolidatsiya-retsept-quruvchi.html` |
| — | Full lesson plan (Miro) | https://miro.com/app/board/uXjVH4P5NKc=/ |

---

## ⚙️ Main Part Setup — Connecting Claude to Notion (MCP)

The heart of the lesson is a **live demo** where Claude writes directly into Notion. This requires connecting Notion to Claude through MCP (Model Context Protocol).

> 📚 Official guide: https://developers.notion.com/guides/mcp/get-started-with-mcp

### Step 1 — Install / Connect the MCP server

Choose the option that matches how you use Claude:

**Claude Desktop (recommended for a live classroom demo)**
1. Open **Settings → Connectors**
2. Click **Add Connector** and enter this URL:
   ```
   https://mcp.notion.com/mcp
   ```
3. Complete the OAuth flow to connect your Notion workspace.
   *(Available on Pro, Max, Team, and Enterprise plans.)*

**Claude Code (terminal)**
```bash
claude mcp add --transport http notion https://mcp.notion.com/mcp
```
Then run `/mcp` and follow the OAuth flow.

**Connect from within Notion (alternative)**
1. Open **Settings** in the Notion app
2. Go to **Connections → Notion MCP**
3. Choose your AI tool and complete the OAuth flow

### Step 2 — Browse Notion

Once connected, confirm it works. Ask Claude something simple like:
> *"List the pages in my Notion workspace."*

If Claude can read your workspace, the connection is live.

### Step 3 — Write the prompt (the automation trigger)

Use a **professional RKVF prompt**. This is the exact prompt for the demo:

```
ROLE:
You are an experienced teacher and lesson designer.
You specialize in modern, interactive lesson plans.

CONTEXT:
I teach at a university. My students are mixed level.
I need a complete, practical lesson plan for today's topic.
Topic: "Introduction to Artificial Intelligence"
Duration: 80 minutes
Language: Uzbek

TASK:
Build a full lesson plan with these stages: introduction, warm-up,
main part, practice, consolidation, homework. For each stage show
the time, what the teacher does, and what the student does.

FORMAT:
Save the result to a Notion page as a table.
Columns: Stage | Time | Teacher does | Student does | Materials.
Page title: "Lesson Plan — Introduction to AI".
```

Press Enter — Claude creates the Notion page automatically.

### Step 4 — Show the process in Excalidraw

Open https://excalidraw.com/ and walk through the 4-step flow:

```
1. CONNECT  →  2. COMMAND  →  3. RESULT  →  4. DONE
   (MCP)         (prompt)       (Notion)      (reusable)
```

Reinforce: **a good result needs a good prompt (RKVF).**

---

## 💡 Teaching Tips

- **If MCP isn't connected:** Claude will output the table as text — copy it into Notion manually. Show both methods (browser vs MCP) and explain the difference.
- **Security:** Always review what the MCP server does before it writes. See Notion's [security best practices](https://developers.notion.com/guides/mcp/mcp-security-best-practices).
- **Mixed audience:** In the warm-up, switch between "Teacher's Day" and "Student's Day" so everyone sees themselves.
- **Keep the human in the loop:** Two tasks in the warm-up stay "human only" — this reassures learners that AI removes boring work, not their role.

---

## 🎯 Homework

Learners pick **one repetitive task** from their own field, write an RKVF prompt for it, run it in Claude, save the result to Notion, and send a screenshot. The 3 most creative submissions are presented in the next lesson.

---

## 📌 Notes

- Notion MCP uses **OAuth** — a human must authorize access (no bearer tokens).
- File/image uploads are not yet supported through Notion MCP.
- Recommended transport: **Streamable HTTP** (`https://mcp.notion.com/mcp`).

---

*Built for an interactive, tool-rich teaching experience — one lesson, six stages, six different tools.*
