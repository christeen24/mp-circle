export const API_BASE = "https://dummyjson.com";

export const API_ENDPOINTS = {
  USERS: `${API_BASE}/users`,
  COURSES: "/courses.json",
  ASSIGNMENTS: `${API_BASE}/todos`,
  AUTH_LOGIN: `${API_BASE}/auth/login`,
} as const;
