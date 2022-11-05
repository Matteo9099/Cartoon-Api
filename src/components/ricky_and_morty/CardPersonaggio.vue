<template>
    <div class="col-3 mb-4">
        <div class="text-center">
            <img :src="personaggio.image">
            <h3>{{ personaggio.name }}</h3>
        </div>
        <div class="d-flex flex-column flex-start ps-4">
            <div><span class="category_span">Species</span>: {{ personaggio.species }}</div>
            <div><span class="category_span">Gender</span>: {{ personaggio.gender }}</div>
            <div><span class="category_span">Status</span>: {{ personaggio.status }}</div>
            <div><span class="category_span">Origin</span>: {{ personaggio.origin.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardPersonaggio',
    props: {
        'personaggio': Object
    }
}
</script>

<style>

</style>