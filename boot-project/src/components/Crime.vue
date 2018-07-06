<template>
  <div class="crime">
    <h1>Crimes</h1>
    <b-table striped hover :items="crimes"></b-table>
  </div>
</template>

<script>
export default {
  name: 'crime',
  created () {
    this.$http.get('http://localhost:3000/crimes').then(response => {
      this.crimes = response.body
    }, response => {
      // error callback
    })
  },

  data () {
    return {
      crimes: [
        {
          id: 30004,
          cidade: 'RECIFE',
          data_ocorrencia: '2015-04-30',
          idade: 19,
          nome: 'MARIA JOSE',
          objeto_utilizado: 'ARMA DE FOGO',
          qtd_vitimas: 1,
          sexo: 'MASCULINO',
          tipo_crime: 'HOMICIDIO'
        },
        {
          id: 30005,
          cidade: 'CARUARU',
          data_ocorrencia: '2015-04-30',
          idade: 19,
          nome: 'ALLYSSON MARCOS BARBOSA OLIVEIRA',
          objeto_utilizado: 'ARMA DE FOGO',
          qtd_vitimas: 1,
          sexo: 'MASCULINO',
          tipo_crime: 'HOMICIDIO'
        },
        {
          id: 30006,
          cidade: 'CARUARU',
          data_ocorrencia: '2015-04-30',
          idade: 19,
          nome: 'ALLYSSON MARCOS BARBOSA OLIVEIRA',
          objeto_utilizado: 'ARMA DE FOGO',
          qtd_vitimas: 1,
          sexo: 'MASCULINO',
          tipo_crime: 'HOMICIDIO'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
