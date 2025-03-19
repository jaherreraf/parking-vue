<script setup>
    import { ref } from 'vue';
    const  activeItem = ref(null)
    function toggleItem(item){
        activeItem.value = activeItem.value === item ? null: item
    }
</script>
<template>
    <div class="accordion">
      <!-- Ítem 1 -->
      <div class="accordion-item">
        <button
          class="accordion-header flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
          @click="toggleItem(1)"
        >
        <div class="flex items-center justify-start gap-8 ">
            <img src="/public/mobile.svg" class="w-auto h-24">
            <div class="flex flex-col items-center justify-center">
                <span>Pago Móvil</span>
                <span>Inmediata</span>
            </div>
        </div>
          <svg
            class="w-3 h-3 transition-transform"
            :class="{ 'rotate-180': activeItem === 1 }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        <div
          class="accordion-content p-5 border border-b-0 border-gray-200"
          v-if="activeItem === 1"
        >
            <p>Datos para Pago Móvil</p>
            <p>Banco: BANCO DE VENEZUELA</p>
            <p>Rif:J410970715</p>
            <p>Telefóno: 04122644787</p>
            <p>Tu númeoro de Pago Móvil</p>
            <p class="mb-2 text-gray-500">
                0414-397-7946
            </p>
          <p class="mb-2 text-gray-500 text-center">
            Las transacciones recibidas de tu telefóno asociado serán aprobadas automáticamente a tu cuenta Parking
          </p>
          <p>No se acreditó tu pago? <a href="#">Verificalo</a></p>
        </div>
      </div>
      <!-- Ítem 2 -->
      <div class="accordion-item">
        <button
          class="accordion-header flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
          @click="toggleItem(2)"
        >

            <div class="flex items-center justify-start gap-8 ">
                <img src="/public/transfer.svg" class="w-auto h-24">
                <div class="flex flex-col items-center justify-center">
                    <span>Transferencias</span>
                    <span>Notificando</span>
                </div>
            </div>
          <svg
            class="w-3 h-3 transition-transform"
            :class="{ 'rotate-180': activeItem === 2 }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        <div
          class="accordion-content p-5 border border-b-0 border-gray-200"
          v-if="activeItem === 2"
        >
            <p class="fond-bold">Datos para la Transferencia</p>
            <p>Banco: BANCO DE VENEZUELA</p>
            <p>Rif:J410970715</p>
            <p>Titular: Directpay.C.A</p>
            <p>Nro de Cuenta: </p>
            <p class="mb-2 text-gray-500">
                0172-0110-1111-0034-1245
            </p>
            <p class="text-gray-500">
                Una vez realizada la transferencia desde tu cuenta bancaria notifique completando el siguiente fomulario
            </p>
            <div id="form" class="w-full grid grid-flow-row place-items-center mt-4 gap-6">
                <div class="flex flex-col items-start justify-center gap-2 w-56">
                    <label for="amount" class="text-sm font-medium text-gray-700">
                        Monto a recargar
                    </label>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Ej: BS100"
                    />
                </div>
                <div class="flex flex-col items-start justify-center gap-2 w-56">
                    <label for="bank" class="text-sm font-medium text-gray-700">
                        Banco Emisor
                    </label>
                    <input
                        type="text"
                        name="bank"
                        id="bank"
                        class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Banco"
                    />
                </div>
                <div class="w-full text-center">
                    <button class="rounded-lg p-4 text-center font-bold cursor-pointer bg-red-500 text-white">Notificar</button>
                </div>


            </div>
        </div>
      </div>
    </div>
</template>  
<style scoped>
    .accordion-content {
        transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    }
</style>