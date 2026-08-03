# MP Circle — Student Dashboard (Frontend Engineer Screening Task)

This project implements a fully functional **Student Dashboard** as part of the MP Circle Frontend Engineer screening assignment. The goal is to simulate building a real feature that could ship into a production environment, demonstrating engineering quality, architecture decisions, and product thinking.

---

## Features Implemented

### 1. **Login Screen**
- Email + password fields
- Validation using **React Hook Form + Zod**
- Login state stored in React Query + local storage
- Error messages and accessibility-friendly labels

### 2. **Dashboard**
- Dynamic greeting based on time of day
- Key metrics:
  - Total Courses
  - Upcoming Assignments
  - Late Assignments
  - Attendance (mock)
  - GPA (mock)
- Recently accessed courses
- Today’s schedule (mock)
- Quick tasks (mock)
- Responsive grid layout

### 3. **Course List**
- Title
- Lecturer
- Progress bar
- Course image
- Responsive card layout

### 4. **Assignments Page**
- Assignment title
- Due date
- Status (Pending / Submitted)
- Priority (High / Medium / Low / Closed)
- Late detection
- Days left calculation

### 5. **Responsiveness**
- Mobile-first design
- Tablet and desktop breakpoints
- Tailwind utility classes for adaptive layout

---

## Architecture & Folder Structure
src/
  components/
    ui/               → Reusable UI elements (cards, buttons, inputs)
    layout/           → Page wrappers, navigation, layout primitives

  hooks/
    use-auth.ts       → Login state + validation
    use-assignments.ts→ Fetch assignments.json
    use-courses.ts    → Fetch courses.json

  lib/
    assignments.ts    → Pure functions: isLate, daysLeft, stats

  interfaces/
    assignment.ts     → IAssignment model
    course.ts         → ICourse model
    user.ts           → IUser model

  constants/
    api.ts            → Centralized API endpoints

public/
  assignments.json    → Mock API: assignments
  courses.json        → Mock API: courses
  users.json          → Mock API: users


### Why this structure?
- Clear separation of concerns  
- Reusable UI components  
- Hooks for data fetching  
- Pure logic in `/lib`  
- Type safety via `/interfaces`  
- Mock API via `/public`  

---

## Data Layer (Mock API)

All mock data lives in `/public`:

- `/assignments.json`
- `/courses.json`
- `/users.json`

These files simulate real API responses and are fetched using React Query.

---

## Business Logic

### `assignments.ts`
Contains pure functions:
- `isLate(dueDate)`
- `daysLeft(dateStr)`
- `getAssignmentStats(assignments)`

---

## State Management

### React Query
Used for:
- Caching
- Refetching
- Error handling
- Loading states

### React Hook Form + Zod
Used for:
- Login form validation
- Error messages
- Input sanitization

---

## Accessibility

- Semantic HTML
- ARIA-friendly labels
- Keyboard-friendly navigation
- High-contrast colors
- Screen-reader-friendly text

---

## Responsiveness

Tailwind breakpoints:
- `sm:`  
- `md:`  
- `lg:`  
- `xl:`  

Mobile-first layout with adaptive grids.

---

## Product Improvement Challenge

### 1. Performance Optimization
**Why:** 50,000 students → heavy load  
**How:** Pagination, lazy loading, caching  
**Trade-off:** More complexity

### 2. Accessibility Enhancements
**Why:** Inclusivity  
**How:** ARIA roles, keyboard navigation, color contrast  
**Trade-off:** More testing

### 3. Analytics Dashboard
**Why:** Students benefit from insights  
**How:** Charts, study recommendations  
**Trade-off:** More data processing

---

## Additional Documentation

See `thinking.md` for:
- Assumptions
- Hardest parts
- Improvements with more time
- Refactoring priorities
- AI usage
- What was intentionally not built

---

## Deployment

The project is deployed on Vercel.

---

## Installation & Running

```bash
npm install
npm run dev
