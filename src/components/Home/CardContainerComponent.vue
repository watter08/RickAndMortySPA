<template>
    <CharacterFiltersComponent 
     :StatusDrop="Drops.Status"
     :SpeciesDrop="Drops.Species"
     :GendersDrop="Drops.Genders"
     :SelectedForm="Selected"
     @handlechangeinput="HandleChangeInput"
    />
    <div class="row CardContainer mx-auto pt-5 pb-5">
        <CardComponent 
        v-for="(item , index) in CharactersList" 
        :key="index" 
        :Character="item"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import  CardComponent from '../share/CardComponent.vue';
import type { CharactersResponse, CharacterAndColorInfo, Character } from '../../interface/types/RickAndMorty/CharacterTypes';
import type { SelectedCharacter, SelectedDropsCharacter} from '../../interface/types/RickAndMorty/SelectedCharacterType';
import { ColorPalleteByStatus, ColorPalleteGender, ColorPalleteSpecie } from '@/logic/Const/RickAnrMortyMock';
import CharacterFiltersComponent from './CharacterFiltersComponent.vue';
export default defineComponent({
    name:'CardContainerComponent',
    components:{
    CardComponent,
    CharacterFiltersComponent
},
    props:{
        Characters:{
            type: Object,
            default: {} as CharactersResponse
        }
    },
    data(){
        return{
            CharactersList: [] as CharacterAndColorInfo[],
            Drops:{Genders: [] as String[], Status: [] as String[], Species: [] as String[] } as SelectedDropsCharacter,
            Selected:{ Status: 0, Genders: 0, Species: 0, Name: '' } as unknown as SelectedCharacter 
        }
    },
    watch: {
        Characters(newVal,_){
            if(newVal?.Results){                
                this.CharactersList = newVal.Results.map((character: Character) :CharacterAndColorInfo => ({
                    Info: character,
                    StatusClassColor: ColorPalleteByStatus[String(character.Status)] || '',
                    GenderClassColor: ColorPalleteGender[String(character.Gender)] || '',
                    SpecieClassColor: ColorPalleteSpecie[String(character.Species)] || ''
                }));
                this.Drops.Status  =  [...new Set<String>(newVal.Results.map((character: Character) => character.Status))]; 
                this.Drops.Genders =  [...new Set<String>(newVal.Results.map((character: Character) => character.Gender))];
                this.Drops.Species =  [...new Set<String>(newVal.Results.map((character: Character) => character.Species))];
                this.Drops.Status.unshift('Todos');
                this.Drops.Genders.unshift('Todos');
                this.Drops.Species.unshift('Todos'); 
            }
        }
    },
    methods:{
        HandleChangeInput(key:String, value:String):void {
            if(key === 'Name'){
                this.Selected.Name = value;
            }else {
                Object.entries(this.Drops).forEach((keyName: String) => {
                    if(key === keyName){
                        let drop:String[] = this.Drops[String(keyName)];
                    }
                })
            }            
        }
    }
})
</script>
<style >
.CardContainer{
    display: flex;
    flex-flow: wrap;
    justify-content:space-around;
    gap: 30px;
    max-width: 1600px;
}
</style>