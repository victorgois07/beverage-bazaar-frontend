<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Título do Site</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/categories">Categorias</v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item link to="/">Home</v-list-item>
      <v-list-item link to="/categories">Categorias</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
