<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="w-full h-screen flex flex-col items-center justify-center">
    <div id="hero" class="grid grid-cols-2 items-center justify-center w-full min-h-full max-w-7xl px-4">
      <section class="flex flex-col items-center justify-center text-center">
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
      <div class="flex items-center justify-center">
        <img src="/public/parking.png" alt="Parking" class="max-w-full h-auto">
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
    <footer class="w-full">


    </footer>
  </main>
</template>