<script setup>
import {RouterLink, RouterView } from 'vue-router'

const links = [
  { title: "Inicio", href: '/' },
  { title: "Informacion", href: '#information' },
  { title: "Iniciar Sección", href: 'login' },
  { title: "Registrarse", href: 'register' },
]
</script>

<template>
  <div class="flex flex-col h-screen text-lg">
    <header class="w-full p-4 flex items-center justify-between shadow-xs font-medium">
      <img src="/public/parking-dark.svg"  class="w-36 h-36">
      <ul class="flex items-center justify-between gap-6">
        <li v-for="(link, key) in links" :key="key" class="text-blue-400 transition-all duration-200 hover:text-black cursor-pointer">
          <router-link :to="link.href" >{{ link.title }}</router-link>
        </li>
      </ul>
      <button class="text-center bg-blue-400 p-4 rounded-md cursor-pointer">Contáctanos!</button>
    </header>
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>