<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="w-full h-full flex flex-col items-center justify-center">
    <div id="hero" class="grid grid-rows-2 md:grid-cols-2 items-center justify-center w-full min-h-[700px] h-full max-w-7xl px-4">
      <section class="flex flex-col items-center justify-center text-center h-full">
        <h1 class="text-4xl font-bold mb-8">
          Ahorra tu tiempo en pagos y largas colas, haz tu pago desde una app
        </h1>
        <div class="flex items-center justify-center gap-4">
          <button class="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors cursor-pointer">
            <router-link to="/login">
              Iniciar Sesión
            </router-link>
          </button>
          <button class="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors cursor-pointer">
            <router-link to="/register">
              Registrarse
            </router-link>
          </button>
        </div>
      </section>
      <div class="flex items-center justify-center h-full">
        <img src="/public/parking.svg" alt="Parking" class="max-w-full h-auto">
      </div>
    </div>
    <div id="information" class="flex items-center justify-center max-w-7xl h-full p-8 bg-gray-50">
      <div class="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-gray-700">
        <h2 class="text-3xl font-bold text-center mb-6">¿Cómo Funciona?</h2>
        <p class="text-lg text-center mb-8">
          Somos una empresa desarrollada para evitar largas colas en los pagos de tarifas y digitalizar todo el proceso de un estacionamiento, mejorando así la experiencia del usuario.
        </p>
        <div class="space-y-6">
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold">Paso 1: Crea tu Cuenta</h3>
            <p class="text-lg">
              Para evitar rellenar tus datos cada vez que uses la app, crea una cuenta. ¡Es rápido y sencillo!
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold">Paso 2: Ingresa la Placa de tu Vehículo</h3>
            <p class="text-lg">
              La app te permite ingresar la placa de tu vehículo o realizar un pago para una placa no registrada en tu cuenta (placa de terceros).
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold">Paso 3: Selecciona tu Método de Pago</h3>
            <p class="text-lg">
              Elige tu método de pago preferido y completa la transacción de manera rápida y segura.
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-semibold">Wallet Integrado</h3>
            <p class="text-lg">
              Mantén tu saldo al día y disfruta de la seguridad de nuestra billetera integrada.
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="w-dvw  shadow-lg grid grid-cols-2 md:grid-cols-7 items-center justify-center">
      <img src="/public/parking-dark.svg"  class="w-36 h-36 row-start-1 md:col-span-2">
      <ul class="flex items-center justify-center gap-4 row-start-2 md:row-start-1 col-span-2 md:col-span-3">
        <li class="w-auto h-auto cursor-pointer" title="Facebook">
          <img src="/public/facebook.svg"  class="w-12 h-12"/>
        </li>
        <li class="w-auto h-auto cursor-pointer" title="X">
          <img src="/public/x.svg"  class="w-12 h-12"/>
        </li>
        <li class="w-auto h-auto cursor-pointer" title="Instagram">
          <img src="/public/instagram.svg"  class="w-12 h-12"/>
        </li>
      </ul>
      <span class="md:col-span-2 col-start-2 font-medium text-2xl">Ahorra tu tiempo, con Nuestro Servicios</span>
      <div class="mt-4 col-span-2 md:col-span-7 shadow-2xl flex justify-center items-center gap-4 border-t py-4">
        <img src="/public/location.svg" class="w-12 h-12">
        <span>Universidad Santa María, Campus la Florencia</span>
      </div>

    </footer>
  </main>
</template>