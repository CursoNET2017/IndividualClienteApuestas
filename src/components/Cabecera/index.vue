<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12">
				<nav class="navbar navbar-default">
				  	<div class="container-fluid">
					    
						<ul class="nav navbar-nav">
                            <a class="navbar-brand" href="#">
					    		<img :src="cabeceraDatos.logo" :alt="cabeceraDatos.nombre">
                                <router-link exact to="/"></router-link>
							</a>
							<li><router-link exact to="/ApuestaMaestro"><i class="fa fa-money" aria-hidden="true"></i> Apuestas</router-link></li>
							<!--<li><router-link exact to="/TareaMaestro"><i class="fa fa-list" aria-hidden="true"></i>Listado de tareas</router-link></li>
							<li><router-link exact to="/EjecucionMaestro"><i class="fa fa-clock-o" aria-hidden="true"></i>Ejecuciones de tareas</router-link></li>-->
						</ul>
				  	</div>
				</nav>
			</div>	
		</div>
	</div>
</template>

<script src="./Cabecera.js" type="text/javascript" charset="utf-8"></script>
<style src="./Cabecera.css" type="text/css" media="screen"></style>
