import type { CharactersResponse } from "@/interface/types/RickAndMorty/CharacterTypes";
import HttpClient from "../../httpClient";
import type { Result } from "@/interface/types/ResultType";

interface IRickAndMortyCharactersService {
    GetAllCharactersOfRickAndMorty(): Promise<CharactersResponse>;
    GetMultipleCharactersOfRickAndMorty(FromTo: string): Promise<CharactersResponse>;
} 

export default class RickAndMortyCharactersService implements IRickAndMortyCharactersService {

    async GetAllCharactersOfRickAndMorty(): Promise<CharactersResponse> {
            const response :any = await HttpClient.get('/api/RickAndMorty/CharacterGetAll');
            const Users : Result<CharactersResponse> = response?.data || { Data: {} };
            return Users.Data;
    }
    async GetMultipleCharactersOfRickAndMorty(FromTo: string): Promise<CharactersResponse> {
        const response :any = await HttpClient.get(`/api/RickAndMorty/MultipleCharacterById?CharacterIds=${FromTo}`);
        const Users : Result<CharactersResponse> = response?.data || { Data: {} };
        return Users.Data;
}

}