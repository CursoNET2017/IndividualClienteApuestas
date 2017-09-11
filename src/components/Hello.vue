<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/apuestas.png" alt="cabeceraDatos.nombre">
    <h2>Essential Links</h2>
    <ul>
      <li><router-link exact to="/ApuestaMaestro"><i class="fa fa-list" aria-hidden="true"></i> Listado de apuestas</router-link></li>
      <li><router-link exact to="/ApuestaDetalle"><i class="fa fa-search-plus" aria-hidden="true"></i> Detalle apuestas</router-link></li>
      <li><a href="http://www.todo-apuestas.es/foro/" target="_blank">Forum</a></li>
      <li><a href="http://www.todo-apuestas.es/foro/" target="_blank">Community Chat</a></li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Sports Bets'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello h1 {
  font-weight: normal;
  margin-top: 190px;
  text-align: center;
}
.hello h2 {
  font-weight: normal;
  text-align: center;
}
.hello img {
  border-radius: 50%;
  width:30%;
  height: auto;
  margin: auto;
  display: block;
}

.hello ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

.hello li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
