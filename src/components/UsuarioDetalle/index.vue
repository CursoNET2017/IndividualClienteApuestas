<template>
    <div id="UsuarioDetalle">
        <div class="container-fluid">			
			<form v-on:submit.prevent="">
				<h2>{{!filtrada.Id?"Insertar nuevo usuario":"Detalle del usuario"}}</h2>
				<br/>
			   <!--<div class="row">
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">Deporte: </label>
            				<div class="col-xs-9">
                                <select v-model="filtrada.TipoDeporte" class="form-control" aria-label="TipoDeporte" v-bind:class="{claseError: !valido.a}">
                                    <option disabled value="">Seleccione una categoría</option>
									<option v-for="tipo in tipos" v-bind:key="tipo.Id">{{tipo}}</option>
                                </select>
								<div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.a"> Seleccione uno.</small></div>
						  	</div>
						</div>
					</div>
                </div>-->
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Nombre: </label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.Nombre" type="text" class="form-control" aria-label="Nombre" v-bind:class="{claseError: !valido.a}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.a"> 1 a 30 caracteres.</small></div>
						  	</div>
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">Apellidos: </label>
            				<div class="col-xs-9">
						  		<input v-model="filtrada.Apellidos" type="text" class="form-control" aria-label="Apellidos" v-bind:class="{claseError: !valido.b}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.b"> 1 a 50 caracteres.</small></div>
						  	</div>
						</div>
					</div>
                </div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">DNI: </label>
            				<div class="col-xs-9">
						  		<input v-model="filtrada.DNI" type="text" class="form-control" aria-label="DNI" v-bind:class="{claseError: !valido.c}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.c"> Formato DNI válido.</small></div>
						  	</div>
						</div>
					</div>
                </div>
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">E-mail: </label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.Email" type="text" class="form-control" aria-label="Email" v-bind:class="{claseError: !valido.d}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.d"> Formato E-mail válido.</small></div>
						  	</div>
						</div>
					</div>
				</div> 
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">Nick: </label>
            				<div class="col-xs-9">
						  		<input v-model="filtrada.Nick" type="text" class="form-control" aria-label="Nick" v-bind:class="{claseError: !valido.e}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.e"> 1 a 30 caracteres.</small></div>
						  	</div>
						</div>
					</div>
                </div>               
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Contraseña: </label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.Contrasena" type="text" class="form-control" aria-label="Contrasena" v-bind:class="{claseError: !valido.f}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.f"> Contraseñaaskljdasfh</small></div>
						  	</div>
						</div>
					</div>
				</div>                
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Cuenta:</label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.Cuenta" type="text" class="form-control" aria-label="Cuenta" v-bind:class="{claseError: !valido.g}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.g"> Cuetnassddsfdf.</small></div>
						  	</div>
						</div>
					</div>
				</div>
                <!--<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Usuario: </label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.DNIUsuario" type="text" class="form-control" aria-label="DNIUsuario" v-bind:class="{claseError: !valido.j}">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted" v-show="!valido.j"> DNI no válido.</small></div>
						  	</div>
						</div>
					</div>
				</div>-->
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<div class="col-xs-3"></div>
							<div class="col-xs-9">
								<div class="btn-group" role="group" aria-label="">
									<button id="boton_eliminar" class="btn btn-default" v-on:click="eliminar" v-if="filtrada.Id">
										<i class="fa fa-trash"></i> Eliminar
									</button>
									<button id="boton_cancelar" class="btn btn-default" v-on:click="cancelar">
										<i class="fa fa-times"></i> Cancelar
									</button>
									<button id="boton_actualizar" class="btn btn-default" v-on:click="actualizar" v-if="filtrada.Id">
										<i class="fa fa-undo"></i> Actualizar
									</button>
									<button id="boton_guardar" class="btn btn-default" v-on:click="guardar" v-if="!filtrada.Id">
										<i class="fa fa-floppy-o"></i> Guardar
									</button>
								</div>
						  	</div>
						</div>
					</div>					
				</div>
			</form>
		</div>
    </div>
</template>

<script src="./UsuarioDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./UsuarioDetalle.css" type="text/css" media="screen"></style>