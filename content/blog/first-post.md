---
title: "Designing a Production-Oriented Leave Management System"
date: "2026-04-04"
updatedAt: "2026-04-06"
excerpt: "How I structured auth, leave workflows, and test reliability in my strongest full-stack project."
author: "Ives Tan Kian Hang"
category: "Full-Stack"
tags:
  - nodejs
  - express
  - vue
  - testing
  - architecture
cover: "/covers/cover-1.svg"
draft: false
---

# Project context

I wanted one project that represents how I think about real product delivery, not only UI screens.

The result was my **Leave Management System**:
[GitHub Repository](https://github.com/TWLY21/leave-system)

## What I focused on

- Role-aware workflow: employee actions vs admin actions
- API and schema structure that can scale with more leave rules
- Practical auth and session handling
- Better testing reliability for edge cases

## Key implementation decisions

### 1. Business flow first, UI second

I defined leave states and transitions early (pending, approved, rejected), then aligned backend endpoints and frontend actions around that.

### 2. Testing based on real failure paths

I paid extra attention to negative scenarios such as over-limit leave applications and improved selector strategy to reduce flaky automation.

### 3. CI-ready structure

I treated this as portfolio-level engineering by organizing code so it can run under repeatable checks.

## Outcome

This is currently my most complete full-stack portfolio piece because it combines architecture, workflow logic, and quality discipline in one system.
