<template>
    <div id="ApuestaMaestro">
        <h3>Apuestas Deportivas</h3>
        <ul class="list-group">
            <a class="list-group-item" v-for="item in items" v-bind:key="item.Id">
            {{item.Evento}}
            </a>
        </ul>





    </div>
</template>

<script src="./ApuestaMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./ApuestaMaestro.css" type="text/css" media="screen"></style>