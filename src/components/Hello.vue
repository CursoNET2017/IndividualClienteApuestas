<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/apuestas.png" alt="cabeceraDatos.nombre">
    <br>
    <ul>
      <li><router-link exact to="/ApuestaMaestro"><p><i class="fa fa-list" aria-hidden="true"></i> Listado de apuestas</p></router-link></li>
      <li><router-link exact to="/ApuestaDetalle"><p><i class="fa fa-search-plus" aria-hidden="true"></i> Detalle apuestas</p></router-link></li>
    </ul>
    <ul>
      <li><router-link exact to="/UsuarioMaestro"><p><i class="fa fa-users" aria-hidden="true"></i> Listado de usuarios</p></router-link></li>
      <li><router-link exact to="/UsuarioDetalle"><p><i class="fa fa-user" aria-hidden="true"></i> Detalle usuarios</p></router-link></li>
    </ul>
    <!--
    <ul>
      <li><a href="http://www.todo-apuestas.es/foro/" target="_blank">Foro</a></li>
      <li><a href="http://www.apuestasdeportivas.com/pronosticos/" target="_blank">Pronósticos</a></li>
    </ul>
    -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Bienvenido a Your Best Bets'
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
  font-size: 36pt;
  text-shadow: 2px 3px 3px black;
  color: #42b983;
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
.hello p{
  font-size: 16pt;
}
</style>
