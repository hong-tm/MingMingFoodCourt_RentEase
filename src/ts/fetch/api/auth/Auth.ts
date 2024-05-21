import { SendFetch } from "../../SendFetch";

export class Auth extends SendFetch{ 
    api = 'http://localhost:3000';


    public async login(username: string, password: string){
        const headers = new Headers();
        const data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const response = await this.sendPost(`${this.api}/login`, data, headers);
        if (response.ok) {
            return response.json();
        }
        return null
    }
}