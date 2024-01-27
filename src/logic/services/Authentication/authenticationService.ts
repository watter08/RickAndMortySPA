import HttpClient from "../../httpClient";
import type { Result } from "@/interface/types/ResultType";
import type { UserCredential, User } from "@/interface/types/Authentication/UserCredentialType";

interface IAuthenticationService {
    GetUserToAuthenticate(): Promise<UserCredential[]>;
    GetToken(User:User): Promise<String>;
} 


export default class AuthenticationService implements IAuthenticationService {

    async GetUserToAuthenticate(): Promise<UserCredential[]> {
            const response :any  = await HttpClient.get('/api/User/GetUserForLogin');
            const Users : Result<UserCredential[]> = response?.data || { Data: [] };
            return Users?.Data;
    }

    async GetToken(User:User): Promise<String> {
        const TokenValue: any = await HttpClient.post('/api/User/LogIn', JSON.stringify(User));
        const result :Result<String> = TokenValue?.data || { Message: ""};
        return result?.Message;
}

}