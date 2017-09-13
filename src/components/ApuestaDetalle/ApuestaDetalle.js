export default {
  name: 'TipoDetalle',
  props: ['idSeleccionado', 'tipos'],
  data() {
    return {
      filtrada: {},
      valido: {a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true, j: true},
      editable: true
    }
  },
  methods: {
      editar: function () {
        this.editable = !this.editable;
      },
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
          this.valido.h = false;
          isValido = false;
        };
        if (!/^([0-9])*[.]?[0-9]*$/.test(this.filtrada.Cantidad)) {
          this.valido.i = false;
          isValido = false;
        };
        if (!/^[0-9A-Z][0-9]{7}[A-Z]$/.test(this.filtrada.DNIUsuario)) {
          this.valido.j = false;
          isValido = false;
        };
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
            success: function (response) {
                _this.visibleBorrado();
                _this.actulizarPadre();//Actualizar listado maestro
            },
            error: function(xhr, textStatus, errorThrown){
                alert("Error guardar: " + errorThrown + " --> " + xhr.responseText);
                debugger;
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
        bootbox.confirm({
          message: "¿Esta seguro de querer eliminar la apuesta?",
          buttons: {
              confirm: {
                  label: 'Eliminar',
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
            } else {
              _this.cancelar();
            }
          }
        });
      }



  }, 
  mounted: function () {
    if (this.idSeleccionado!=undefined) {
        this.cargarItem(this.idSeleccionado);
    } else {
      this.editable = false;
    }
  }
}