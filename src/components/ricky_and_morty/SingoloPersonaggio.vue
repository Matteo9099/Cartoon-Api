<template>
    <div class="card" style="width: 18rem;">
        <img :src="personaggio.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{personaggio.name}}</h5>
            <p class="card-text">{{personaggio.origin.name}}</p>
            <p class="card-text">{{personaggio.species}} {{personaggio.gender}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingoloPersonaggio'
}
</script>

<style>

</style>