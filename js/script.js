const { createApp } = Vue

createApp({
    data(){
        return{
            dischi: [],

        }
    },
    methods:{
        // Metodo per effettuare una chiamata AXIOS e stampare i dischi in pagina
        getDisc(){
            axios.get('http://localhost:8888/php-dischi-json/dischi.json')
            .then((response) => {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            })
        }
    },
    created(){
        this.getDisc()
    }
}).mount('#app')