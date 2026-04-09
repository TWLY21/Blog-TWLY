---
title: "Internship Lessons: How I Made Playwright Automation More Reliable"
date: "2026-04-09"
updatedAt: "2026-04-09T20:15:00+08:00"
excerpt: "What changed in my internship automation approach: from fragile scripts to a reusable framework with fixtures, scenario data, and stability-first test design."
author: "Ives Tan Kian Hang"
category: "Internship Engineering"
tags:
  - internship
  - playwright
  - test-automation
  - qa
  - engineering-growth
cover: "/covers/cover-2.svg"
draft: false
---

# Why this internship project mattered

During internship, I realized automation quality is not about how many tests we can write quickly.
It is about whether tests are trustworthy, maintainable, and useful when the team needs confidence before release.

My target system was the leave request module.
At first, scenarios were working but repetitive and harder to maintain as requirements changed.

## The shift I made

I moved from case-by-case scripting into a framework-style structure:

- setup layer for authenticated sessions
- fixture layer for reusable test context
- page/component objects for UI responsibilities
- flow layer for business actions
- data layer for scalable scenario coverage

This made changes safer because each layer had a clear responsibility.

## Most important lessons learned

### 1. Reliability beats raw test count

A smaller suite with stable selectors and clear assertions is more valuable than many fragile scripts.
I focused on reducing flakiness and improving signal quality in failures.

### 2. Data-driven tests scale better than copy-paste specs

Instead of cloning similar test files, I stored scenarios in data files and looped them in specs.
That allowed faster extension for both positive and negative leave paths.

### 3. Edge cases should be first-class citizens

I added negative tests that compute over-limit days dynamically from available leave balance.
This made validation behavior realistic and aligned with business rules.

### 4. Test architecture is part of engineering quality

By separating pages, fixtures, flows, and data, the suite became easier to explain, review, and hand over.
This structure also supports future additions without major rewrites.

## Practical outcomes

- clearer failure investigation with scenario-based screenshots
- faster onboarding for others reading the test code
- lower maintenance overhead when leave logic changes
- stronger confidence in release readiness

## What I will keep doing next

- introduce API-assisted setup where possible to speed up and stabilize test preparation
- continue removing hidden flakiness from waits/selectors
- keep documentation close to code so handovers stay smooth

This internship reinforced one core mindset for me:
well-structured automation is a product asset, not just a testing script.
