# AI Usage Report

**Course:** SWE 363 – Web Engineering<br>
**Assignment:** Assignment 3 – Advanced Functionality<br>
**Student:** Sarah Almanjahi<br>
**Student ID:** 202371590

## Tools Used & Use Cases

OpenAI Codex (GPT-6) reviewed the inherited portfolio against the Assignment 3 requirements. It inspected the application source, assets, documentation, and Git history, identified gaps, and prepared this report. The [Assignment 2 AI usage report](ai-usage-report-assignment2.md) preserves the previous assignment's record.

## Benefits & Challenges

The review identified existing features that the portfolio can build on, including category filtering, client-side validation, and lazy-loaded images. It also found gaps that source inspection alone cannot resolve, including measured performance and cross-browser behavior. Those checks remain pending.

For the GitHub integration, Codex used the username from the Git remote and checked GitHub’s documentation for the public repository endpoint and pagination. Mocked responses made it possible to exercise failure cases independently of the live service.

## Learning Outcomes

Topics identified for Sarah to review include how filter selections update the DOM, how browser storage can preserve a preference after reload, and how Lighthouse measures page performance. Sarah will record her own learning outcomes after reviewing and testing the upcoming changes.

## Responsible Use & Modifications

Codex checked the review findings against the source files and checked the archive and evidence ignore rules with Git. Sarah will confirm any manual testing and review each future implementation before continuing to the next feature. Browser testing and Lighthouse measurements were outside this documentation review.

## AI Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|---|---|---|---|---|---|
| C01 | OpenAI Codex (GPT-6) | 2026-11-21 | Review the Assignment 2 baseline against the Assignment 3 rubric, prepare the AI report, and protect private evidence from accidental staging | `docs/ai-usage-report.md`, `docs/ai-usage-report-assignment2.md`, `.gitignore` | Codex drafted this report, copied the prior report verbatim, and added ignore rules for the evidence. It compared the archive against the original, checked the ignore rules, and reviewed the Git diff. Sarah’s review is pending. |
| C02 | OpenAI Codex (GPT-6) | 2026-11-21 | Implement the GitHub REST API integration for the portfolio | `index.html`, `css/styles.css`, `js/script.js`, `docs/ai-usage-report.md` | Codex added a responsive repository section and a paginated, unauthenticated fetch. Node checks covered loading, repository names, descriptions and links, the fallback for missing descriptions, empty results, HTTP errors, and network failures. A live request returned three public repositories. Sarah’s manual browser verification is pending. |
| C03 | OpenAI Codex (GPT-6) | 2026-11-21 | Combine project category filtering with sorting and initialize the visible count | `index.html`, `css/styles.css`, `js/script.js`, `docs/ai-usage-report.md` | Codex added a labeled sort dropdown and a shared update function for the order, count, empty state, and button state. Sarah supplied the completion dates, and Codex added them as project metadata and enabled both chronological options. Node checks passed for all sort modes using the dates from the page, combined filtering, the initial count, `aria-pressed`, and the empty state. Sarah’s manual browser verification is pending. |

Add one entry per AI conversation or separately logged AI-generated artifact. Use `C04`, `C05`, and so on for conversations and `A01`, `A02`, and so on for artifacts. Record actual dates, tool and model labels, files affected, student modifications, and checks performed.

## AI Evidence and Commit Attribution

Submit `202371590-SarahAlmanjahi-assignment3-ai-evidence.zip` separately. Place complete, unedited AI conversations in `conversations/` and intermediate AI-generated artifacts in `artifacts/`. Sarah is responsible for exporting the conversations and assembling the ZIP. Keep the evidence folders and ZIP outside the public Git history.

Use an `Assisted-by:` trailer on AI-assisted code commits that names the actual tool and model. For this conversation, the attribution is `Assisted-by: OpenAI Codex (GPT-6)`.

## AI Usage Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Full Name:** Sarah Almanjahi<br>
**Student ID:** 202371590<br>
**Date:** 11/21/2026<br>
**Signature:** SarahS.
