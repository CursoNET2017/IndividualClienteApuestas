export default {
  name: 'TipoDetalle',
  props: ['idSeleccionado'],
  data() {
    return {
      filtrada: {},
      filtradaBackUp: {}
    }
  },
  methods: {
      validar: function () {
        
      },
      guardar: function () {
        let _this = this;
        $.ajax({
            type: 'POST',
            url: 'http://localhost:53721/api/Apuestas',
            data: _this.filtrada,
            success: function (response) {
                //_this.getTodos();
                _this.visibleBorrado();
                alert('Creado evento '+_this.filtrada.Evento1+' VS '+_this.filtrada.Evento2);
            },
            error: function(xhr, textStatus, errorThrown){
                alert("Error guardar: " + errorThrown + " --> " + xhr.responseText);
                debugger;
            },        
		    complete: function(xhr, status) {		        
		        //_this.getTodos();
		    }
        });
      },
      visibleBorrado: function () {
          this.filtrada={};
      },
      cancelar: function () {
        this.tipoFiltrada = {};        
        this.$emit('cerrar');//HACER QUE VUELVA AL PADRE
      },
      actulizarPadre: function () {
        this.$emit('recarga');//HACER QUE VUELVA AL PADRE
      },
      cargarItem: function (idSeleccionado) {
        let _this = this;
        $.ajax({
            url: 'http://localhost:53721/api/Apuestas/'+idSeleccionado,
            type: 'GET',     
            success: function(response) {
            //alert('YUPII');
            //_this.editable = true;
            _this.filtrada = JSON.parse(JSON.stringify(response));
            },
            error: function(xhr, textStatus, errorThrown){
                alert("Error carga: " + errorThrown + " --> " + xhr.responseText);
                debugger;
            }
        });
      },
      actualizar: function () {
        let id1 = this.filtrada.Id;
        let _this = this;
	  	$.ajax({
		    url : 'http://localhost:53721/api/Apuestas/'+id1,
		    type : 'PUT',     
		    dataType : 'json',
            data: _this.filtrada,
		    success : function(response) {                
                _this.actulizarPadre();//Actualizar listado maestro
		        _this.cancelar();
		    },
		    error : function(xhr, textStatus, errorThrown){
		    	alert("Error actualizar: " + errorThrown + " --> " + xhr.responseText);
                debugger;
		    }
	  	});
      }



  },
  mounted: function () {
    //this.filtrada = this.item;
      //console.log('Id....  '+this.idSeleccionado)
    if (this.idSeleccionado!=undefined) {
        this.cargarItem(this.idSeleccionado);
    }
  }
}