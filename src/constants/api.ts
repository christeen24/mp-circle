export const API_BASE = "https://dummyjson.com";

export const API_ENDPOINTS = {
  USERS: `${API_BASE}/users`,
  COURSES: "/courses.json",
  ASSIGNMENTS: "/assignments.json",
  AUTH_LOGIN: `${API_BASE}/auth/login`,
} as const;
