<template>
  <div id="app">
    <nav class="py-3 bg-dark">
      <router-link to="/">Home</router-link>
      <router-link class="mx-4" to="/ricky-and-morty">Ricky And Morty</router-link>
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
@import './style/home.scss';

nav{
  height: 8vh;
}

</style>
