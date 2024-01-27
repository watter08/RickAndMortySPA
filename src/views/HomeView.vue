<template>
  <header class="row">
    <NavbarComponent Title="Rick And Morty --> Characters" />
  </header>
  <main>
    <div class="container pt-5">
      <CardComponent />
    </div>
  </main>
</template>
<script lang="ts">
import NavbarComponent from '@/components/share/NavbarComponent.vue';
import CardComponent from '@/components/share/CardComponent.vue';
import AuthenticationRepository from '@/logic/repositories/Authentication/AuthenticationRepository';
import RickAndMortyCharacterRepository from '@/logic/repositories/RickAndMorty/RickAndMortyCharacterRepository';
import type { UserCredential } from '@/interface/types/Authentication/UserCredentialType';
import type { CharactersResponse } from '@/interface/types/RickAndMorty/CharacterTypes'
import { defineComponent } from 'vue';
export default defineComponent({
  name:'HomeView',
  components:{
    NavbarComponent,
    CardComponent
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
      rickCharacterRepo.GetAllCharactersOfRickAndMorty()
        .then((characters: CharactersResponse ) => {
          if(characters)
            this.Characters = characters;                         
        });
    }
  },
  created(){
    this.getUserToAuthenticate()
  }
})

</script>