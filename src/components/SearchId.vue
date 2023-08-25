<template>
    <div class="container mt-5">
    <div class="input-group">
      <input
        v-model="idValue"
        type="text"
        class="form-control"
        placeholder="Ingrese un ID de Contrato"
      />
      <button @click="buscar" class="btn btn-primary">Buscar</button>
    </div>
    <Form v-if="contratoEncontrado" :contrato="contratoEncontrado" />
    <p v-if="error" class="text-danger">{{ error }}</p> <!-- Mostrar el mensaje de error -->
  </div>

</template>

<script>
import {buscarContratoPorId} from "../api/Contrato.js"
import Form from "./Form.vue"

export default {
  components: {
    Form
  },
  data() {
    return {
      idValue: '',
      contratoEncontrado: null,
      error: '' // Propiedad para almacenar el mensaje de error
    };
  },
  methods: {
    async buscar() {
      try {
        const contrato = await buscarContratoPorId(this.idValue);
        this.contratoEncontrado = contrato;
        console.log('Respuesta de la búsqueda:', contrato);
        this.error = ''; // Limpiar el mensaje de error si la búsqueda fue exitosa
      } catch (error) {
        console.error('Error al buscar:', error);
        this.error = error.response?.data?.Message || 'Error desconocido'; // Mostrar el mensaje de error
      }
    },
  },
};
</script>