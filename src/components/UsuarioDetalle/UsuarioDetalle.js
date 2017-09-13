export default {
    name: 'UsuarioDetalle',
    data() {
      return {
        filtrada: {},
        valido: {a: true, b: true, c: true, d: true, e: true, f: true, g: true},
        editable: true
      }
    },
    watch: {
        '$route': 'cargarItem'
    },
    methods: {
      editar: function () {
        this.editable = !this.editable;
      },
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
        if (!/^[0-9A-Z][0-9]{7}[A-Z]$/.test(this.filtrada.DNI)) {
          this.valido.c = false;
          isValido = false;
        };
        if (!/^[_A-Za-z0-9]+[@][A-Za-z0-9]+[.][A-Za-z]{2,}$/.test(this.filtrada.Email)) {
          this.valido.d = false;
          isValido = false;
        };
        if (!(this.filtrada.Nick != null && this.filtrada.Nick.length > 0 && this.filtrada.Nick.length <= 30)) {
          this.valido.e = false;
          isValido = false;
        };
        
        if (!(this.filtrada.Contrasena != null && this.filtrada.Contrasena.length > 0 && this.filtrada.Contrasena.length <= 10)) {
          this.valido.f = false;
          isValido = false;
        };
        if (!/^[A-Z]{2}[0-9]{22}$/.test(this.filtrada.Cuenta)) {
          this.valido.g = false;
          isValido = false;
        };        
        return isValido;
      },
      mensaje: function () {
        bootbox.alert({
          message: "Campos no válidos",
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
                _this.cancelar();
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
      cancelar: function () {
        this.tipoFiltrada = {};        
        this.$router.push('/UsuarioMaestro');
      },
      cargarItem: function () {
        let _this = this;
        let id1 = this.$route.params.id;
        if (this.$route.params.id) {
          $.ajax({
              url: 'http://localhost:53721/api/Usuarios/'+id1,
              type: 'GET',     
              success: function(response) {
              _this.filtrada = JSON.parse(JSON.stringify(response));
              },
              error: function(xhr, textStatus, errorThrown){
                  alert("Error carga: " + errorThrown + " --> " + xhr.responseText);
                  debugger;
              }
          });
        } else {
          this.editable = false;//Si no tiene Id
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
          message: "¿Esta seguro de querer eliminar el usuario?",
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
                    url: 'http://localhost:53721/api/Usuarios/'+id1,
                    success: function () {
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
    created: function () {
      this.cargarItem()
    }
  }