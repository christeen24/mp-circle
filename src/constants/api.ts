export const API_BASE = "https://dummyjson.com";

export const API_ENDPOINTS = {
  USERS: `${API_BASE}/users`,
  COURSES: `${API_BASE}/products`,
  ASSIGNMENTS: `${API_BASE}/todos`,
  AUTH_LOGIN: `${API_BASE}/auth/login`,
} as const;
