export interface User {
  id: string;
  userName: string;
  email: string;
  roles: string[];
  clientId: number;
  isVerified: boolean;
  jwtToken: string;
}
