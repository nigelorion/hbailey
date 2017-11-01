<template>

  <div id="app">
    <div class="socialContainer">
      <a target="_blank" href="https://www.facebook.com/hilary.b.burnett"><img class="socialLinks" src="./assets/facebook.png" alt=""></a>
      <a target="_blank" href="https://www.instagram.com/hilarybaileyburnett/"><img  class="socialLinks" src="./assets/insta.png" alt=""></a>

    </div>

    <nav>
      <transition name="fade2">
        <div class="wrapper" v-if="show">
          <router-link class='links' to="/">Home</router-link>
          <router-link class='links' to="/gallery">Gallery</router-link>
          <router-link class='links' to="/polices">Polices</router-link>
          <!-- <router-link class='links' to="/terms">terms</router-link> -->
          <router-link class='links' to="/contact">Contact</router-link>
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
    <div class="socLinks">

    </div>


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
  position: relative;
}

.socialContainer {
  position: absolute;
  bottom: 20px;

  z-index: 100;
  // background: rgba(194, 181, 112, 0.7);
  border: solid 1px rgba(194, 181, 112, 0.7);
  width: 100%;
  text-align: center;
}

.socialLinks {
  height: 25px;
  filter: opacity(.6);
  transition: all 200ms;
  margin: 5px;
  @media (max-width: 768px) {
    height: 30px;
    margin: 10px;
  }
  &:hover {
    filter: opacity(.8);
    transform: scale(1.1);
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
    font-size: 1.2em;
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
