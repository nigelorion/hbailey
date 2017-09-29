<template>
  <div id="app">
    <nav>
      <!-- <a href="#">home</a>
      <a href="#">gallery</a>
      <a href="#">story</a>
      <a href="#">terms</a>
      <a href="#">contact</a> -->
      <router-link to="/">home</router-link>
      <router-link to="/gallery">gallery</router-link>
      <router-link to="/story">story</router-link>
      <router-link to="/terms">terms</router-link>
      <router-link to="/contact">contact</router-link>

    </nav>
    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
}

nav {
  position: absolute;
  top: 3%;
  width: 100%;
  display: flex;
  justify-content: space-around;


}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
