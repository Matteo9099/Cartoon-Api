<template>
  <section class="home">
    <div class="d-flex flex-column">
        <h1 class="text-white">Select Your Cartoon and discover all the characters</h1>
        <div class="d-flex justify-content-around mt-5">
          <router-link to="/ricky-and-morty">
              <button class="btn-orange">Ricky And Morty</button>
          </router-link>
          <router-link to="/dragonball-super">
              <button class="btn-orange">DragonBall Super</button>
          </router-link>
        </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'HomeView',

}
</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../assets/hero_cover_cartoon.jpg");
}
</style>