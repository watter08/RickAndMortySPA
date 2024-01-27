import AuthenticationService from "../../services/Authentication/authenticationService";
import type { UserCredential, User } from "@/interface/types/Authentication/UserCredentialType";

export default class AuthenticationRepository {
  private authenticationService: AuthenticationService; 

  constructor() {
    this.authenticationService = new AuthenticationService(); 
  }

  async GetUserToAuthenticate(): Promise<UserCredential[]> {
    try {
      return await this.authenticationService.GetUserToAuthenticate(); 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }

  async GetToken(User: User): Promise<String> {
    try {
      return await this.authenticationService.GetToken(User); 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
}
