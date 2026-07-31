import type { User, LoginResponse } from "@/interfaces/user";
import { API_ENDPOINTS } from "@/constants/api";

export async function loginWithEmail(
  email: string,
  password: string
): Promise<LoginResponse> {
  // 1. Fetch all users
  const usersRes = await fetch(API_ENDPOINTS.USERS);

  if (!usersRes.ok) {
    throw new Error("Unable to fetch users. Please try again.");
  }

  const usersData: { users: User[] } = await usersRes.json();

  // 2. Check if email exists
  const user = usersData.users.find((u) => u.email === email);

  if (!user) {
    throw new Error("No user found with this email");
  }

  // 3. Attempt login using username + password
  const loginRes = await fetch(API_ENDPOINTS.AUTH_LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user.username,
      password,
    }),
  });

  const loginData = await loginRes.json();

  // 4. Handle invalid password or other errors
  if (!loginRes.ok) {
    throw new Error(loginData.message || "Invalid password");
  }

  // 5. Return clean LoginResponse
  return {
    user,
    token: loginData.token,
  };
}
