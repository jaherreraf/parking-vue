<script setup>
    import { ref } from 'vue';
    import Accordion from '@/components/Accordion.vue';
    import vehicleManagement from '@/components/vehicleManagement.vue'
    const activeSpinner = ref(false)
    const  activeItem = ref(null)
    function toggleItem(item){
        activeItem.value = activeItem.value === item ? null: item
    }
</script>
<template>
    <div class="w-full h-full flex flex-col gap-6 justify-start mt-6">
        <div class="flex items-center justify-center w-full gap-10 ">
            <div class="rounded-full bg-transparent  grid place-content-center">
                <img src="/public/user.svg" class="w-24 h-24">
            </div>
            <div class=" grid grid-flow-row gap-2">
                <span class="text-2xl text-gray-500 font-bold">Usuario</span>
                <strong>@NombreDelUsuario</strong>
            </div>
        </div>
        <div class=" flex items-center justify-center">
            <div class=" relative w-96 md:w-1/2 h-24 bg-red-700 rounded-lg">
                <div class="absolute top-2 right-4 flex md:flex-col items-center justify-center gap-2 text-white">
                    <strong>wallet</strong>
                    <span>BS 0,00</span>
                </div>
                <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 h-24 w-80 md:w-96 rounded-lg bg-gray-100 flex items-center justify-center gap-6">
                    <!-- Contenido del div centrado -->
                     <div class="flex flex-col items-center justify-center gap-2 cursor-pointer" @click="toggleItem(1)">
                        <img src="/public/wallet.svg" class="w-12 h-12">
                        <span>Depositar</span>
                     </div>
                     <div class="flex flex-col items-center justify-center gap-2 cursor-pointer" @click="toggleItem(2)">
                        <img src="/public/car.svg" class="w-12 h-12">
                        <span>Operaciones</span>
                     </div>
                     <div class="flex flex-col items-center justify-center gap-2 cursor-pointer" @click="toggleItem(3)">
                        <img src="/public/map.svg" class="w-12 h-12">
                        <span>Guía</span>
                     </div>
                     <!--
                     <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
                        <img src="/public/suitcase.svg" class="w-12 h-12">
                        <span>Movimientos</span>
                     </div>
                     -->
                </div>
        </div>
        
        </div>
        <div class="flex items-center justify-center mt-10  h-full shadow-lg bg-gray-100">
            <div :class="[!activeSpinner?'hidden':'block']">
                <!--spinner-->
                <div role="status">
                    <svg aria-hidden="true" class="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-4" v-if="activeItem==1">
                <Accordion/>
            </div>
            <div class="flex flex-col items-center justify-center gap-4" v-if="activeItem==2">
               <vehicleManagement/>
            </div>

        </div>
    </div>
  </template>