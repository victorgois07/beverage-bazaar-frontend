<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Categorias de Bebidas</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="categoria in categorias"
        :key="categoria.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card :to="`/categories/${categoria.id}`" class="pa-5" outlined>
          <v-card-title>{{ categoria.nome }}</v-card-title>
          <v-card-text>{{ categoria.descricao }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categorias: [
        { id: 1, nome: 'Refrigerantes', descricao: 'Bebidas gaseificadas.' },
        {
          id: 2,
          nome: 'Sucos Naturais',
          descricao: 'Sucos frescos e saudáveis.',
        },
      ],
    };
  },
  mounted() {
    this.fetchCategorias();
  },
  methods: {
    fetchCategorias() {},
  },
};
</script>

<style scoped>
/* Estilos específicos para a página de categorias */
</style>
