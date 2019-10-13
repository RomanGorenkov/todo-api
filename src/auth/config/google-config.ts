import { IGoogleConfig } from "../interfaces/google-config.interface";

export const googleConfig: IGoogleConfig = {
    login_dialog_uri: 'https://accounts.google.com/o/oauth2/auth',
    client_id: '260653760475-3b7p54r2eb1npcubi1734uuojdb05hfo.apps.googleusercontent.com',
    client_secret: 'gFbCUdt_TYYEMnEngfCcn2C1',
    oauth_redirect_uri: 'http://localhost:3000/api/google',
    access_token_uri: 'https://accounts.google.com/o/oauth2/token',
    response_type: 'code',
    scopes: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read'
    ],
    grant_type: 'authorization_code',
  };
  