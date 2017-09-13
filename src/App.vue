<template>
  <div id="app">
    <cabecera :cabeceraDatos="cabeceraDatos"></cabecera>
    <router-view></router-view>
  </div>
</template>

<script>
import cabecera from './components/Cabecera/'

export default {
  name: 'app',
  data () {
    return {
      cabeceraDatos: {
        logo: require('./assets/apuestas.png'),
        nombre: 'apuestas_deportivas'
      }
    }
  },
  components: {
    cabecera
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  margin-top: 10px;
}
</style>
