<template>
    <div class="col-3 text-center mb-4">
        <img :src="personaggio.image">
        <h2>{{ personaggio.name }}</h2>
        <div>{{ personaggio.origin.name }}</div>
        <div>{{ personaggio.gender }}</div>
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