import RickAndMortyCharacterService from '../../services/RickAndMorty/RickAndMortyCharacterService';
import type { CharactersResponse, Character } from '../../../interface/types/RickAndMorty/CharacterTypes'

export default class RickAndMortyCharacterRepository {
  private _rickAndMortyCharacterService: RickAndMortyCharacterService; 

  constructor() {
    this._rickAndMortyCharacterService = new RickAndMortyCharacterService(); 
  }

  async GetAllCharactersOfRickAndMorty(): Promise<CharactersResponse> {
    try {
      return await this._rickAndMortyCharacterService.GetAllCharactersOfRickAndMorty(); 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
  async GetMultipleCharactersOfRickAndMorty(FromTo: string): Promise<Character[]> {
    try {
      return await this._rickAndMortyCharacterService.GetMultipleCharactersOfRickAndMorty(FromTo); 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
}
