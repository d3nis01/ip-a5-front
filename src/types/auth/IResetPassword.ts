export interface IResetPassword {
  email: string;
  newPassword: string;
  resetCode: string | null;
}
