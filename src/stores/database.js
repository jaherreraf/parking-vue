import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore('database', () => {
    const users = ref([]);
    async function fetchUsers() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/users/');
          users.value = response.data;  // Almacena los usuarios en el estado reactivo
        } catch (error) {
          console.error('Error al obtener usuarios:', error);
          alert('Error al obtener usuarios. Por favor, inténtalo de nuevo.');
        }
    }
    onMounted(() => {
        fetchUsers();
    });
    console.log('users')
    computed(()=>console.log(users.value))

  return { users }
})
