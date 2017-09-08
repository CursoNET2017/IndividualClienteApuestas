<template>
    <div id="ApuestaMaestro">
        <h3>Apuestas Deportivas</h3>
        <div>
            <button id="buttonTodas" class="btn btn-success" v-on:click="filtrar(0)">Todas</button>
            <button id="buttonFutbol" class="btn btn-success" v-on:click="filtrar(1)">Futbol</button>
            <button id="buttonBaloncesto" class="btn btn-success" v-on:click="filtrar(2)">Baloncesto</button>
            <button id="buttonTenis" class="btn btn-success" v-on:click="filtrar(3)">Tenis</button>
        </div>

        <ul class="list-group" v-for="tipo in tipos" v-bind:key="tipo">
            <div v-show="seleccion == tipos || seleccion == tipo">
            <h2>{{tipo}}</h2>
            <a class="list-group-item" v-for="item in items" v-bind:key="item.Id" v-if="item.Tipo==tipo">
            {{item.Evento}}
            </a>
            </div>
        </ul>




    </div>
</template>

<script src="./ApuestaMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./ApuestaMaestro.css" type="text/css" media="screen"></style>