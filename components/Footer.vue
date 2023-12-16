<template>
  <v-footer padless>
    <v-col class="text-center">
      <v-row justify="center" no-gutters>
        <v-btn
          text
          icon
          small
          href="https://github.com/seuprojeto"
          target="_blank"
        >
          <v-icon large>mdi-github</v-icon>
        </v-btn>
        <v-btn
          text
          icon
          small
          href="https://twitter.com/seuprojeto"
          target="_blank"
        >
          <v-icon large>mdi-twitter</v-icon>
        </v-btn>
        <v-btn
          text
          icon
          small
          href="https://www.linkedin.com/in/seuprojeto"
          target="_blank"
        >
          <v-icon large>mdi-linkedin</v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center" no-gutters>
        <span
          >&copy; {{ new Date().getFullYear() }} - Nome da Sua Empresa ou
          Projeto</span
        >
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped></style>
