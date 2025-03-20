<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Importa Axios

const user = ref({
        username: '',
        email: '',
        identity_number: '',
        password: '',
        phone_number: '', // Ejemplo (puedes agregar un campo para esto)
        user_type: 'user', // Ejemplo
        balance: 0.0, // Ejemplo
      })
  async function registerUser() {
    try {
      const response = await axios.post('http://127.0.0.1:8001/users/', user.value,{
      headers: {
        'Content-Type': 'application/json', // Especifica el tipo de contenido
      },
      });
      alert('Usuario registrado con éxito: ' + response.data.username);
      // Limpiar el formulario después del registro
      user.value = {
        username: '',
        email: '',
        identity_number: '',
        password: '',
        phone_number: '1234567890',
        balance:0.0,
        user_type: 'regular',
      };


    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al registrar usuario. Por favor, inténtalo de nuevo.');
    }
  }
</script>
<template>   
  <div class="w-full h-full flex items-center justify-center bg-gray-50">
    <div class="w-96 bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold text-center mb-8">Registrarse</h2>
      <form @submit.prevent="registerUser"  class="space-y-6">
        <div class="flex flex-col gap-2">
          <label for="username" class="text-sm font-medium text-gray-700">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa su nombre usuario"
            v-model="user.username"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm font-medium text-gray-700">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa su correo electrónico"
            v-model="user.email"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="phone-number" class="text-sm font-medium text-gray-700">Número de telefono:</label>
          <input
            type="phone"
            id="phone-number"
            name="phone-number"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa su número de telefono"
            v-model="user.phone_number"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="ci" class="text-sm font-medium text-gray-700">Cédula de identidad:</label>
          <input
            type="ci"
            id="ci"
            name="ci"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cédula de identidad"
            v-model="user.identity_number"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm font-medium text-gray-700">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingrese su contraseña"
            v-model="user.password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer "
        >
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>