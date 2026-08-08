# Naukri Profile — Updated Content

Copy each section below into the corresponding Naukri profile field. Constraint notes included where relevant.

---

## Resume Headline
(250 char max; only ~120 chars show in recruiter search results — keep the key terms up front)

```
Software Engineer | Full-Stack & Backend (Angular, FastAPI, Node.js) + GenAI (RAG, LangGraph, Agentic AI) | Python, PostgreSQL | Azure, AWS, Kubernetes | 3+ Yrs
```

---

## Key Skills
(No hard cap, but only the first 5-6 tags show in recruiter search and ranking is JD-keyword-match driven — order matters, most important first)

```
Python, FastAPI, LangChain, LangGraph, RAG, Angular, PostgreSQL, PGVector, Agentic AI, Node.js,
Microservices, RESTful APIs, Azure OpenAI, Multi-Tenant RBAC, Docker, Kubernetes, CI/CD, Azure, AWS,
MongoDB, Redis, ElasticSearch, System Design, JavaScript, TypeScript, Claude Agent SDK
```

> Tip: for any specific job application, add 2-3 exact keywords from that JD into this list before applying —
> Naukri's search ranking scores on keyword overlap with the posting.

---

## IT Skills
(Structured table: Skill / Version / Last Used / Experience — fill each row)

| Skill | Version | Last Used | Experience |
|---|---|---|---|
| Python | 3.x | 2026 | 3 Years |
| FastAPI | — | 2026 | 2 Years |
| LangChain / LangGraph | — | 2026 | 1 Year |
| Angular | 15+ | 2026 | 3 Years |
| Node.js | — | 2025 | 2 Years |
| PostgreSQL / PGVector | — | 2026 | 2 Years |
| MongoDB | — | 2025 | 2 Years |
| Redis | — | 2026 | 2 Years |
| Docker / Kubernetes | — | 2026 | 2 Years |
| Microsoft Azure | — | 2026 | 2 Years |
| AWS | — | 2026 | 2 Years |
| GitHub Actions (CI/CD) | — | 2026 | 2 Years |

---

