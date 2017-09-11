export default {
  name: 'TipoDetalle',
  props: ['idSeleccionado', 'tipos'],
  data() {
    return {
      filtrada: {},
      valido: {a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true, j: true}
    }
  },
  methods: {
      validar: function () {
        this.valido = {a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true, j: true};
        let isValido = true;
        if (this.filtrada.TipoDeporte == null) {
          this.valido.a = false;
          isValido = false;
        };
        if (!(this.filtrada.Evento1 != null && this.filtrada.Evento1.length > 0 && this.filtrada.Evento1.length <= 30)) {
          this.valido.b = false;
          isValido = false;
        };
        if (!(this.filtrada.Evento2 != null && this.filtrada.Evento2.length > 0 && this.filtrada.Evento2.length <= 30)) {
          this.valido.c = false;
          isValido = false;
        };
        if(!!this.filtrada.Fecha == false){
          this.valido.d = false;
          isValido = false;
        }else if (isNaN(Date.parse(this.filtrada.Fecha.split('/').reverse().join('-')))) {
          this.valido.d = false;
          isValido = false;
        };
        if (!(this.filtrada.Pronostico != null && this.filtrada.Pronostico.length > 0 && this.filtrada.Pronostico.length <= 50)) {
          this.valido.e = false;
          isValido = false;
        };
        if (!/^([0-9])*[.]?[0-9]*$/.test(this.filtrada.Cuota)) {
          this.valido.f = false;
          isValido = false;
        };
        if (!(this.filtrada.AVencedor != null && this.filtrada.AVencedor == this.filtrada.Evento1 || this.filtrada.AVencedor ==this.filtrada.Evento2)) {
          this.valido.g = false;
          isValido = false;
        };
        if (!/^([0-9])+[-][0-9]+$/.test(this.filtrada.AResultado)) {
          console.log('Resultado'+this.filtrada.AResultado)
          this.valido.h = false;
          isValido = false;
        };
        if (!/^([0-9])*[.]?[0-9]*$/.test(this.filtrada.Cantidad)) {
          this.valido.i = false;
          isValido = false;
        };
        if (!/^[0-9]{8}[A-Z]$/.test(this.filtrada.DNIUsuario)) {
          this.valido.j = false;
          isValido = false;
        };
        console.log('Sale: '+isValido)
        return isValido;
      },
      mensaje: function () {
        bootbox.alert({
          message: "Campos no validos",
          size: 'small'
        });
      },
      guardar: function () {
        let _this = this;
        if (this.validar()) {
          $.ajax({
            type: 'POST',
            url: 'http://localhost:53721/api/Apuestas',
            data: _this.filtrada,
            //data: {TipoDeporte: _this.filtrada.TipoDeporte, Cuota: _this.filtrada.Cuota, Fecha: _this.filtrada.Fecha, Evento1: _this.filtrada.Evento1, Evento2: _this.filtrada.Evento2, Pronostico: _this.filtrada.Pronostico, DNIUsuario: _this.filtrada.DNIUsuario, AResultado: _this.filtrada.AResultado, AVencedor: _this.filtrada.AVencedor, Cantidad: _this.filtrada.Cantidad},
            success: function (response) {
                //alert('Creado evento '+_this.filtrada.Evento1+' VS '+_this.filtrada.Evento2);
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
        } else {
          this.mensaje();
        }        
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
        if (this.validar()) {
          bootbox.confirm({
            message: "¿Esta seguro de querer modificar la apuesta?",
            buttons: {
                confirm: {
                    label: 'Actualizar',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Cancelar',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
              if (result) {
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
              } else {
                _this.cancelar();
              }
            }
          });          
        } else {
          this.mensaje();
        }
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