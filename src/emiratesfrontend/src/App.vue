<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <span>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </span>
  <HelloWorld msg="You did it!" />
  <RouterView />
  </div>
  
</template>
