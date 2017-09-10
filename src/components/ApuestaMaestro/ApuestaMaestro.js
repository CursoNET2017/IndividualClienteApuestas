import $ from 'jquery'
import detalle from '../ApuestaDetalle/'
export default {
  name: 'ApuestaMaestro',
  data () {
    return {
      items: [],
      item: {},
      tipos: {baloncesto:"Baloncesto", tenis:"Tenis", futbol:"Futbol"},
      seleccion: '',
      visibleCuerpo: true,
      idSeleccionado: undefined
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
      var menues = $(".menu-content li");
      //var menues2 = $(".menu-content ul");
      //menues.addClass("collapsed");
      //var menues = $(".menu-content li");
      menues.removeClass('active');//Eliminamos los actives
      //menues.attr("aria-expanded","false");
      //menues2.attr("aria-expanded","false");
      menues.click(function() {
        // activamos el elemento clicado.
        $(this).addClass("active");
        //$(this).attr("aria-expanded","true");
     });
      switch(tipo) {
        case 0:
            this.seleccion = this.tipos
            this.visibleCuerpo = true;
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
    },
    sacarDetalle: function (refer) {
      if (this.idSeleccionado == undefined) {//Si no arreglo lo de volver a llamarlo. MIRAR WATCHERS
        var menues2 = $(".menu-content ul li");
        menues2.removeClass('active');//Eliminamos los actives
        //console.log(refer)
        this.idSeleccionado = refer;
        this.visibleCuerpo = false;
      } else {
        this.idSeleccionado = undefined
        this.visibleCuerpo = true;
      }
      
    },
    nuevoItem: function () {
      this.idSeleccionado = undefined;
      this.visibleCuerpo = false;
    },
    cerrarDetalle: function () {
      this.idSeleccionado = '';
      this.visibleCuerpo = true;
    }
  },
  created: function () {
    this.getTodos()
    this.seleccion = this.tipos
  },
  components: {
    detalle
  }
}