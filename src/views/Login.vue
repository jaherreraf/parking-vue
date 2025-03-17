<template>
  <div class="w-full h-full flex items-center justify-center bg-gray-50">
    <div class="w-96 bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold text-center mb-8">Iniciar Sesión</h2>
      <form class="space-y-6">
        <div class="flex flex-col gap-2">
          <label for="ci" class="text-sm font-medium text-gray-700">Cédula:</label>
          <input
            type="text"
            id="ci"
            name="ci"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu cédula"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm font-medium text-gray-700">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer "
        >
          Iniciar Sesión
        </button>
      </form>
      <div class="mt-6 text-center">
        <a href="#" class="text-sm text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  </div>
</template>