<template>
<ul class="row">
   <!-- <li  style="--accent-color:#0B374D">  -->
    <li :style="'--accent-color:' + StatusColor"> 
    <div class="icon"><i class="fa-solid fa-heart-pulse"></i></div>
    <div class="title">Status</div>
    <div class="descr">{{ Status || "Unknown" }}</div>
  </li>
  <li :style="'--accent-color:' + GenderColor">
    <div class="icon"><i class="fa-solid fa-venus-mars"></i></div>
    <div class="title">Gender</div>
    <div class="descr">{{Gender}}</div>
  </li>
  <li :style="'--accent-color:' + SpecieColor">
    <div class="icon"><i class="fa-solid fa-person"></i></div>
    <div class="title">Specie</div>
    <div class="descr">{{Specie}}</div>
  </li>
</ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IconCardStatusComponent',
    props:{
        Status:{
            type:String,
            default: '' as String
        },
        Gender:{
            type:String,
            default: '' as String
        },
        Specie:{
            type:String,
            default: '' as String
        },
        StatusColor:{
            type:String,
            default: '' as String
        },
        GenderColor:{
            type:String,
            default: '' as String
        },
        SpecieColor:{
            type:String,
            default: '' as String
        }
    }
})
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@500;600;900&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


h1 {
  text-align: center;
}

ul {
  --col-gap: 1rem;
  --barH: 1rem;
  --roleH: 2rem;
  --flapH: 1rem;

  width: min(60rem, 90%);
  margin-inline: auto;

  display: flex;
  flex-wrap: row;

  gap: var(--col-gap);
  padding-inline: calc(var(--col-gap) / 2);

  justify-content: center;
  align-items: flex-start;
  list-style: none;
}
ul li {
  width: 5.5em;
  display: grid;
  grid-template:
    "role"
    "icon"
    "title"
    "descr";
  align-items: flex-start;
  gap: .5rem;
  padding-block-end: calc(var(--flapH) + .5rem);
  text-align: center;
  background: var(--accent-color);
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.6) var(--roleH),
    rgba(0, 0, 0, 0.4) calc(var(--roleH) + 0.5rem),
    rgba(0, 0, 0, 0) calc(var(--roleH) + 0.5rem + 5rem)
  );
  clip-path: polygon(
    calc(var(--col-gap) / -2 - 5px) 0,
    calc(100% + var(--col-gap) / 2 + 5px) 0,
    calc(100% + var(--col-gap) / 2 + 5px) calc(100% - var(--flapH)),
    50% 100%,
    calc(var(--col-gap) / -2 - 5px) calc(100% - var(--flapH))
  );
}

/* bar */
ul li::before {
  content: "";
  grid-area: role;
  height: var(--barH);
  width: calc(100% + var(--col-gap));
  margin-left: calc(var(--col-gap) / -2);
  margin-top: calc(var(--roleH) / 2 - var(--barH) / 2);
  background: grey;
  z-index: -1;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2) 30%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.4)
  );
}

/* role */
ul li::after {
  content: "";
  grid-area: role;
  background: var(--accent-color);
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2) 30%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.4)
  );
  height: var(--roleH);
}

ul li .icon,
ul li .title,
ul li .descr {
  /* padding-inline: 1rem; */
  color: white;
  text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}

ul li .icon {
  font-size: 3rem;
}
ul li .title {
  font-size: 1.25rem;
  font-weight: 700;
}

ul li .descr {
  font-size: 0.9rem;
}

.credits {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.credits a {
  color: var(--color);
}

</style>