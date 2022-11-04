<template>
    <div class="col-3 mb-5">
        <div class="text-center">
            <h2>{{ personaggio.name }}</h2>
            <img :src="personaggio.imageUrl">
        </div>
        <div class="d-flex flex-column flex-start ps-5">
            <div>Role - {{ personaggio.role }}</div>
            <div>Specie - {{ personaggio.specie }}</div>
            <div>Status - {{ personaggio.status }}</div>
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

<style lang="scss" scoped>

</style>