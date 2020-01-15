export interface IUser {
  Oid?: string;
  Color?: number;
  Status?: number;
  LastAccessTime?: Date;
  ForceLogout?: boolean;
  UserName?: string;
  ChangePasswordOnFirstLogon?: boolean;
  IsActive?: boolean;
  Caption?: string;
  WindowsUserID?: string;
  HasExpiryDate?: boolean;
  ExpiryDate?: Date;
  StoredPassword?: string;
  DocuWareUserName?: string;
  DocuWarePassword?: string;
}
