<template>
  <div id="app">
    <nav>
      <!-- <a href="#">home</a>
      <a href="#">gallery</a>
      <a href="#">story</a>
      <a href="#">terms</a>
      <a href="#">contact</a> -->
      <button class="menuBtn" v-on:click="show=!show" type="button" name="button">menu</button>
      <div class="wrapper" v-if="show">
        <router-link class='links' to="/">home</router-link>
        <router-link class='links' to="/gallery">gallery</router-link>
        <router-link class='links' to="/story">story</router-link>
        <router-link class='links' to="/terms">terms</router-link>
        <router-link class='links' to="/contact">contact</router-link>
      </div>

    </nav>
    <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: false

    }
  }
}
</script>

<style lang="scss">
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

body {
  margin: 0;
}
nav {
  position: absolute;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;


}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 400px;
  padding: 10px;
}

.links {
  color: rgb(158, 156, 156);
  text-decoration: none;
  font-size: 1.5em;
  transition: all 200ms;
  border: solid 1px white;
  &:hover {
    color: rgb(194, 140, 135);
    margin-left: 7px;
    transform: scale(1.1);
  }
}



router-link {
  color: black;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.menuBtn {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
