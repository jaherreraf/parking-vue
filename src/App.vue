<script setup>
import { RouterView } from 'vue-router'

const links = [
  { title: "Inicio", href: '#hero' },
  { title: "Informacion", href: '#information' },
  { title: "Iniciar Sección", href: '#login' },
  { title: "Registrarse", href: '#register' },
]
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="w-full p-4 flex items-center justify-between shadow-xs">
      <img src="/public/parking-dark.svg" alt="" class="w-36 h-36">
      <ul class="flex items-center justify-between gap-6">
        <li v-for="(link, key) in links" :key="key">
          <a :href="link.href">{{ link.title }}</a>
        </li>
      </ul>
      <button class="text-center bg-blue-400 p-4 rounded-md cursor-pointer">Contáctanos!</button>
    </header>
    <main class="flex-grow">
      <RouterView />
    </main>
  </div>
</template>