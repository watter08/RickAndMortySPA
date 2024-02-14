<template>
  <header class="row">
    <NavbarComponent Title="Rick And Morty --> Characters" />
  </header>
  <main>
    <CardContainerComponent :Characters="Characters" />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComponent from '@/components/share/NavbarComponent.vue';
import AuthenticationRepository from '@/logic/repositories/Authentication/AuthenticationRepository';
import RickAndMortyCharacterRepository from '@/logic/repositories/RickAndMorty/RickAndMortyCharacterRepository';
import type { UserCredential } from '@/interface/types/Authentication/UserCredentialType';
import type { CharactersResponse, Character } from '@/interface/types/RickAndMorty/CharacterTypes';
import CardContainerComponent from '@/components/Home/CardContainerComponent.vue';
export default defineComponent({
  name:'HomeView',
  components:{
    NavbarComponent,
    CardContainerComponent
  },
  data(){
    return {
      Characters: {} as CharactersResponse,
      UsersCredentials: [] as UserCredential[],
      Token: '' as String
    }
  },
  methods:{
    async getUserToAuthenticate(): Promise<void> {
      try {
        const authRepo = new AuthenticationRepository();
        authRepo.GetUserToAuthenticate()
        .then((Response:UserCredential[]) => {
          this.UsersCredentials = Response;
          if(Response.length > 0)   
            this.getToken(Response[0]);       
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async getToken(User:UserCredential){
      const authRepo = new AuthenticationRepository();
      authRepo.GetToken(User)
        .then((token:String ) => {
          if(token.length > 1){
            this.Token = token;              
            localStorage.setItem('Token', String(token)); 
            this.getAllCharacters();
          }              
        });
    },
    async getAllCharacters(){
      const rickCharacterRepo = new RickAndMortyCharacterRepository();
      const routesArray:string = this.getRouteCharacterNumber(1,300);
      rickCharacterRepo.GetMultipleCharactersOfRickAndMorty(routesArray)
        .then((characters: Character[] ) => {
          if(characters){
             this.Characters = {
              Info: { Count: characters.length,  Next: '2', Pages: 1,  Prev: '1' },
              Results: characters
             }
          }            
        });
    },
    getRouteCharacterNumber(from: number, to: number): string {
    if (from > to || from === 0 || to === 0) return '1,2';
    const routeNumbers = Array.from({ length: to - from + 1 }, (_, index) => from + index);
    return routeNumbers.join(',');
}
  },
  created(){
    // localStorage.removeItem('Token');
    // this.getUserToAuthenticate();
    this.getAllCharacters();
  }
})

</script>