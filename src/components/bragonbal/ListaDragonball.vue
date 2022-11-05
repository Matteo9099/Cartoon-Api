<template>
    <section class="bg_cover">
        <div class="banner mb-5">
            <h1 class="title">DragonBall Super</h1>
            <input type="text" v-model="search" placeholder="Cerca un personaggio..." />
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
            <div class="vh-50" v-else>Nessu risultato trovato</div>
            <div class="d-flex justify-content-center gap-3" v-if="loadingInProgress">
                <h2 class="text-center"> Caricamento in corso</h2>
                <div class="spinner-border" role="status"></div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import CardPersonaggio from './CardPersonaggio.vue';
import ConteggioPersonaggi from './ConteggioPersonaggi.vue';

export default {
    name: 'ListaDragonball',
    data(){
        return{
            search: '',
            listaDragonball: [],
            loadingInProgress: false,
            endpoint: 'https://dragon-ball-super-api.herokuapp.com/api/characters',
        }
    },
    components: {
        CardPersonaggio,
        ConteggioPersonaggi
    },
    methods: {
        getPersonaggi(){
            this.loadingInProgress = true;
            axios.get(this.endpoint)
                .then((response) => {
                    this.listaDragonball = response.data;
                    this.loadingInProgress = false;
                })
        },
    },
    mounted(){
        this.getPersonaggi();
    },
    computed: {
        filteredItems() {
            return this.listaDragonball.filter((item) => {
            // this.loadingInProgress = true;
                return item.name.toLowerCase().includes(this.search.toLowerCase());
            });
        },
    }
}

</script>

<style >
</style>