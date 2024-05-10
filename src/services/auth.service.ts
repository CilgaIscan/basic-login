import {AUTH_HOST, CLIENT_ID, CLIENT_SECRET, PROJECT_KEY, SCOPES} from "@/constants";


export class AuthService {

    private post(endpoint: string, body: any, headers: any) {
        return fetch(`${AUTH_HOST}/oauth/${PROJECT_KEY}${endpoint}`, {
            method: "POST",
            body,
            headers,
        });
    }

    public async login(email: string, password: string) {
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', email);
        params.append('password', password);
        params.append('scope', SCOPES);

        const headers = new Headers();
        headers.set('Authorization', `Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`)

        const resp = await this.post(
            '/customers/token',
            params,
            headers,
        );
        console.log(resp);
        if (resp.ok) {
            const tokenData: {access_token: string, refresh_token: string} = await resp.json();
            localStorage.setItem('accessToken', tokenData.access_token);
            localStorage.setItem('refreshToken', tokenData.refresh_token);
            return tokenData;
        } else {
            throw Error('Login failed!');
        }
    }
}

export const authService = new AuthService();