<template>
  <div id="app">
    <nav class="py-3 bg-dark">
      <router-link class="me-4" to="/ricky-and-morty">Ricky And Morty</router-link>
      <router-link to="/dragonball-super">Dragonball Super</router-link>
      <hr/>
    </nav>
      <router-view/> 
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import './style/general.scss';
@import './style/dragonball.scss';
@import './style/navbar.scss';
@import './style/rickyMorty.scss';


</style>
