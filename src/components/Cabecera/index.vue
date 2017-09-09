<template>
	<!--<div class="container-fluid">
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
						</ul>
				  	</div>
				</nav>
			</div>	
		</div>
	</div>-->
	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">
					<img :src="cabeceraDatos.logo" :alt="cabeceraDatos.nombre"> <p>WebSiteName</p> 
                    <router-link exact to="/"></router-link>
				</a>
				</div>
				<ul class="nav navbar-nav">
				<li><router-link exact to="/ApuestaMaestro"><i class="fa fa-money" aria-hidden="true"></i> Apuestas</router-link></li><!-- li class="active" -->
				<li><router-link exact to="/ApuestaMaestro"><i class="fa fa-users" aria-hidden="true"></i> Usuarios</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<script src="./Cabecera.js" type="text/javascript" charset="utf-8"></script>
<style src="./Cabecera.css" type="text/css" media="screen"></style>
