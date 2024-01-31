<template>
    <div class="row max-container mx-auto pt-5">
        <CharacterFiltersComponent 
     :StatusDrop="Drops.Status"
     :SpeciesDrop="Drops.Species"
     :GendersDrop="Drops.Genders"
     :SelectedForm="Selected"
     @handlechangeinput="HandleChangeInput"
    />
    <h6 v-if="Characters?.Results?.length > 0" class="text-end pt-4">
        <strong>Number of Character : </strong><span class="text-rose">{{ Characters.Results.length }}</span>
    </h6>
    </div>
    

    <div class="CardContainer mx-auto pt-5 pb-5">
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

type KeyAndValue = {
    key:string;
    value:string;
}
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
            ALL:'All' as String,
            CharactersList: [] as CharacterAndColorInfo[],
            Drops:{Genders: [] as String[], Status: [] as String[], Species: [] as String[] } as SelectedDropsCharacter,
            Selected:{ Status: 0, Gender: 0, Specie: 0, Name: '' } as unknown as SelectedCharacter 
        }
    },
    watch: {
        Characters(newVal,_){
            if(newVal?.Results){                
                this.CharactersList = this.GetCharacterAndColorInfo(newVal.Results);
                this.Drops.Status  =  [...new Set<String>(newVal.Results.map((character: Character) => character.Status))]; 
                this.Drops.Genders =  [...new Set<String>(newVal.Results.map((character: Character) => character.Gender))];
                this.Drops.Species =  [...new Set<String>(newVal.Results.map((character: Character) => character.Species))];
                this.Drops.Status.unshift(this.ALL);
                this.Drops.Genders.unshift(this.ALL);
                this.Drops.Species.unshift(this.ALL); 
            }
        }
    },
    methods:{
        HandleChangeInput(val: KeyAndValue):void {
            switch(val.key){
                case 'Name':
                    this.Selected.Name = val.value;
                break;
                case 'Status':
                    this.Selected.Status = val.value;
                break;
                case 'Specie':
                    this.Selected.Specie = val.value;
                break;
                case 'Gender':
                    this.Selected.Gender = val.value;
                break;
            } 
            this.FilterCharacters();
        },
        FilterCharacters(): void {
            const newCharacters = this.Characters.Results.filter((character: Character) => {
                const { Species, Status, Name, Gender } = character;
                const { Specie, Gender: genderSelected, Name: nameSelected, Status: statusSelected } = this.Selected;
                const isSpecie  = Species === this.Drops.Species[Number(Specie)] || this.Drops.Species[Number(Specie)] === this.ALL;
                const isStatus  = Status === this.Drops.Status[Number(statusSelected)] || this.Drops.Status[Number(statusSelected)] === this.ALL;
                const isGender  = Gender === this.Drops.Genders[Number(genderSelected)] || this.Drops.Genders[Number(genderSelected)] === this.ALL;
                const isNamed  = Name.toLocaleLowerCase().includes(nameSelected.toLocaleLowerCase()) || nameSelected === '';
                return isSpecie && isStatus && isGender && isNamed;
                
            });
            this.CharactersList = this.GetCharacterAndColorInfo(newCharacters);
        },
        GetCharacterAndColorInfo(Characters:Character[]):CharacterAndColorInfo[] {
            return Characters.map((character: Character) :CharacterAndColorInfo => ({
                    Info: character,
                    StatusClassColor: ColorPalleteByStatus[String(character.Status)] || '',
                    GenderClassColor: ColorPalleteGender[String(character.Gender)] || '',
                    SpecieClassColor: ColorPalleteSpecie[String(character.Species)] || ''
                }));
        }

    }
})
</script>
<style >
.max-container {
    max-width: 1600px;
    margin: 0 auto;
}
.CardContainer{
    display: flex;
    flex-flow: wrap;
    justify-content:space-between;
    gap: 30px;
    max-width: 1600px;
    padding:0 5px;
}
.text-rose{
    color: #ff4f87;
    font-weight: 800;
    font-size: 1.2rem;
}
</style>