<template>
    <div id="ApuestaDetalle">
        <div class="container-fluid">			
			<form v-on:submit.prevent="">
				<h2>{{!idSeleccionado?"Insertar nueva apuesta":"Detalle de la apuesta"}}</h2>
				<br/>
			    <div class="row">
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">Deporte: </label>
            				<div class="col-xs-9">
                                <select v-model="filtrada.Tipo" class="form-control" aria-label="Tipo">
                                    <option disabled value="">Seleccione una categoría</option>
                                    <option>Baloncesto</option>
                                    <option>Futbol</option>
                                    <option>Tenis</option>
                                </select>
								<div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Seleccione uno.</small></div>
						  	</div>
						</div>
					</div>
                </div>
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Evento: </label>
							<div class="col-xs-4">
						  		<input v-model="filtrada.Evento1" type="text" class="form-control" aria-label="Evento">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> 1 a 30 caracteres.</small></div>
						  	</div>
                            <div class="col-xs-1">
						  		<label>Vs</label>
						  	</div>
                            <div class="col-xs-4">
						  		<input v-model="filtrada.Evento2" type="text" class="form-control" aria-label="Evento">
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Entre 1 y 30 caracteres.</small></div>
						  	</div>
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">Fecha: </label>
            				<div class="col-xs-9">
						  		<input v-model="filtrada.Fecha" type="date" class="form-control" aria-label="Fecha" >
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Fecha no válida.</small></div>
						  	</div>
						</div>
					</div>
                </div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">Pronostico: </label>
            				<div class="col-xs-9">
						  		<input v-model="filtrada.Pronostico" type="text" class="form-control" aria-label="Pronostico" >
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Máximo 50 caracteres.</small></div>
						  	</div>
						</div>
					</div>
                </div>
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Cuota: </label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.Cuota" type="text" class="form-control" aria-label="Cuota" >
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Tiene que ser 1 ó mayor.</small></div>
						  	</div>
						</div>
					</div>
				</div> 
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
						   	<label class="col-xs-3">Vencedor: </label>
            				<div class="col-xs-9">
						  		<input v-model="filtrada.AVencedor" type="text" class="form-control" aria-label="AVencedor" >
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Uno de los dos participantes</small></div>
						  	</div>
						</div>
					</div>
                </div>               
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Resultado: </label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.AResultado" type="text" class="form-control" aria-label="AResultado" >
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Formato: Número-Número</small></div>
						  	</div>
						</div>
					</div>
				</div>                
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Cantidad(€):</label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.Cantidad" type="text" class="form-control" aria-label="Cantidad" >
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> Número positivo.</small></div>
						  	</div>
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<label class="col-xs-3">Usuario: </label>
							<div class="col-xs-9">
						  		<input v-model="filtrada.DNIUsuario" type="text" class="form-control" aria-label="DNIUsuario" >
								  <div class="ayudaInput"><small id="passwordHelpBlock" class="form-text text-muted"> DNI no válido.</small></div>
						  	</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
							<div class="col-xs-3"></div>
							<div class="col-xs-9">
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
			</form>
		</div>
    </div>
</template>

<script src="./ApuestaDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./ApuestaDetalle.css" type="text/css" media="screen"></style>