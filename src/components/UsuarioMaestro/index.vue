<template>
    <div id="UsuarioMaestro" class="container-fluid">
    <div id="cuerpo" class="container">
        <div id="porDefecto" v-if="visibleCuerpo">
            <h2>Usuarios Registrados</h2>
            <button id="insertar" @click="nuevoItem" class="btn btn-default">
				<i class="fa fa-plus"></i> Inserción
            </button>
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
        </div>
    </div>
</div>
</template>

<script src="./UsuarioMaestro.js" type="text/javascript" charset="utf-8"></script>
<style src="./UsuarioMaestro.css" type="text/css" media="screen"></style>