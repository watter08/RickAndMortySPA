<template>
    <ModalComponent :Title="Character?.Info?.Name" :ModalId="ModalId">
        <div class="RickHeader">
            <div>
                <img :src="Character?.Info?.Image" :alt="Character?.Info?.Name" />
                <div class="list-card">
                    <div class="carditem">
                        <span class="who">Gender: </span>
                        <span class="is">{{ Character?.Info?.Gender }}</span>
                    </div>
                    <div class="carditem">
                        <span class="who">Status: </span>
                        <span class="is">{{ Character?.Info?.Status }}</span>
                    </div>
                    <div class="carditem">
                        <span class="who">Created: </span>
                        <span class="is">{{ new Date(Character?.Info?.Created).toLocaleString() }}</span>
                    </div>
                </div> 
            </div>
            <div class="list-group w-100">
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"><strong>Origing:</strong> <small>{{ Character?.Info?.Origin?.Name }}</small></h5>
                    <small><strong>{{Character?.Info?.Id}}</strong></small>
                    </div>
                    <p class="mb-1"><strong>Location:</strong> {{ Character?.Info?.Location?.Name }}</p>
                    <small><strong>Species:</strong> {{ Character?.Info?.Species }}</small>
                </a>
                <div class="row pt-5">
                    <DataTableComponent 
                    :header-thead="Header" 
                    :data="Data"
                    :is-filtered="true" 
                    :table-design="'with'"
                    :pagination-to-left="false"
                    />
                </div>
           </div>           
        </div>
    </ModalComponent>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ModalComponent from '../share/ModalComponent.vue';
import DataTableComponent from '../share/DataTableComponent.vue';
import type {  CharacterAndColorInfo } from '@/interface/types/RickAndMorty/CharacterTypes';
import type { HeaderItem } from '@/interface/types/DataTable/DataTableTypes';
type Episode = {
    Episode: String;
}
export default defineComponent({
    name:'RickAndMortyModal',
    components: {
        ModalComponent,
        DataTableComponent
    },
    props:{
        Character: {
            type: Object,
            default:{} as CharacterAndColorInfo
        },
        Title: {
            type: String,
            default:'modalComponent' as String
        },
        ModalId: {
            type: String,
            default:'modalComponent' as String
        }
    },
    data(){
        return{
            Header: [{key: 'Episode',value:'Episodes Where it Character Appears'}] as HeaderItem[],
            Data:[] as Episode[]
        }
    },
    methods:{
        closeModal(){
            
        }
    },
    watch:{
        Character(newCharacter: CharacterAndColorInfo){
            this.Data = newCharacter?.Info?.Episode.map((Episode: String) => ({
                Episode
            }))
        }
    }
})
</script>
<style lang="css" scoped>
    .RickHeader{
        display: flex;   
        flex: 30% 70%;
        gap:20px;    
    }
 img{
    width: 300px;
    height: 300px;
    border-radius: 20px;
 }

 .list-card{
    padding-top: 20px;
 }
 .carditem{
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 15px;
    box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
    background-color: #ff4f87;
    color: #f0f0f0;
 }

/* Estilo para las tarjetas impares */
.carditem:nth-child(odd) {
  background-color: #f0f0f0; 
  color: rgb(78, 80, 83);
}


 .carditem .who{
    flex: 30%;
    text-align: left;    
    font-weight: 600;
 }
 .carditem .is{
    flex: 70%;
    text-align: right;
 }
</style>