import { AuthCallbackStateType, OIDCConfigType, UserRegisterInfo } from "../types";
import { getData, postData } from "./http";

export default {
  login: () => getData<undefined, OIDCConfigType>("/getLoginAddress"),

  authCallback: (data: AuthCallbackStateType) => postData<AuthCallbackStateType, any>("/auth/callback", data),

  // register: (data: UserRegisterInfo) => postData();
};
