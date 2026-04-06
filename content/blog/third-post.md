---
title: "From Swipe Prototype to Mobile App Architecture"
date: "2026-04-06"
updatedAt: "2026-04-06"
excerpt: "How I approached swipe interactions, match state flow, and screen modularity in a React Native matching app."
author: "Ives Tan Kian Hang"
category: "Mobile Engineering"
tags:
  - react-native
  - mobile
  - ui
  - state-management
cover: "/covers/cover-3.svg"
draft: false
---

# Project scope

I built a swipe-based matching app as a mobile-focused portfolio piece to show interaction quality and component design.

Project: [Swipe Match App](https://github.com/TWLY21/swipe-match-app)

## What I implemented

- Swipe-left and swipe-right card behavior
- Match logic triggered by profile metadata
- Dedicated screens for Home, Matches, and Profile
- Reusable component structure for long-term extension

## Practical challenges

### 1. Gesture and state sync

A swipe UI looks simple but can desync quickly if card state and match state are not updated in the right order.

### 2. Mobile-first interaction quality

I focused on responsiveness, visual feedback, and consistent navigation behavior so it feels like a real app, not a static mock.

### 3. Scope discipline

I intentionally kept backend and chat features out for the first version so the core interaction layer is solid.

## Why this is a strong blog candidate

This project complements my backend-heavy work by showing I can also design interaction-driven mobile experiences with clear architecture.
