<template>

  <div id="app">

    <nav class="navBar" v-if="show">
      <router-link class='links' to="/">Home</router-link>
      <a class='links' href="https://hbaileyonline.square.site/">Shop</a>
      <router-link class='links' to="/gallery">Gallery</router-link>
      <router-link class='links' to="/press">Press</router-link>
      <!-- <router-link class='links' to="/polices">Policies</router-link> -->
      <!-- <router-link class='links' to="/contact">Contact</router-link> -->
    
    </nav>

    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>

    <footer>
      <p>H.Bailey 2020 &#169;</p>
      <a target="_blank" href="https://www.facebook.com/hbailey.menswear/"><img class="socialLinks" src="./assets/facebook.png" alt="H.Bailey Facebook link"></a>
      <a target="_blank" href="https://www.instagram.com/hbaileyboutique/"><img  class="socialLinks" src="./assets/insta.png" alt="h.Bailey Instagram link"></a>
    </footer>

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

body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

#app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: solid 1px rgb(191, 167, 112);
  font-size: 1.2em;
  
}

.socialLinks {
  height: 25px;
  filter: opacity(.8);
  transition: all 200ms;
  margin: 10px;
  @media (max-width: 768px) {
    height: 25px;
    margin: 10px;
  }
  &:hover {
    filter: opacity(.5);
    transform: scale(1.1);
  }
}

.navBar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #282f36;
  align-items: center;
}

.links {
  color: rgb(201, 201, 201);
  text-decoration: none;
  font-size: 1.5em;
  transition: all 400ms;
  font-weight: normal;
  position: relative;
  margin: 8%;
  &:hover {
    color: rgb(191, 167, 112);
  }
  @media (max-width: 768px) {
    font-size: 1.1em;
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
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity 0.3s
}

.fade2-enter, .fade2-leave-active {
  opacity: 0
}

</style>
