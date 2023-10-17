export type OIDCConfigType = {
  client_id: string;
  redirect_uri: string;
  scope: string;
  state: string;
  authorize_uri: string;
};

export type AuthCallbackStateType = {
  state: string,
  code: string
}

export interface UserRegisterInfo {
  id: number,
  password: string,
}