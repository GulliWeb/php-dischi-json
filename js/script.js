const { createApp } = Vue

createApp({
    data() {
        return {
            dischi: [],
            currentDisk: null,
        }
    },
    methods: {
        // Metodo per effettuare una chiamata AXIOS e stampare i dischi in pagina
        getDisc() {
            axios.get('http://localhost:8888/php-dischi-json/dischi.json')
                .then((response) => {
                    this.dischi = response.data
                    console.log(this.dischi);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        getCurrentInfo(index) {
            if (this.currentDisk && this.currentDisk.title === this.dischi[index].title) {
                // Se la card cliccata è già aperta nascondo l'overlay
                this.hideOverlay();
            } else {
                // Se non è cliccata mostro l'overlay per il disco selezionato
                this.currentDisk = this.dischi[index];
            }
        },
        hideOverlay() {
            this.currentDisk = null; 
        }
    },
    created() {
        this.getDisc(); // Alla creazione della pagina chiamo immediatamente la mia funzione che effettua la chiamata API e popola l'array.
    }
}).mount('#app')