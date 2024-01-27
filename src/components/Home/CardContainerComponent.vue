<template>
    <div class="row CardContainer mx-auto pt-5">
        <CardComponent 
        v-for="(item , index) in Characters?.Results" 
        :key="index" 
        :Character="item"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import  CardComponent from '../share/CardComponent.vue';
import type { CharactersResponse } from '../../interface/types/RickAndMorty/CharacterTypes';
export default defineComponent({
    name:'CardContainerComponent',
    components:{
        CardComponent
    },
    props:{
        Characters:{
            type: Object,
            default: {} as CharactersResponse
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