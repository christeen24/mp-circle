export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;

  // Useful for profile page
  age: number;
  gender: string;
  phone: string;
  university: string;

  // Useful for role-based access
  role: string;

  // Useful for profile details
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export interface LoginResponse {
  token: string;
  user: User;
}
