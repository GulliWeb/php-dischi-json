const { createApp } = Vue

// Creo la mia applicazione integrata con vue
createApp({
    data(){
        return{
            dischi: [],

        }
    },
    methods:{
        // Metodo per effettuare una chiamata AXIOS e stampare i dischi in pagina
        getDisc(){
            axios.get('http://localhost:8888/php-dischi-json/dischi.json') // Indirizzo server locale del mio file.json
            .then((response) => {
              this.dischi = response.data // Assegno il campo.data della risposta al mio array dischi
              console.log(this.dischi);
            })
            .catch(function (error) {
              console.log(error);
            })
        }
    },
    created(){
        this.getDisc() // Alla creazione della pagina chiamo immediatamente la mia funzione che effettua la chiamata API e popola l'array.
    }
}).mount('#app')