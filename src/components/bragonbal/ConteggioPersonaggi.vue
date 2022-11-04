<template>
    <p><span class="fw-bold">{{conteggio}}</span> personaggi trovati</p>
</template>

<script>
export default {
    name: 'ConteggioPersonaggi',
    props: {
        'conteggio': Number
    },
}
</script>

<style>

</style>