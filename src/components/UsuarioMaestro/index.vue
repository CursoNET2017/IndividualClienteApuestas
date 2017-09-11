<template>
    <div id="UsuarioMaestro" class="container-fluid">
    <!--<div class="nav-side-menu">
    <div class="brand">Categorias</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div class="menu-list">  
            <ul id="menu-content" class="menu-content collapse out">
                <li data-toggle="collapse"class="collapsed active" v-on:click="filtrar(0)">
                  <a><i class="fa fa-asterisk fa-lg"></i> Todas</a>
                </li>                
                <li data-toggle="collapse" data-target="#baloncesto" class="collapsed" v-on:click="filtrar(2)">
                  <a><i class="fa fa-gift fa-lg"></i> Baloncesto <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="baloncesto">
                  <li v-for="item in items" v-bind:key="item.Id" v-if="item.TipoDeporte==tipos.baloncesto" v-on:click="sacarDetalle(item.Id)">
                      {{item.Evento1}} Vs {{item.Evento2}}</li>
                </ul>
                <li data-toggle="collapse" data-target="#futbol" class="collapsed" v-on:click="filtrar(1)">
                  <a><i class="fa fa-futbol-o fa-lg"></i> Futbol <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="futbol">
                  <li v-for="item in items" v-bind:key="item.Id" v-if="item.TipoDeporte==tipos.futbol" v-on:click="sacarDetalle(item.Id)">
                      {{item.Evento1}} Vs {{item.Evento2}}</li>
                </ul>
                <li data-toggle="collapse" data-target="#tenis" class="collapsed" v-on:click="filtrar(3)">
                  <a><i class="fa fa-car fa-lg"></i> Tenis <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="tenis">
                  <li v-for="item in items" v-bind:key="item.Id" v-if="item.TipoDeporte==tipos.tenis" v-on:click="sacarDetalle(item.Id)">
                      {{item.Evento1}} Vs {{item.Evento2}}</li>
                </ul>
            </ul>
     </div>
    </div>-->
    <div id="cuerpo" class="container">
        <div id="porDefecto" v-if="visibleCuerpo">
            <h2>Usuarios Registrados</h2>
            <button id="insertar" @click="nuevoItem" class="btn btn-default">
				<i class="fa fa-plus"></i> Inserción
            </button>
            <!--<ul class="list-group" v-for="tipo in tipos" v-bind:key="tipo">
                <div v-show="seleccion == tipos || seleccion == tipo">
                <h3>{{tipo}}</h3>-->
                <table class="table table-bordered">
                    <tr>
                        <th>Nick</th>
                        <th>Nombre</th>
                        <th>E-mail</th>
                    </tr>
                    <tr v-for="item in items" v-bind:key="item.Id" v-on:click="sacarDetalle(item.Id)">
                        <td>{{item.Nick}}</td>
                        <td>{{item.Apellidos}}, {{item.Nombre}}</td>
                        <td>{{item.Email}}</td>
                    </tr>
                </table>
                <!--<a class="list-group-item" v-for="item in items" v-bind:key="item.Id" v-if="item.Tipo==tipo" v-on:click="sacarDetalle(item.Id)">
               * Evento: {{item.Evento1}} Vs {{item.Evento2}} ==> Una tabla chula chula *
                </a>-->
                </div>
            </ul>
        <!--</div>
        <detalle v-else v-bind:idSeleccionado="idSeleccionado" v-bind:tipos="tipos" v-on:cerrar="cerrarDetalle" v-on:recarga="getTodos"></detalle>-->
    </div>
</div>
</template>

<script src="./UsuarioMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./UsuarioMaestro.css" type="text/css" media="screen"></style>