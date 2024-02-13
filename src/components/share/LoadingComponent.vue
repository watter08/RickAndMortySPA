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
  width:60px;
  height:60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #ff4f87;
  --c:linear-gradient(currentColor 0 0);
  z-index: 10000000;
  background:
    var(--c) 0 38px,
    var(--c) right 18px bottom 18px,
    var(--c) right 18px top    18px,
    var(--c) 18px 18px,
    var(--c) 18px 100%,
    var(--c) 100% 100%,
    var(--c) 100% 0,
    var(--c) 0 0;
  background-repeat: no-repeat;
  animation: 
    l8-1 2s infinite,
    l8-2 2s infinite;
}

@keyframes l8-1 {
  0%     {background-size: 0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   }
  6.25%  {background-size: 40px 4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   }
  12.5%  {background-size: 40px 4px,4px 20px,0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   }
  18.75% {background-size: 40px 4px,4px 20px,20px 4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   }
  25%    {background-size: 40px 4px,4px 20px,20px 4px,4px 40px,0    4px,4px 0   ,0    4px,4px 0   }
  31.25% {background-size: 40px 4px,4px 20px,20px 4px,4px 40px,40px 4px,4px 0   ,0    4px,4px 0   }
  37.5%  {background-size: 40px 4px,4px 20px,20px 4px,4px 40px,40px 4px,4px 100%,0    4px,4px 0   }
  43.75% {background-size: 40px 4px,4px 20px,20px 4px,4px 40px,40px 4px,4px 100%,100% 4px,4px 0   }
  48%,
  52%    {background-size: 40px 4px,4px 20px,20px 4px,4px 40px,40px 4px,4px 100%,100% 4px,4px 40px}
  56.25% {background-size: 0    4px,4px 20px,20px 4px,4px 40px,40px 4px,4px 100%,100% 4px,4px 40px}
  62.5%  {background-size: 0    4px,4px 0   ,20px 4px,4px 40px,40px 4px,4px 100%,100% 4px,4px 40px}
  68.75% {background-size: 0    4px,4px 0   ,0    4px,4px 40px,40px 4px,4px 100%,100% 4px,4px 40px}
  75%    {background-size: 0    4px,4px 0   ,0    4px,4px 0   ,40px 4px,4px 100%,100% 4px,4px 40px}
  81.25% {background-size: 0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 100%,100% 4px,4px 40px}
  87.5%  {background-size: 0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   ,100% 4px,4px 40px}
  93.75% {background-size: 0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 40px}
  100%   {background-size: 0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   ,0    4px,4px 0   }
}

@keyframes l8-2 {
  0%,49.9% {background-position:0 38px, right 18px bottom 18px, right 18px top 18px,18px 18px,18px 100%,100% 100%,100% 0,0 0}
  50%,100% {background-position:right 18px bottom 18px, right 18px top 18px, 18px 18px,18px 100%,100% 100%,100% 0,0 0,bottom 18px left 0}
}
</style>
