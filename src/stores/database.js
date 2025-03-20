import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('database', () => {
    const users = ref([]);

    async function fetchUsers() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/users/');
            users.value = response.data;  // Almacena los usuarios en el estado reactivo
            console.log('Usuarios obtenidos:', users.value); // Imprime los usuarios
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            alert('Error al obtener usuarios. Por favor, inténtalo de nuevo.');
        }
    }

    return { users, fetchUsers };
});