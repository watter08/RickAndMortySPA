<template>
<div class="modal fade" 
:id="ModalId" 
data-bs-backdrop="static" 
data-bs-keyboard="false" 
tabindex="-1" 
:aria-labelledby="ModalId+'Label'" 
aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" :id="ModalId+'lLabel'">{{ Title }}</h1>
        <button type="button" class="btn-closes"  data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-rose" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'ModalComponent',
    props:{
        ModalId:{
            type:String,
            default:'exampleModal' as String
        },
        Title:{
            type:String,
            default:'' as String
        }
    }
})
</script>
<style lang="css" scoped>
.modal-header{
  background-color: #192231;
  color: #fff;
}
.btn-rose{
  background-color: #ff4f87;
  color: #fff;
  width: 200px;
  padding: 10px;
  font-weight: 600;
}
.btn-closes{
  font-size: 32px;
  color: #fff;
  background-color: transparent;
  border-style: none;
}
</style>