<template>
<div class="card" :key="`${Character.Name}_${Character.Id}`">
  <div class="card-header">
    <img :src="Character.Image" :alt="`${Character.Name}_${Character.Id}`"/>
  </div>
  <div class="card-body">
      <h5 class="name">{{ Character.Name }}</h5>
    <div class="icons">
      <div class="icon">
      <IconCommunity /> 
      <span class="number ps-2">{{ Character.Status }}</span>
      <p><strong class="fs-7">Estatus:</strong></p>
      </div>
      <div class="icon">
        <IconDocumentation />
        <span class="number ps-2">{{ Character.Gender }}</span>
        <p><strong class="fs-7">Genero:</strong></p>
      </div>
      <div class="icon">
        <IconSupport />
        <span class="number ps-2">{{ Character.Species }}</span>
       <p><strong class="fs-7">Especie:</strong></p>
      </div>
    </div>
    <div class="description">
      <small>Este personaje tiene su Ubicacion de <strong>Origen</strong>: {{ Character.Origin.Name }}. 
        Siendo su <strong>Ubicacion Actual</strong>: {{ Character.Location.Name }}.</small>
    </div>
    </div> 
  <div class="pt-4 pb-5 text-center">
    <button class="btn btn-rose">Conoce mas</button>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IconCommunity from '@/components/icons/IconCommunity.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import IconSupport from '@/components/icons/IconSupport.vue';
import type { Character } from '@/interface/types/RickAndMorty/CharacterTypes';
export default defineComponent({
  name:'CardComponent',
  components:{
    IconCommunity,
    IconDocumentation,
    IconSupport
  },
  props:{
    Character:{
    type:Object,
    default:{} as Character
  }
  }
});
</script>
<style scoped>

.fs-7{
  font-size: 14px;
}
.card {
  width: 400px;
  margin: 0;
  padding:0;
}

.card-header,
.card-header img{
  width: 400px;
    height: 350px;
    padding: 0;
    object-fit: cover;
    object-position: top;
}
.header{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .name{
  display: flex;
  justify-content: left;
  width: 50%;
}
.header .btn-rose{
  width: 50%;
}
.card-body{
  width: 400px;
}
.card-body .name {
  font-weight: 600;
  margin: 5px 15px 20px 15px;
}

.icons {
  display:flex;
  flex-flow: wrap;
  padding-top: 20px;
  margin: 15px 15px 0 15px;
  border-top: 1px solid #c8c8c8;
}
.icons .icon{
  width: calc(33.33%);
}
.icons .icon .number {
  font-size: 15px;
  color: #ff4f87;
  font-weight: 600;
}

.btn-rose{
  background-color: #ff4f87;
  color: #fff;
  width: 80%;
  max-width: 300px;
}

.btn-rose:hover{
  background-color: #ff4f87;
  color: #fff;
} 
::-webkit-scrollbar {
  width: 5px; /* Grosor del scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #ff4f87; /* Color del scrollbar */
}

::-webkit-scrollbar-track {
  background-color: #ecf0f1; /* Color de fondo del scrollbar */
}
* {
  scrollbar-width: thin;
  scrollbar-color: #ff4f87 #ecf0f1;
}
</style>