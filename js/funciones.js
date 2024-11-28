const app = Vue.createApp({
    mounted() {
        // Llamada a la API al montar la instancia
   },

   created(){
       this.cargarMuebles();
   },

    data() {
        return {
            muebles: [], 
            carrito: [], // Carrito para almacenar muebles añadidos
            
        };
    },
   
    methods: {
        cargarMuebles() {
            axios
                .get("https://www.course-api.com/react-store-products")
                .then(response => {
                    this.muebles = response.data.slice(0, 8); // Obtener solo 6 muebles
                    let i=5;
                for(mueble of this.muebles){
                    mueble.cantidad = i;
                    this.muebles.mueble;
                    i=Math.floor(Math.random()*(50-5)+5);
                }
                })
                .catch(error => {
                    console.error("Error al cargar los muebles:", error);
                });
                
        },
        verMas(mueble) {
            alert(`Detalle de ${mueble.name}:\n\nDescripción: ${mueble.description}\nPrecio: $${mueble.price}`);
        },
        añadirAlCarrito(mueble) {
            this.carrito.push(mueble);
            alert(`${mueble.name} añadido al carrito. Total en carrito: ${this.carrito.length}`);
        }
    },
    filters: {
        currency(value) {
            return `$${parseFloat(value).toFixed(2)}`;
        }
    }
});


app.mount("#contenedor");
