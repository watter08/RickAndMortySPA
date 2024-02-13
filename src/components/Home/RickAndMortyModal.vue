<template>
    <ModalComponent :Title="Character?.Info?.Name" :ModalId="ModalId">
        <div class="RickHeader">
            <div>
                <img :src="Character?.Info?.Image" :alt="Character?.Info?.Name" />
            </div>
            <div class="list-group w-100">
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"><strong>Origing:</strong> <small>{{ Character?.Info?.Origin?.Name }}</small></h5>
                    <small><strong>{{Character?.Info?.Status}}</strong></small>
                    </div>
                    <p class="mb-1"><strong>Location:</strong> {{ Character?.Info?.Location?.Name }}</p>
                    <small><strong>Species:</strong> {{ Character?.Info?.Species }}</small>
                </a>
           </div>           
        </div>
        <div class="RickBody">

        </div>
    </ModalComponent>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ModalComponent from '../share/ModalComponent.vue';
import type { Character } from '@/interface/types/RickAndMorty/CharacterTypes';
export default defineComponent({
    name:'RickAndMortyModal',
    components: {
        ModalComponent
    },
    props:{
        Character: {
            type: Object,
            default:{} as Character
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
    methods:{
        closeModal(){
            
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
    width: 200px;
    border-radius: 20px;
 }
</style>