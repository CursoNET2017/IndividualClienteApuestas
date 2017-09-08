<template>
    <div id="ApuestaMaestro">
        <h3>Apuestas Deportivas</h3>
        <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
            <nav class="collapse bd-links">
            <h4>Categorias</h4>
            <div class="bd-toc-item">
                <a class="bd-toc-link" href="">Hola</a>
                <ul class="nav bd-sidenav">
                <li class="active bd-sidenav-active">
                    <a href="">ESo ES</a>
                </li>
            </ul>
            </div>
            
            <button id="buttonTodas" class="btn btn-success" v-on:click="filtrar(0)">Todas</button>
            <button id="buttonFutbol" class="btn btn-success" v-on:click="filtrar(1)">Futbol</button>
            <button id="buttonBaloncesto" class="btn btn-success" v-on:click="filtrar(2)">Baloncesto</button>
            <button id="buttonTenis" class="btn btn-success" v-on:click="filtrar(3)">Tenis</button>
        </nav>
        </div>
        
        <div id="cuerpo" class="container">
            <ul class="list-group" v-for="tipo in tipos" v-bind:key="tipo">
                <div v-show="seleccion == tipos || seleccion == tipo">
                <h2>{{tipo}}</h2>
                <a class="list-group-item" v-for="item in items" v-bind:key="item.Id" v-if="item.Tipo==tipo">
                {{item.Evento}}
                </a>
                </div>
            </ul>
        </div>



    </div>
</template>

<script src="./ApuestaMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./ApuestaMaestro.css" type="text/css" media="screen"></style>