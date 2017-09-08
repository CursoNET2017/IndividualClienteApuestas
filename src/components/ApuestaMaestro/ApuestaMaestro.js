import $ from 'jquery'
export default {
  name: 'ApuestaMaestro',
  data () {
    return {
      items: [],
      item: {}
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
    }
  },
  created: function () {
    this.getTodos()
  }
}