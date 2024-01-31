<template>
    <ModalComponent Title="Character Details" :ModalId="Character?.Name">
        <h3>Hello World</h3>
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
        ModalId: {
            type: String,
            default:'' as String
        }
    }
})
</script>