## Profile Summary
(Naukri's field here caps at **1,000 characters** — tighter than the 2,500 general guidance; this version is ~730 chars)

```
Software Engineer (3+ yrs) with end-to-end ownership across full-stack, backend, and GenAI systems - from
Angular/FastAPI/Node.js microservices to production RAG pipelines (LangChain, PostgreSQL PGVector hybrid
semantic + BM25 retrieval) and agentic AI workflows (LangGraph, Claude Agent SDK).

Independently designed and shipped two production platforms serving 10,000+ daily active users: AiroStrip (AI
Chrome extension, 30% adoption increase) and Appointment Mitra (WhatsApp booking bot, 500+ bookings/month,
1,500+ MAU). Cut deployment time 73% via CI/CD (GitHub Actions, Docker, Kubernetes) on Azure AKS and AWS EKS;
improved data throughput 35%.

Exploring Software Engineer, Full Stack, Backend, and GenAI/AI Engineer roles.
```

---

## Career Profile / Desired Job Details
(Dropdown fields — set these to widen your match across both traditional and AI-focused roles)

```
Current Industry: IT Services & Consulting / Software Product
Department: Engineering – Software & QA
Role Category: Software Development
Role: Software Engineer / Backend Engineer / AI Engineer (Naukri allows only one primary Role — pick based on
      the specific job you're applying to; use "Backend Engineer" as your default if forced to choose one)
Desired Job Type: Full-Time
Desired Employment Type: Permanent
Preferred Locations: Bengaluru; open to Remote (India)
Expected CTC: 20-22 LPA (tick "willing to negotiate" if available)
Notice Period: 60 Days
```

---

## Employment History

### Software Engineer
**Medha AI** · May 2025 – Present · Bengaluru

```
Leading full-stack development of AI-powered enterprise tools for one of India's largest hospital networks
(Narayana Health · Medha Analytics). Design and build production-grade conversational AI systems, cloud-native
applications, and scalable backend platforms for healthcare and customer engagement use cases.

- Designed RAG-based conversational AI pipelines using LangChain with contextual retrieval for live agent assistance.
- Built a WhatsApp AI Assistant for appointment booking combining a custom NLP-driven multi-turn dialogue state
  machine with an agentic, loop-engineered workflow built using LangGraph — including geolocation-based hospital
  matching, availability checks, and payment integration.
- Designed and shipped an embeddable, plug-and-play AI chatbot widget (RAG-based, PostgreSQL PGVector) that
  integrates into any webpage via a single script tag, now live on narayanahealth.org, serving 1,000+ daily active
  users and driving 5,000+ appointment bookings/month.
- Designed and implemented CI/CD pipelines (GitHub Actions, Docker, Kubernetes) across both Azure AKS and AWS EKS,
  reducing deployment time by 73% (45 to 12 minutes).
- Used GitHub Copilot and Claude Code daily to accelerate development, code review, and test generation.

Tech Stack: Python, LangChain, LangGraph, Claude Agent SDK, FastAPI, Azure OpenAI, PostgreSQL, Redis, PGVector,
Angular, Docker, Kubernetes, GitHub Actions, Trino, ElasticSearch
```

### Associate Software Engineer
**Medha AI** · Jul 2023 – May 2025 · Bengaluru

```
Full-stack engineer building web platforms and conversational automation tools for healthcare delivery at scale.

- YASA – Scalable Spreadsheet-Based Web Application. Designed the frontend using Angular; built backend services
  using Node.js and Python. Implemented RESTful APIs across MongoDB and PostgreSQL. Developed RBAC for secure
  view/edit permissions. Diagnosed and resolved a large-dataset bottleneck, improving throughput by 35%.
- Cloud Deployment & Infrastructure — Managed end-to-end deployment across both Microsoft Azure and AWS using
  Docker and Kubernetes (AKS & EKS). Configured CI/CD pipelines for automated Dev/Prod deployments. Handled DNS
  and SSL configuration for secure HTTPS access.
- Used GitHub Copilot and Claude Code for AI-assisted development and productivity optimization.

Tech Stack: Angular, Node.js, Python, MongoDB, PostgreSQL, Docker, Kubernetes, GitHub Actions
```

---

## Projects

### AiroStrip — AI-Powered Chrome Extension (Solo Build)
```
Client: Internal (Medha AI) | Role: Solo Developer | Duration: May 2025 – Present

Independently designed and built an AI-powered Chrome extension (Manifest V3) for Medha's healthcare products,
bringing AI chat and dashboard access directly into the browser — driving a 30% increase in user adoption. Backend
APIs for dashboard access, AI chat, and chat history, backed by PostgreSQL with RBAC and a multi-tenant permission
system enforcing per-tenant/per-user data isolation, with real-time cache invalidation. Built a retrieval pipeline
using PostgreSQL PGVector with hybrid semantic + BM25 keyword search. Integrated Microsoft SSO authentication.

Technologies: Python, FastAPI, PostgreSQL, PGVector, Angular, JavaScript, Chrome Extensions (Manifest V3)
```

### Appointment Mitra — WhatsApp Booking Assistant (Solo Build)
```
Client: Internal (Medha AI) | Role: Solo Developer | Duration: May 2025 – Present

Independently designed and built a WhatsApp Business API chatbot automating hospital appointment booking, now
handling 500+ bookings/month across 1,500+ monthly active users. Engineered the conversational engine combining
a custom NLP-driven multi-turn dialogue state machine with an agentic, loop-engineered workflow built using
LangGraph, with geolocation-based hospital matching and payment gateway integration.

Technologies: Python, FastAPI, PostgreSQL, WhatsApp API, LangGraph, NLP, Agentic AI, Loop Engineering
```

### YASA — Scalable Spreadsheet-Based Web Application
```
Client: Internal (Medha AI) | Role: Full Stack Developer | Duration: Jul 2023 – May 2025

Designed and built a full-stack, Excel-like data management platform enabling users to create, manage, and
securely share structured data. Implemented granular RBAC and RESTful APIs across MongoDB and PostgreSQL.
Diagnosed and resolved a large-dataset processing bottleneck, improving throughput by 35%.

Technologies: Angular, Node.js, Python, MongoDB, PostgreSQL
```

### Cloud Deployment & Infrastructure Setup
```
Client: Internal (Medha AI) | Role: DevOps / Backend Engineer | Duration: Jul 2023 – Present

Replaced manual, VM-based production deployments with fully automated CI/CD pipelines (GitHub Actions), cutting
deployment time by 73% (45 to 12 minutes). Deployed and orchestrated containerized workloads across both
Microsoft Azure (AKS) and AWS (EKS) with automated scaling and rollback strategies.

Technologies: Azure, AWS, Docker, Kubernetes, CI/CD, GitHub Actions
```

### Website AI Chatbot Widget — Live on narayanahealth.org
```
Client: Internal (Medha AI / Narayana Health) | Duration: 2026 – Present

Designed and shipped an embeddable, plug-and-play AI chatbot widget that integrates into any webpage via a single
script tag, now live on www.narayanahealth.org, serving 1,000+ daily active users and driving 5,000+ appointment
bookings/month. Built a RAG pipeline with document ingestion (PDF, DOCX, PPTX) into PostgreSQL PGVector, backed by
a FastAPI backend and Trino for federated data queries.

Technologies: Python, FastAPI, LangChain, PostgreSQL, PGVector, JavaScript, Trino
```

---

## Education

```
Bachelor of Engineering, Computer Science
Government College of Engineering, Erode
2019 – 2023 | CGPA: 8.18/10
```

---

## Accomplishments — Certifications

```
1. Software Engineer (Problem Solving, SQL & REST API) — HackerRank
   URL: https://www.hackerrank.com/certificates/77109dd85399

2. System Design: Low-Level to High-Level Solutions — GeeksforGeeks
   URL: https://media.geeksforgeeks.org/courses/certificates/ddc8b59cc39eea59552c001b68ebfd2b.pdf

3. Generative AI Applications Using Amazon Bedrock — AWS
```

---

## Accomplishments — Online Profile

```
LinkedIn: https://linkedin.com/in/isathishg
GitHub: https://github.com/Sathishg1342
```

---

## Personal Details / Resume Upload

```
Resume: Upload Sathish_Resume_ATS.pdf (keep under 2MB)
Profile Photo: Add a professional headshot — boosts profile completeness score
Languages: (fill as applicable)
```
