<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Category from '../api/entities/category';
import CategoryService from '../api/services/CategoryService';

const categories = ref<Category[]>([]);

onMounted(async () => {
  categories.value = await CategoryService.getAllCategories();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Bem-vindo ao Beverage Bazaar</h1>
        <p>Explore uma variedade de bebidas deliciosas.</p>
      </v-col>
    </v-row>
    <div v-for="drinks in categories">
      {{ drinks }}
    </div>

    <!-- <v-row>
      <v-col
        v-for="categoria in drinks"
        :key="categoria"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card :to="`/categories/${categoria.id}`" class="pa-5" outlined>
          <v-card-title>{{ categoria.nome }}</v-card-title>
          <v-card-text>{{ categoria.descricao }}</v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>
