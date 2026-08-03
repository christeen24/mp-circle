
---

# 📄 **thinking.md**

```md
# Engineering Reflection — thinking.md

This file documents the engineering decisions, assumptions, and reflections made during the development of the Student Dashboard for MP Circle.

---

## Assumptions Made

1. **Mock API is acceptable**
   The assignment allows either dummyjson.com or custom mock data. I chose `/public/*.json` for full control and consistency.

2. **Authentication is client-side only**
   Since no backend is provided, login is simulated using React Hook Form + Zod + local state.

3. **Dashboard metrics can be computed locally**
   With mock data, computing metrics client-side is simpler and avoids unnecessary API complexity.

4. **No routing complexity required**
   Only the required screens were implemented: login, dashboard, courses, assignments.

---

## Hardest Part

The hardest part was designing a **scalable folder structure** that feels production-ready while keeping the project lightweight. Ensuring type safety with JSON mock data also required careful casting and interface alignment.

---

## If I Had Another Week

I would improve:

1. **Real backend integration**
   Replace mock JSON with a real API using Node/Express or Firebase.

2. **Analytics & charts**
   Add attendance trends, GPA graphs, study time analytics.

3. **Better accessibility testing**
   Use Lighthouse + axe-core to ensure WCAG compliance.

4. **Global state for user session**
   Move login state into a global store (Zustand or Jotai).

---

## What I Would Refactor First

1. Extract more reusable UI components  
2. Improve dashboard metric generator  
3. Add stronger typing for JSON imports  
4. Consolidate repeated layout patterns  

---

## AI Tools Used

I used **Microsoft Copilot** to:
- Improve TypeScript correctness
- Suggest folder structure
- Speed up repetitive tasks

AI was used as a **pair programmer**, not a replacement for engineering judgment.

---

## What I Deliberately Chose Not to Build

1. **Real authentication backend**
   Out of scope for the assignment.

2. **Complex filtering or sorting**
   The task focuses on core screens, not advanced UX.

3. **Role-based access**
   Only student-facing features were required.

4. **Full analytics dashboard**
   Would require more data and backend support.

---

## Final Thoughts

This assignment was a great opportunity to demonstrate:
- Clean architecture
- TypeScript discipline
- Reusable components
- Responsive UI
- Real-world engineering thinking

The final product is structured to scale, readable, and ready for future enhancements.
