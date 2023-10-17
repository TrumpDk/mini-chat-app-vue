import { OidcClientSettings, User, UserManager } from "oidc-client-ts";

const settings: OidcClientSettings = {
    authority: import.meta.env.VITE_AUTHORITY,
    client_id: import.meta.env.VITE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    client_secret: import.meta.env.VITE_CLIENT_CECRET,
    response_type: import.meta.env.VITE_RESPONSE_TYPE,
    scope: import.meta.env.VITE_SCOPE,
}

export const userManager = new UserManager(settings);

// get user functionality
export const getUser = (): Promise<User | null> => {
    return userManager.getUser();
}

export const login = (): Promise<void> => {
    return userManager.signinRedirect();
}

// TODO to implement sign out functionality