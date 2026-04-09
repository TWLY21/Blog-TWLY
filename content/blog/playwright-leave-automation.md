---
title: "Data-Driven Playwright Automation for Leave Request Flows"
date: "2026-04-09"
updatedAt: "2026-04-09"
excerpt: "How I refactored leave-module testing into a scalable Playwright framework with fixtures, reusable flows, and scenario-driven coverage."
author: "Ives Tan Kian Hang"
category: "QA Automation"
tags:
  - playwright
  - test-automation
  - quality-engineering
  - fixtures
  - data-driven-testing
cover: "/covers/cover-1.svg"
draft: false
---

# Why I refactored this module

As the leave request scenarios grew, writing one-off tests for each leave type became hard to maintain.
I wanted a structure that is clean for today and scalable for future policy changes.

Primary project context:
[Leave Management System](https://github.com/TWLY21/leave-system)

## What I changed in the test architecture

- Moved to layered structure: pages, components, fixtures, flows, data, utils
- Centralized login session bootstrap with storage state setup
- Converted repeated scenario code into data-driven test generation
- Separated positive and negative business paths while keeping shared actions reusable

## Core implementation pattern

### 1. Setup + fixture strategy

I use setup to generate authenticated storage states and fixtures to inject ready-to-use page objects.
This removes repeated login logic from business tests and keeps test cases focused on behavior.

### 2. Data-driven scenario scaling

Instead of cloning spec files, I define scenario payloads in data files and loop them in specs.
That allows me to add new leave types by changing data, not rewriting test flow logic.

### 3. Reusable business flows

Common actions (open leave modal, choose type, fill reason, submit, assert toast/popup) are reused via flow helpers.
This keeps assertions consistent and reduces maintenance drift.

## Notable edge-case handling

- Negative over-limit flow computes `availableDays + 1` dynamically before applying days
- Calendar selection supports leave-specific behavior (for example, allowing weekend selection where policy permits it)
- Failure evidence is captured through scenario-specific screenshots

## Outcome and next steps

This refactor improved readability and reduced duplicate logic while keeping scenario coverage broad.
Next, I plan to add API-assisted setup/teardown hooks for faster and more deterministic runs.

