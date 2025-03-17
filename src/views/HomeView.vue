<script setup>
</script>

<template>
  <main class="w-full h-screen flex items-center justify-center">
    <div id="hero" class="grid grid-cols-2 items-center justify-center w-full max-w-7xl px-4">
      <section class="flex flex-col items-center justify-center text-center">
        <h1 class="text-4xl font-bold mb-8">
          Ahorra tu tiempo en pagos y largas colas, haz tu pago desde una app
        </h1>
        <div class="flex items-center justify-center gap-4">
          <button class="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">
            Iniciar Sesión
          </button>
          <button class="bg-black text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">
            Registrarse
          </button>
        </div>
      </section>
      <div class="flex items-center justify-center">
        <img src="/public/parking.png" alt="Parking" class="max-w-full h-auto">
      </div>
    </div>
  </main>
</template>