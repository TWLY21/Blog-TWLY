---
title: "Internship Reflection: From Manual QA to Playwright Automation"
date: "2026-04-09"
updatedAt: "2026-04-09T22:10:00+08:00"
excerpt: "A full summary of my internship journey: learning HRMS testing fundamentals, scaling into automation, and building a more maintainable QA workflow."
author: "Ives Tan Kian Hang"
category: "Internship Engineering"
tags:
  - internship
  - qa
  - playwright
  - test-automation
  - engineering-growth
cover: "/covers/cover-2.svg"
draft: false
---

# Internship context

My internship focused on QA and automation work for HRMS and Payroll-related systems.
I worked across both Malaysia and Singapore versions, handled manual testing first, and later moved into Playwright automation work.

This post is my final reflection on what I learned and what I delivered.

## Phase 1: Manual QA foundation (early weeks)

I started with product familiarization and module understanding:

- Leave, Claim, Attendance, Payroll, Approval, and ESS workflows
- role-based behavior across Employee, Payroll, and Approver perspectives
- staging vs live environment differences
- defect tracking and test case documentation standards

I also learned how important clear defect reporting is.
A defect report is only useful when developers can reproduce it quickly.

## Phase 2: Large-volume validation and discipline

As workload increased, I handled broader functional/regression coverage and defect verification cycles.
During this phase, I learned to stay systematic under high volume and deployment delays.

Examples of real execution pressure I had to manage:

- high-volume test execution batches (including 1,428 assigned test sections)
- repeated retesting after new deployments
- multilingual UI/translation validation and documentation quality checks
- balancing progress while waiting for deployment windows

This phase shaped my test discipline and consistency.

## Phase 3: Transition into automation (Playwright)

After building QA fundamentals, I shifted into automation work.
I first learned Playwright basics, then applied it to real testing tasks.

The biggest shift was moving from one-off scripts into structured automation layers:

- setup/auth state handling
- reusable fixtures
- page/component responsibilities
- data-driven scenario coverage
- cleaner report and summary output

I also worked on stability and usability improvements for the automation flow, including:

- better waits and readiness checks
- clearer command/runbook usage
- more readable operator logs and failure summaries
- practical troubleshooting support for team usage

## What this internship taught me

### 1. QA is not only about finding bugs

Good QA work means clear communication, reproducible reporting, and strong follow-through in retesting.

### 2. Structure improves speed over time

A maintainable test structure is faster in the long run than repeatedly patching individual scripts.

### 3. Reliability is a product value

Stable tests improve release confidence and reduce noise for developers.

### 4. Engineering growth is incremental

My progress came from repeated cycles: learn, apply, review, refine, and document.

## Final takeaway

This internship helped me grow from manual QA execution into automation-oriented engineering thinking.
I became more confident in building repeatable testing workflows, communicating issues clearly, and structuring work for long-term maintainability.

The core lesson I will carry forward:
well-structured quality work is not support activity, it is product delivery work.
