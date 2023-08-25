<template>
    <div class="container mt-5">
 
      <div v-if="contrato">
        <h2>Información del Contrato</h2>
        <p><strong>Código de curso:</strong> {{ contrato.courseCode }}</p>
        <p><strong>Fecha de alta:</strong> {{ contrato.fechaAlta }}</p>
        <p><strong>Colegio:</strong> {{ contrato.colegioNombre }}</p>
        <p><strong>Nivel:</strong> {{ contrato.colegioNivel }}</p>
        <p><strong>Curso:</strong> {{ contrato.colegioCurso }}</p>
        <p><strong>Localidad:</strong> {{ contrato.colegioLocalidad }}</p>
        
        <h3>Pedidos:</h3>
      <div class="row">
        <div class="col-md-3"><strong>Cantidad</strong></div>
        <div class="col-md-3"><strong>Artículo</strong></div>
        <div class="col-md-3"><strong>Precio unitario</strong></div>
        <div class="col-md-3"><strong>Total</strong></div>
      </div>
      <div v-for="pedido in contrato.pedidos" :key="pedido.id" class="row">
        <div class="col-md-3">{{ contrato.cantidadEgresados }}</div>
        <div class="col-md-3">{{ pedido.item.nombre }}</div>
        <div class="col-md-3">{{ pedido.item.precio }}</div>
        <div class="col-md-3">{{ contrato.cantidadEgresados * pedido.item.precio }}</div>
      </div>
        <p><strong>Total:</strong> {{ contrato.total }}</p>
        <p><strong>Fecha de entrega:</strong> {{ contrato.fechaEntrega }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  props: {
    contrato: {
      type: Object,
      required: true
    }
  },
  methods: {
  },
};
</script>
