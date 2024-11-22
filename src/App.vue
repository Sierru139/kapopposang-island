<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="nav flex justify-between items-center p-3">
      <div class="text-2xl font-bold italic">KAPOP<span class="text-green-400">OSANG</span></div>
      <nav class="flex gap-x-3 font-semibold">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/galery">Galeri</RouterLink>
      </nav>
      <div class="text-2xl">
        <button>
          <img src="@/assets/images/icon/indonesia-flag.webp" alt=""
               class="drop-shadow-lg rounded-lg w-12"
               >
          </button>
      </div>
      
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.router-link-active,
 .router-link-exact-active {
   color: #739072;
   text-decoration: underline;
   text-underline-offset: 8px;
 }



</style>
