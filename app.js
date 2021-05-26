const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Tareas con Vue',
    tareas: [],
    nuevaTarea: ''
  },
  methods: {
    agregarTarea(){
      if (this.nuevaTarea !== ''){
	this.tareas.push({
	  nombre: this.nuevaTarea,
	  estado: false
	})
	this.nuevaTarea = ''
	localStorage.setItem('tareas', JSON.stringify(this.tareas))
      }
    },
    cambiarEstado(index){
      this.tareas[index].estado = !this.tareas[index].estado
      localStorage.setItem('tareas', JSON.stringify(this.tareas))
    },
    eliminarTarea(index){
      this.tareas.splice(index, 1)
      localStorage.setItem('tareas', JSON.stringify(this.tareas))
    }
  },
  created: function(){
    let datosDB = JSON.parse(localStorage.getItem('tareas'))
    if(datosDB === null){
      this.tareas = []
    } else{
      this.tareas = datosDB
    }
  }
})
