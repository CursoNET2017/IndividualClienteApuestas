<template>
	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">
					<img :src="cabeceraDatos.logo" :alt="cabeceraDatos.nombre"> <p>Your Best Bets</p> 
                    <router-link exact to="/"></router-link>
				</a>
				</div>
				<ul class="nav navbar-nav">
				<li><router-link exact to="/ApuestaMaestro"><i class="fa fa-money" aria-hidden="true"></i> Apuestas</router-link></li><!-- li class="active" -->
				<li><router-link exact to="/UsuarioMaestro"><i class="fa fa-users" aria-hidden="true"></i> Usuarios</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<script src="./Cabecera.js" type="text/javascript" charset="utf-8"></script>
<style src="./Cabecera.css" type="text/css" media="screen"></style>
