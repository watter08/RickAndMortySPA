<template>
<nav class="navbar navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand mb-0 h1 ps-4" :href="Link">{{ Title }}</a>
  </div>
</nav>   
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name:'NavbarComponent',
  props:{
    Title:{
        type: String,
        default:'Componentes'
    },
    Link:{
        type:String,
        default:'#'
    }
  }
});
</script>
<style lang="css" scoped>
.navbar{
  height: 80px;
  background-color: #192231;
}
</style>