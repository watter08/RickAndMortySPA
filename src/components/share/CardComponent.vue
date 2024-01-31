<template>
<div class="card" :key="`${Character.Info.Name}_${Character.Info.Id}`">
  <div class="card-header">
    <img :src="Character.Info.Image" :alt="`${Character.Info.Name}_${Character.Info.Id}`"/>
  </div>
  <div class="card-body">
      <h5 class="name text-center">{{ Character.Info.Name }}</h5>
    <div class="icons position-relative">
      <IconCardStatusComponent 
      :Status="Character.Info.Status" 
      :StatusColor="Character.StatusClassColor"      
      :Gender="Character.Info.Gender"
      :GenderColor="Character.GenderClassColor" 
      :Specie="Character.Info.Species"
      :SpecieColor="Character.SpecieClassColor"
       />
    </div>
    </div> 
  <div class="pt-4 pb-5 text-center">
    <button class="btn btn-rose">Learn more</button>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { CharacterAndColorInfo } from '@/interface/types/RickAndMorty/CharacterTypes';
import IconCardStatusComponent from '../icons/IconCardStatusComponent.vue';
export default defineComponent({
  name:'CardComponent',
  components:{
    IconCardStatusComponent
},
  props:{
    Character:{
    type:Object,
    default:{} as CharacterAndColorInfo
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
  font-weight: 600;
  
}
.header .btn-rose{
  width: 50%;
}
.card-body{
  width: 400px;
}
.card-body .name {
  font-weight: 600;
  margin: 5px 15px 0 15px;
}

.icons {
  display:flex;
  flex-flow: wrap;
  padding-top: 20px;
  /* margin: 15px 15px 0 15px; */
}
#social-platforms .btn-icon{
  width: 300px;
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
  padding: 10px;
  font-weight: 600;
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
.text-rose{
  color: #f12a34;
  font-weight: bold;
}
</style>