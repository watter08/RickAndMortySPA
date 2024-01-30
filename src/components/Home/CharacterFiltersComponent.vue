<template>
    <div class="row pt-5 ps-4 pe-4">
        <div class="card">
            <div class="card-header">
                <h4>Filtro de Busqueda</h4>
            </div>
            <div class="card-body row">
                <div class="col-md-6">
                   <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">Name</span>
                      <input 
                      type="text" 
                      class="form-control" 
                      placeholder="Name" 
                      name="Name"
                      aria-label="Username" 
                      aria-describedby="basic-addon1" 
                      :value="SelectedForm?.Name"
                      @input="handleChange"
                       />
                   </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Status</button>
                    <ul class="dropdown-menu" v-if="StatusDrop?.length > 0">
                        <li v-for="(status,index) in StatusDrop" :key="`${status}_${index}`">
                            <a class="dropdown-item" href="#" @click="handleSelection('Status',status)">{{status}}</a>
                        </li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button" :value="StatusDrop[SelectedForm?.Status]" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Genders</button>
                    <ul class="dropdown-menu" v-if="GendersDrop?.length > 0">
                        <li v-for="(gender,index) in GendersDrop" :key="`${gender}_${index}`">
                            <a class="dropdown-item" href="#" @click="handleSelection('Gender',gender)">{{gender}}</a>
                        </li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button" :value="GendersDrop[SelectedForm?.Gender]" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Species</button>
                    <ul class="dropdown-menu" v-if="SpeciesDrop?.length > 0">
                        <li v-for="(specie,index) in SpeciesDrop" :key="`${specie}_${index}`">
                            <a class="dropdown-item" href="#" @click="handleSelection('Specie',specie)">{{specie}}</a>
                        </li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button" :value="SpeciesDrop[SelectedForm?.Specie]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type { SelectedCharacter } from '@/interface/types/RickAndMorty/SelectedCharacterType';
import { defineComponent } from 'vue';
export default defineComponent({
    name:'CharacterFiltersComponent',
    props:{
        SpeciesDrop:{
            type:Array<String>,
            default:[] as String[]
        },
        GendersDrop:{
            type:Array<String>,
            default:[] as String[]
        },
        StatusDrop:{
            type:Array<String>,
            default:[] as String[]
        },
        SelectedForm:{
            type:Object,
            default:{} as SelectedCharacter
        }
    },
    methods:{
        handleSelection(key:String , value: String):void{
            this.$emit('handlechangeinput', {key,value});
        },
        handleChange(event: Event): void {
            const input = (event.target as HTMLInputElement).value;
            this.handleSelection('Name', input)
        }
    }
});
</script>