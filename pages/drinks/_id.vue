<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">{{ bebida.nome }}</v-card-title>
          <v-card-text>
            <div><strong>Categoria:</strong> {{ bebida.categoria }}</div>
            <div><strong>Descrição:</strong> {{ bebida.descricao }}</div>
            <div><strong>Ingredientes:</strong> {{ bebida.ingredientes }}</div>
            <div><strong>Preparo:</strong> {{ bebida.preparo }}</div>
            <div>
              <strong>Alcoólica:</strong> {{ bebida.alcoolica ? 'Sim' : 'Não' }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  asyncData({ params, $axios }) {
    // Aqui você buscaria os dados da bebida usando o ID
    // Por exemplo, usando $axios para chamar sua API
    return $axios
      .$get(`/api/drinks/${params.id}`)
      .then((data) => {
        return { bebida: data };
      })
      .catch((error) => {
        console.error(error);
        // Tratamento de erro ou redirecionamento, se necessário
      });
  },
  data() {
    return {
      bebida: null, // Dados da bebida inicializados como nulos
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para a página de detalhes da bebida */
</style>
