<template>
    <ModalComponent Title="Character Details" :ModalId="ModalId">
        <h3>{{Title}}</h3>
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