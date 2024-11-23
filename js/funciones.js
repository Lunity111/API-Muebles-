const app = Vue.createApp({
    data() {
        return {
            muebles: [], 
            carrito: [], // Carrito para almacenar muebles añadidos
        };
    },
    mounted() {
        this.cargarMuebles(); // Llamada a la API al montar la instancia
    },
    methods: {
        cargarMuebles() {
            axios
                .get("https://www.course-api.com/react-store-products")
                .then(response => {
                    this.muebles = response.data.slice(0, 6); // Obtener solo 6 muebles
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
