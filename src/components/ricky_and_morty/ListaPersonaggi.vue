<template>
    <section>
        <div class="banner mb-5">
            <h1 class="title">Ricky And Morty</h1>
            <input class="" type="text" v-model="search" placeholder="Cerca un personaggio..."/>
        </div>
        <div class="container">
            <ConteggioPersonaggi 
                :conteggio="filteredItems.length"
            />
            <div class="row" v-if="filteredItems.length">
                <CardPersonaggio 
                    v-for="(personaggio, index) in filteredItems" 
                    :key="index"
                    :personaggio="personaggio"
                />
            </div>
            <div v-else>Nessun personaggio trovato</div>
        </div>
    </section>
</template>

<script>
// Integrazione axios
import axios from 'axios';
import CardPersonaggio from './CardPersonaggio.vue';
import ConteggioPersonaggi from './ConteggioPersonaggi.vue';

export default {
    name: 'ListaPersonaggi',
    data(){
        return{
            search: '',
            listaPersonaggi: [],
            loadingInProgress: true,
            endpoint: 'https://rickandmortyapi.com/api/character'
        }
    },
    components: {
        CardPersonaggio,
        ConteggioPersonaggi,
    },
    methods: {
        getPersonaggi(){
            axios.get(this.endpoint)
            .then((response) => {
                this.listaPersonaggi = response.data.results;
                this.loadingInProgress = false;
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
        }
    },
    mounted(){
        this.getPersonaggi();
    },
    computed: {
        filteredItems() {
            return this.listaPersonaggi.filter((item) => {
                return item.name.toLowerCase().includes(this.search.toLowerCase());
            });
        },
    }
}
</script>

<style>


</style>