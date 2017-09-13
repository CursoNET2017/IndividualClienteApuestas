import $ from 'jquery'
export default {
  name: 'UsuarioMaestro',
  data () {
    return {
      items: [],
      item: {},
      visibleCuerpo: true,
      idSeleccionado: undefined
    }
  },
  methods: {
    getTodos () {
      let _this = this
      $.ajax({
        type: 'GET',
        url: 'http://localhost:53721/api/Usuarios',
        success: function (response) {
          _this.items = JSON.parse(JSON.stringify(response))
        },
        error: function(){          
          debugger
        }
      })
    },
    sacarDetalle: function (refer) {
        this.$router.push({name: 'UsuarioDetalleId', params: { id: refer }});
    },
    nuevoItem: function () {
      this.idSeleccionado = undefined;
      this.$router.push('/UsuarioDetalle');      
    },
    cerrarDetalle: function () {
      this.idSeleccionado = '';
      this.visibleCuerpo = true;
    }
  },
  created: function () {
    this.getTodos()
  }
}