import HttpClient from "../../httpClient";
import type { Result } from "@/interface/types/ResultType";
import type { UserCredential, User } from "@/interface/types/Authentication/UserCredentialType";

interface IAuthenticationService {
    GetUserToAuthenticate(): Promise<UserCredential[]>;
    GetToken(User:User): Promise<String>;
} 


export default class AuthenticationService implements IAuthenticationService {

    async GetUserToAuthenticate(): Promise<UserCredential[]> {
            const Users: Result<UserCredential[]>  = await HttpClient.get('/api/User/GetUserForLogin');
            return Users?.data ? Users?.data?.Data : [];
    }

    async GetToken(User:User): Promise<String> {
        const TokenValue: Result<String>  = await HttpClient.post('/api/User/LogIn', JSON.stringify(User));
        return TokenValue?.data ? TokenValue?.data?.Message : "";
}

}