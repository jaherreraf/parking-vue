<script setup>
import {RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
const links = [
  { title: "Inicio", href: '/' },
  { title: "Iniciar Sección", href: 'login' },
  { title: "Registrarse", href: 'register' },
]

import { useCounterStore } from '@/stores/database';
import { onMounted } from 'vue';

const store = useCounterStore();

onMounted(() => {
  store.fetchUsers(); // Llama a fetchUsers cuando el componente se monte
  console.log('Usuarios en el store:', store.users); // Imprime los usuarios
})
</script>

<template>
  <div class="flex flex-col h-screen text-lg">
    <header class="w-full p-4 flex items-center justify-between shadow-xs font-medium">
      <img src="/public/parking-dark.svg"  class="w-36 h-36">
      <ul class="hidden md:flex items-center justify-between gap-6">
        <li v-for="(link, key) in links" :key="key" class="text-blue-400 transition-all duration-200 hover:text-black cursor-pointer">
          <router-link :to="link.href" class="cursor-pointer">{{ link.title }}</router-link>
        </li>
      </ul>
      <button class="hidden md:block text-center bg-blue-400 text-white p-4 rounded-md cursor-pointer">
        <router-link to="/app" class="cursor-pointer">
          usar app!
        </router-link>
      </button>
      <Sidebar/>
    </header>
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>