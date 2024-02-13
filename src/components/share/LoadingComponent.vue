<template>
<div class="custom-loader"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'LoadingComponent'
})
</script>
<style lang="css" scoped>
.custom-loader {
width:120px;
height: 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
-webkit-mask: radial-gradient(circle closest-side,#766DF4 94%,#0000) left/20% 100%;
background: linear-gradient(#ff4f87 0 0) left/0% 100% no-repeat #E4E4ED;
animation: p7 2s infinite steps(6);
}
@keyframes p7 {
    100% {background-size:120% 100%}
}
</style>
