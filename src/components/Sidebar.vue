<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const links = [
  { title: "Inicio", href: '/' },
  { title: "Informacion", href: '/#information' },
  { title: "Iniciar Sección", href: 'login' },
  { title: "Registrarse", href: 'register' },
]
const active = ref(false)
</script>
<template>
    <button class="md:hidden cursor-pointer w-12 h-12 text-center" @click="active=!active">
        <img src="/public/bars.svg" class="w-full h-full">
    </button>
  <aside
    :class="[
      'fixed w-96 top-0 bg-white shadow-2xl flex flex-col items-center justify-between gap-12 p-4 transition-transform duration-300',
      !active ? '-right-96' : 'right-0 z-30'
    ]"
  >
    <!-- Botón de cierre (visible solo en móviles) -->
    <div class="flex items-center justify-start w-full">
      <button
        class="md:hidden cursor-pointer w-12 h-12 text-center"
        @click="active = !active"
        aria-label="Cerrar sidebar"
      >
        <img src="/public/xmark.svg" alt="Cerrar" class="w-full h-full" />
      </button>
    </div>

    <!-- Lista de enlaces -->
    <ul class="flex flex-col justify-center items-center gap-4">
      <li v-for="(item, index) in links" :key="index" class="text-left">
        <router-link :to="item.href">{{ item.title }}</router-link>
      </li>
    </ul>
    <!-- Botón de acción (visible solo en desktop) -->
    <div class="border-t-1 w-full h-auto py-4 flex items-center justify-center">
        <button
        class=" text-center bg-blue-400 text-white p-4 rounded-md cursor-pointer"
        >
            <router-link to="/wallet-app" class="cursor-pointer">
            Usar app!
            </router-link>
        </button>

    </div>
  </aside>

</template>