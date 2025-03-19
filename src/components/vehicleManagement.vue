 
<script setup>
import { ref } from 'vue';
const activeItem = ref(2)

</script>
  
<template>
    <div class="flex flex-col items-center justify-center gap-6 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto" v-if="activeItem == 2">
    <!-- Título de la sección -->
    <h2 class="text-2xl font-bold text-gray-800">
    Gestión de Vehículos
    </h2>

    <!-- Lista de placas del usuario -->
    <div class="w-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-2">
        🚗 Lista de placas de tus vehículos
    </h3>
    <p class="text-sm text-gray-600 mb-4">
        Aquí puedes ver y gestionar las placas de los vehículos asociados a tu cuenta.
    </p>
    <!-- Aquí iría la lista dinámica de placas -->
    <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-gray-600 text-sm">(Lista de placas dinámica aquí)</p>
    </div>
    </div>

    <!-- Agregar un vehículo -->
    <div class="w-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-2">
        ➕ Agregar un vehículo
    </h3>
    <p class="text-sm text-gray-600 mb-4">
        Si deseas agregar un vehículo a tu cuenta para no tener que rellenar formularios cada vez, regístralo aquí.
    </p>
    <div class="flex gap-2">
        <input
        type="text"
        placeholder="Ingresa la placa del vehículo"
        class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Agregar
        </button>
    </div>
    </div>
    <!-- Vehículos propio -->
    <div class="w-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-2">
        👥 Mis Matriculas
    </h3>
    <p class="text-sm text-gray-600 mb-4">
        Si deseas pagar la tarifa de unos de tu vehículos, ingresa la placa aquí.
    </p>
    <div class="flex gap-2">
        <input
        type="text"
        placeholder="Ingresa la placa del vehículo"
        class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
        <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
        Confirmar Pago
            </button>
        </div>
    </div>
    

    <!-- Vehículos de terceros -->
    <div class="w-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-2">
        👥 Vehículos de terceros
    </h3>
    <p class="text-sm text-gray-600 mb-4">
        Si deseas pagar la tarifa de un vehículo que no está asociado a tu cuenta, ingresa la placa aquí.
    </p>
    <div class="flex gap-2">
        <input
        type="text"
        placeholder="Ingresa la placa del vehículo"
        class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
        <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
        Confirmar Pago
            </button>
        </div>
    </div>
    </div>
</template>