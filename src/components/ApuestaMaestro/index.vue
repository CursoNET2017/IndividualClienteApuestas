<template>
    <div id="ApuestaMaestro" class="container-fluid">
    <div class="nav-side-menu">
    <div class="brand">Categorias</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div class="menu-list">  
            <ul id="menu-content" class="menu-content collapse out">
                <li data-toggle="collapse"class="collapsed active" v-on:click="filtrar(0)">
                  <a><i class="fa fa-asterisk fa-lg"></i> Todas</a>
                </li>                
                <li data-toggle="collapse" data-target="#baloncesto" class="collapsed" v-on:click="filtrar(2)">
                  <a><i class="fa fa-chrome fa-lg"></i> Baloncesto <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="baloncesto">
                  <li v-for="item in items" v-bind:key="item.Id" v-if="item.TipoDeporte==tipos.baloncesto" v-on:click="sacarDetalle(item.Id)">
                      {{item.Evento1}} Vs {{item.Evento2}}</li>
                </ul>
                <li data-toggle="collapse" data-target="#futbol" class="collapsed" v-on:click="filtrar(1)">
                  <a><i class="fa fa-futbol-o fa-lg"></i> Fútbol <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="futbol">
                  <li v-for="item in items" v-bind:key="item.Id" v-if="item.TipoDeporte==tipos.futbol" v-on:click="sacarDetalle(item.Id)">
                      {{item.Evento1}} Vs {{item.Evento2}}</li>
                </ul>
                <li data-toggle="collapse" data-target="#tenis" class="collapsed" v-on:click="filtrar(3)">
                  <a><i class="fa fa-circle"></i> Tenis <span class="arrow"></span></a>
                </li>
                <ul class="sub-menu collapse" id="tenis">
                  <li v-for="item in items" v-bind:key="item.Id" v-if="item.TipoDeporte==tipos.tenis" v-on:click="sacarDetalle(item.Id)">
                      {{item.Evento1}} Vs {{item.Evento2}}</li>
                </ul>
            </ul>
     </div>
    </div>
    <div id="cuerpo" class="container">
        <div id="porDefecto" v-if="visibleCuerpo">
            <h2>Apuestas Deportivas</h2>
            <button id="insertar" @click="nuevoItem" class="btn btn-default">
				<i class="fa fa-plus"></i> Inserción
            </button>
            <div v-if="items.length > 0">
            <ul class="list-group" v-for="tipo in tipos" v-bind:key="tipo">
                <div v-show="seleccion == tipos || seleccion == tipo">
                <h3>{{tipo}}</h3>
                <table class="table table-bordered">
                    <tr>
                        <th>Fecha</th>
                        <th>Evento</th>
                        <th>Cuota</th>
                        <th>Pronóstico</th>
                    </tr>
                    <tr v-for="item in items" v-bind:key="item.Id" v-if="item.TipoDeporte==tipo" v-on:click="sacarDetalle(item.Id)">
                        <td>{{item.Fecha}}</td>
                        <td>{{item.Evento1}} Vs {{item.Evento2}}</td>
                        <td>{{item.Cuota}}</td>
                        <td>{{item.Pronostico}}</td>
                    </tr>
                </table>
                </div>
            </ul>
            </div>
            <div v-else><h3>No existen apuestas registradas</h3></div>
        </div>
        <detalle v-else v-bind:idSeleccionado="idSeleccionado" v-bind:tipos="tipos" v-on:cerrar="cerrarDetalle" v-on:recarga="getTodos"></detalle>
    </div>
</div>
</template>

<script src="./ApuestaMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./ApuestaMaestro.css" type="text/css" media="screen"></style>