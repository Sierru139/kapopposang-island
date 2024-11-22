<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<script>
export default {
    data() {
        return {
            navOpen: false,
        }
    },
    methods: {
      
    },
}
</script>

<template>
  <header>
    <div class="nav flex justify-between items-center p-3">
      <div class="text-2xl font-bold italic">KAPOP<span class="text-green-400">OSANG</span></div>
      <nav class="flex gap-x-3 font-semibold max-md:hidden">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/galery">Galeri</RouterLink>
      </nav>

      <nav class="flex gap-x-3 font-semibold md:hidden">
        <button>-</button>
        <div class="fixed right-0 top-0 bottom-0 w-fit bg-red-300 z-[9999] px-12"
              :class="{'hidden' : navOpen}">
          <button class="absolute right-8 top-0">-</button>
          <div class="mt-10">
            <RouterLink to="/" class="block p-3 text-lg">Home</RouterLink>
            <RouterLink to="/about" class="block p-3 text-lg">About</RouterLink>
            <RouterLink to="/galery" class="block p-3 text-lg">Galeri</RouterLink>
          </div>
        </div>
      </nav>
      <div class="text-2xl max-md:hidden">
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
