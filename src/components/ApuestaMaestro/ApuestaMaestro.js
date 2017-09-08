import $ from 'jquery'
export default {
  name: 'ApuestaMaestro',
  data () {
    return {
      items: [],
      item: {},
      tipos: {baloncesto:"Baloncesto", tenis:"Tenis", futbol:"Futbol"},
      seleccion: ''
    }
  },
  methods: {
    getTodos () {
      let _this = this
      $.ajax({
        type: 'GET',
        url: 'http://localhost:53721/api/Apuestas',   
        success: function (response) {
          _this.items = JSON.parse(JSON.stringify(response))
        },
        error: function(){          
          //alert('Problemas al cargar el listado')
          debugger
        }
      })
    },
    filtrar(tipo) {
      switch(tipo) {
        case 0:
            this.seleccion = this.tipos
            break;
        case 1:
            this.seleccion = JSON.parse(JSON.stringify(this.tipos.futbol))
            break;
        case 2:
            this.seleccion = JSON.parse(JSON.stringify(this.tipos.baloncesto))
            break;
        case 3:
            this.seleccion = JSON.parse(JSON.stringify(this.tipos.tenis))
            break;
        default:
            this.seleccion = this.tipos
      }
    }
  },
  created: function () {
    this.getTodos()
    this.seleccion = this.tipos
  }
}