<template>

  <div id="app">
    <nav>
      <transition name="fade2">
        <div class="wrapper" v-if="show">
          <router-link class='links' to="/">home</router-link>
          <router-link class='links' to="/gallery">gallery</router-link>
          <router-link class='links' to="/story">story</router-link>
          <router-link class='links' to="/terms">terms</router-link>
          <router-link class='links' to="/contact">contact</router-link>
        </div>
      </transition>
      <!-- <transition name="fade" mode="out-in" appear>
        <button v-if="!show" class="menuBtn" v-on:click="show=!show" type="button" name="button">&#9776;</button>
        <button v-if="show" v-on:click="show=!show" class="menuBtn close" type="button" name="button">&#x2715;</button>
      </transition> -->
    </nav>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      show: true
    }
  }
}

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Crimson+Text');

#app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  @media (max-width: 768px) {
    padding-top: 5%;
  }
}

body {
  margin: 0;
}

nav {
  position: absolute;
  top: 0px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  // left: 0px;
  // display: flex;
  // justify-content: space-around;
  // flex-direction: column;
  // height: 100vh;
  // background-color: white;
  // z-index: 99;
  // width: 100px;
  // padding: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
  }
}

.wrapper {

  display: flex;
  justify-content: space-around;
  width: 60%;
  height: 40px;
  // flex-direction: column;
  // justify-content: space-around;
  // height: 400px;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    height: 50px;
    justify-content: center;
    margin-top: 10px;
  }
}

.links {
  color: rgb(158, 156, 156);
  text-decoration: none;
  font-size: 1.5em;
  transition: all 400ms;
  font-weight: normal;
  position: relative;
  &:hover {
    color: rgb(191, 167, 112);
    margin-top: 8px;
  }
  @media (max-width: 768px) {
    font-size: 1.1em;
    margin: 2%;
    &:hover {
      margin-top: 3%;
      margin-left: 0%;
    }
  }
}

.links:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background: #b39c4e;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: .18s linear;
}

.links:hover:before,
.links:focus:before {
  visibility: visible;
  transform: scaleX(1);
}

.menuBtn {
  position: absolute;
  top: 10px;
  left: 20px;
  border: none;
  background: none;
  font-size: 2em;
  transition: all 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  filter: opacity(.3);
  &:focus {
    outline: 0;
  }
  &:hover {
    filter: opacity(.7);
  }

}

// .main {
//   padding-top: 100px;
//   @media (max-width: 768px) {
//     padding-top: 220px;
//   }
// }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity 0.6s
}

.fade2-enter, .fade2-leave-active {
  opacity: 0
}

</style>
