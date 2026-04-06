---
title: "Building an RBAC-Ready Mini ERP Starter"
date: "2026-04-05"
updatedAt: "2026-04-06"
excerpt: "A breakdown of how I structured a modular ERP starter with role-based authorization and scalable backend layout."
author: "Ives Tan Kian Hang"
category: "Backend Design"
tags:
  - backend
  - rbac
  - postgresql
  - jwt
  - system-design
cover: "/covers/cover-2.svg"
draft: false
---

# Why this project matters

Many student projects stop at login and CRUD.  
For this one, I focused on internal-system fundamentals: role boundaries, modularity, and maintainable backend design.

Project: [Mini ERP System](https://github.com/TWLY21/Mini-ERP-System)

## Core architecture priorities

- Clear separation between auth, domain modules, and route layers
- PostgreSQL-first data model
- JWT-based authentication with strict role checks
- Vue frontend that reflects backend role constraints

## What I learned

### 1. RBAC affects everything

Authorization is not just middleware. It influences navigation, endpoint design, and UI action availability.

### 2. Structure is a feature

A readable folder and service structure makes onboarding and future extension much easier than quick monolithic code.

### 3. Portfolio impact

This project is one of my best examples for backend interviews because it shows system thinking, not just implementation speed.

## Next iteration

I plan to add audit logging and richer domain modules so the starter feels closer to a real internal operations platform.
