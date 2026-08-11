# Amazon / AWS Careers Profile — Updated Content

Amazon's portal (amazon.jobs) is an enterprise ATS, not a consumer job board like Naukri — it doesn't publish
granular per-field character limits. Constraints below are the ones actually confirmed via Amazon's own help
documentation; where a limit isn't publicly stated, that's flagged explicitly rather than guessed.

---

## Confirmed constraints

- Create an account via **Amazon Passport** (amazon.jobs login) — separate from your regular Amazon account.
- Resume upload accepts standard formats (**PDF, DOC, DOCX**) — no Amazon-specific file-size figure is published;
  general ATS norms (2-5 MB cap) apply, and your current PDF is nowhere close to that.
- **LinkedIn profile import** is supported as an alternative/supplement to resume upload.
- Optional **cover letter** and, for some roles (writing, engineering, design), **work samples** upload.
- **Voluntary self-identification** (veteran status, disability, ethnicity) — optional, mainly US-centric.
- Each posting lists **Basic Qualifications** and **Preferred Qualifications** — these aren't profile fields you
  fill in, but Amazon's parser and recruiters screen your resume/application directly against this exact
  language, so mirror the posting's own phrasing where truthfully applicable.
- No published character limits on free-text fields.

## The one Amazon-specific thing that actually matters: Leadership Principles

Amazon evaluates every candidate — resume screen through interview — against its **16 Leadership Principles**
(Customer Obsession, Ownership, Invent and Simplify, Bias for Action, Deliver Results, etc.). This isn't a form
field, but your cover letter and interview answers should be framed in this language. The Leadership Principles
your actual project history maps to most naturally:

- **Ownership**: independently designed and shipped AiroStrip, Appointment Mitra, and the narayanahealth.org
  chatbot widget end-to-end, with no handoff.
- **Invent and Simplify**: built a hybrid semantic + BM25 retrieval pipeline and an agentic LangGraph workflow
  rather than defaulting to off-the-shelf approaches.
- **Deliver Results**: 73% deployment time reduction, 35% throughput improvement, 5,000+ monthly bookings driven
  by the chatbot widget.

## Profile — Skills

```
Python, FastAPI, LangChain, LangGraph, Claude Agent SDK, RAG, Angular, Node.js, PostgreSQL, PGVector,
AWS, Microsoft Azure, Docker, Kubernetes (EKS, AKS), CI/CD, GitHub Actions, RESTful APIs, Microservices,
Multi-Tenant RBAC, MongoDB, Redis, ElasticSearch, System Design, JavaScript, TypeScript
```

## Profile — Areas of Work & Job Families
(Amazon's full published "areas of work" and "job family" taxonomy is large — recommendations below are scoped
to what genuinely matches your dual full-stack + GenAI profile, not everything available)

**What areas of work are you interested in?**

```
Keep: Amazon Web Services
Keep: Amazon Artificial General Intelligence (AGI)
```
Both are correct as selected — AWS maps to your cloud/backend/full-stack infrastructure work (Azure/AWS, Docker,
Kubernetes, CI/CD), and AGI maps directly to your RAG/agentic AI work (LangChain, LangGraph, Claude Agent SDK).
This pairing is the accurate reflection of your dual capability — no changes needed here.

**What job families are you interested in?** (Amazon caps this at exactly 3 selections)

```
1. Software Development                       — strongest fit; your core discipline across every project
                                                  (AiroStrip, Appointment Mitra, YASA, the chatbot widget)
2. Solutions Architecture                      — matches your cloud infrastructure design (dual Azure AKS +
                                                  AWS EKS deployment, CI/CD automation) and RAG pipeline
                                                  architecture decisions (hybrid semantic + BM25 retrieval design)
3. Business Intelligence and Data Engineering  — matches your PGVector/RAG data pipelines and Trino federated
                                                  queries in the chatbot widget project
```

Drop **Database Administration** from your current selection — it's a distinct specialization (backup/recovery,
replication tuning, capacity planning) that your resume doesn't actually demonstrate; you've built systems that
*use* PostgreSQL/MongoDB/Redis extensively, but that's different from DBA work. Solutions Architecture is the
better-evidenced swap.

(Full list of Amazon's published job categories, for reference if you want to add others later: Administrative
Support, Applied Science, Business Intelligence and Data Engineering, Data Science, Database Administration,
Hardware Development, Operations/IT/Support Engineering, Project/Program/Product Management—Technical, Research
Science, Software Development, Solutions Architecture, Supply Chain and Transportation Management, Systems/
Quality/Security Engineering, plus several non-technical categories not relevant to your profile.)

## Profile — Work Experience

### Software Engineer
**Medha Analytics (Narayana Health)** | May 2025 – Present | Bengaluru, India

```
Own end-to-end design and delivery of AI-powered enterprise tools for one of India's largest hospital networks
(Narayana Health · Medha Analytics). Independently designed and shipped an embeddable AI chatbot widget, live on
www.narayanahealth.org, serving 1,000+ daily active users and driving 5,000+ appointment bookings/month, using a
RAG pipeline (LangChain, PostgreSQL PGVector) and Trino for federated data queries. Built RAG-based conversational
AI pipelines and agentic AI workflows (LangGraph, Claude Agent SDK). Independently built two additional production
platforms serving 10,000+ daily active users. Automated CI/CD across AWS EKS and Azure AKS, cutting deployment
time 73% (45 to 12 minutes). Diagnosed and resolved a data-processing bottleneck, improving throughput 35%.
```

### Associate Software Engineer
**Medha Analytics (Narayana Health)** | Jul 2023 – May 2025 | Bengaluru, India

```
Built YASA, a scalable full-stack data management platform (Angular, Node.js, Python, MongoDB, PostgreSQL) with
multi-tenant RBAC. Owned end-to-end cloud deployment across AWS and Azure, including CI/CD, DNS, and SSL setup.
```

## Profile — Education

```
Bachelor of Engineering, Computer Science
Government College of Engineering, Erode
July 2019 – June 2023 | CGPA: 8.18/10
```

## Cover Letter Template
(Written in Amazon's preferred style: specific metrics, ownership language, no fluff)

```
Dear Hiring Team,

I'm applying for the [Role Title] position. As a Software Engineer with 3+ years of experience, I've owned
production systems end-to-end — from full-stack platforms to GenAI systems — with measurable customer and
business impact.

I independently designed and shipped an AI chatbot widget now live on www.narayanahealth.org, driving 5,000+
appointment bookings/month for 1,000+ daily active users, built on a RAG pipeline (LangChain, PostgreSQL
PGVector) and Trino. I also independently built two other production platforms serving 10,000+ daily active
users combined, and automated CI/CD pipelines across AWS EKS and Azure AKS, cutting deployment time 73%.

[1-2 sentences tying this to the specific AWS org/team — e.g. AWS Bedrock, SageMaker, a specific service team —
and why your RAG/agentic AI experience is directly relevant.]

I'd welcome the opportunity to bring this ownership and results-driven approach to your team.

Best regards,
Sathish G
sathishgdpi@gmail.com | linkedin.com/in/isathishg | github.com/Sathishg1342
```

---

## Practical notes

1. **Amazon's portal has no keyword-ranked search like Naukri** — your resume content matters more than any
   profile field wording. Keep `Sathish_Resume_ATS.pdf` as your primary lever; these profile fields are secondary.
2. **A referral changes outcomes more at Amazon than at most companies** — if you know anyone there, use the
   internal referral program before cold-applying.
3. No published application-frequency cap, but avoid mass-applying to near-duplicate roles in a short window —
   recruiters can see this and it reads poorly.
