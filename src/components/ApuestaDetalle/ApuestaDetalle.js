export default {
  name: 'TipoDetalle',
  props: ['idSeleccionado'],
  data() {
    return {
      filtrada: {},
      valido: {}
    }
  },
  methods: {
      validar: function () {
        if (this.filtrada.Tipo == null) {
          
        };
        if (!(this.filtrada.Evento1 != null && this.filtrada.Evento1.length > 0 && this.filtrada.Evento1.length <= 30)) {
          
        };
        if (!(this.filtrada.Evento2 != null && this.filtrada.Evento2.length > 0 && this.filtrada.Evento2.length <= 30)) {
          
        };
        if(!!this.filtrada.Fecha == false){
          
        }else if (isNaN(Date.parse(this.filtrada.Fecha.split('/').reverse().join('-')))) {
          
        };
        if (!(this.filtrada.Pronostico != null && this.filtrada.Pronostico.length > 0 && this.filtrada.Pronostico.length <= 50)) {
          
        };
        if (!/^([0-9])*[.]?[0-9]*$/.test(this.filtrada.Cuota)) {
          
        };
        if (!(this.filtrada.AVencedor != null && this.filtrada.AVencedor == this.filtrada.Evento1 || this.filtrada.AVencedor ==this.filtrada.Evento2)) {
          
        };
        if (!/^([0-9])+[-][0-9]+$/.test(this.filtrada.AResultado)) {
          
        };
        if (!/^([0-9])*[.]?[0-9]*$/.test(this.filtrada.Cantidad)) {
          
        };
        if (!/^[0-9]{8}[A-Z]$/.test(this.filtrada.DNIUsuario)) {
             
        };

      },
      guardar: function () {
        let _this = this;
        $.ajax({
            type: 'POST',
            url: 'http://localhost:53721/api/Apuestas',
            data: _this.filtrada,
            //data: {Tipo: _this.filtrada.Tipo, Cuota: _this.filtrada.Cuota, Fecha: _this.filtrada.Fecha, Evento1: _this.filtrada.Evento1, Evento2: _this.filtrada.Evento2, Pronostico: _this.filtrada.Pronostico, DNIUsuario: _this.filtrada.DNIUsuario, AResultado: _this.filtrada.AResultado, AVencedor: _this.filtrada.AVencedor, Cantidad: _this.filtrada.Cantidad},
            success: function (response) {
                alert('Creado evento '+_this.filtrada.Evento1+' VS '+_this.filtrada.Evento2);
                _this.visibleBorrado();
                _this.actulizarPadre();//Actualizar listado maestro
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
        //this.validar();
        //this.idSeleccionado = undefined;
        this.tipoFiltrada = {};        
        this.$emit('cerrar');//HACER QUE VUELVA AL PADRE
      },
      actulizarPadre: function () {
        this.$emit('recarga');//ACTUALIZAR LISTADO PADRE
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
      },
      eliminar: function () {
        let id1 = this.filtrada.Id;
        let _this = this;
        $.ajax({
          type: 'DELETE',
          url: 'http://localhost:53721/api/Apuestas/'+id1,
          success: function () {
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
  /*watch: function () {
    idSeleccionado: function () {
      this.cargarItem(this.idSeleccionado);
    }
    
  },*/
  mounted: function () {
    //this.filtrada = this.item;
      //console.log('Id....  '+this.idSeleccionado)
    if (this.idSeleccionado!=undefined) {
        this.cargarItem(this.idSeleccionado);
    }
  }
}