<template>
  <v-app>
    <Navbar />
    <v-main>
      <NuxtPage />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer.vue'; // Importa o componente Footer
import Navbar from '~/components/Navbar.vue'; // Importa o componente Navbar

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
