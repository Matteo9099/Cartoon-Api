<template>
    <div class="col-3 mb-5">
        <div class="text-center">
            <h2>{{ personaggio.name }}</h2>
            <img :src="personaggio.imageUrl">
        </div>
        <div class="d-flex flex-column flex-start ps-5">
            <div><span class="category_span">Role</span>: {{ personaggio.role }}</div>
            <div><span class="category_span">Species</span>: {{ personaggio.specie }}</div>
            <div><span class="category_span">Status</span>: {{ personaggio.status }}</div>
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

<style lang="scss">

</style>