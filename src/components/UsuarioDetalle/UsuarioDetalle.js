export default {
    name: 'UsuarioDetalle',
    data() {
      return {
        filtrada: {},
        valido: {a: true, b: true, c: true, d: true, e: true, f: true, g: true}
      }
    },
    watch: {
        '$route': 'cargarItem'
    },
    methods: {
        validar: function () {
          this.valido = {a: true, b: true, c: true, d: true, e: true, f: true, g: true};
          let isValido = true;
          
          if (!(this.filtrada.Nombre != null && this.filtrada.Nombre.length > 0 && this.filtrada.Nombre.length <= 30)) {
            this.valido.a = false;
            isValido = false;
          };
          if (!(this.filtrada.Apellidos != null && this.filtrada.Apellidos.length > 0 && this.filtrada.Apellidos.length <= 50)) {
            this.valido.b = false;
            isValido = false;
          };
          if (!/^[0-9]{8}[A-Z]$/.test(this.filtrada.DNI)) {
            this.valido.c = false;
            isValido = false;
          };/*
          if (!/^[A-Za-z0-9]+[@][a-z]+[.][a-z]$/.test(this.filtrada.Email)) {
            this.valido.d = false;
            isValido = false;
          };*/
          if (!(this.filtrada.Nick != null && this.filtrada.Nick.length > 0 && this.filtrada.Nick.length <= 30)) {
            this.valido.e = false;
            isValido = false;
          };
          /*
          if (contraseñaslajdñasodñaso) {
            this.valido.f = false;
            isValido = false;
          };*/
          /*
          if () {
            this.valido.h = false;
            isValido = false;
          };*/
          //console.log('Sale: '+isValido)
          
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
              url: 'http://localhost:53721/api/Usuarios',
              data: _this.filtrada,
              success: function (response) {
                  //alert('Creado evento '+_this.filtrada.Evento1+' VS '+_this.filtrada.Evento2);
                  _this.cancelar();
                  //_this.actulizarPadre();//Actualizar listado maestro
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
        cancelar: function () {
          this.validar();
          //this.tipoFiltrada = {};        
          //this.$router.push('/UsuarioMaestro');
        },
        /*actulizarPadre: function () {
          this.$emit('recarga');//ACTUALIZAR LISTADO PADRE
        },*/
        cargarItem: function () {
          let _this = this;
          let id1 = this.$route.params.id;
          if (this.$route.params.id) {
            $.ajax({
                url: 'http://localhost:53721/api/Usuarios/'+id1,
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
          }          
        },
        actualizar: function () {
          let id1 = this.filtrada.Id;
          let _this = this;
          if (this.validar()) {
            bootbox.confirm({
              message: "¿Esta seguro de querer modificar el usuario?",
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
                    url : 'http://localhost:53721/api/Usuarios/'+id1,
                    type : 'PUT',     
                    dataType : 'json',
                    data: _this.filtrada,
                    success : function(response) {                
                        //_this.actulizarPadre();//Actualizar listado maestro
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
          if (this.validar()) {
            bootbox.confirm({
              message: "¿Esta seguro de querer modificar el usuario?",
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
                        type: 'DELETE',
                        url: 'http://localhost:53721/api/Usuarios/'+id1,
                        success: function () {
                            //_this.actulizarPadre();//Actualizar listado maestro
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
        }
    },
    created: function () {
      this.cargarItem()
    }
  }