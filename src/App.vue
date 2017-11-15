<template>

  <div id="app">

    <nav>
      <transition name="fade2">
        <div class="wrapper" v-if="show">
          <router-link class='links' to="/">Home</router-link>
          <router-link class='links' to="/gallery">Gallery</router-link>
          <router-link class='links' to="/polices">Policies</router-link>
          <router-link class='links' to="/contact">Contact</router-link>
        </div>
      </transition>
    </nav>

    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>

    <footer>
      <p>H.Bailey 2017 &#169;</p>
      <a target="_blank" href="https://www.facebook.com/hbailey.menswear/"><img class="socialLinks" src="./assets/facebook.png" alt=""></a>
      <a target="_blank" href="https://www.instagram.com/hilarybaileyburnett/"><img  class="socialLinks" src="./assets/insta.png" alt=""></a>
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
}

.socialLinks {
  height: 25px;
  filter: opacity(.6);
  transition: all 200ms;
  margin: 10px;
  @media (max-width: 768px) {
    height: 30px;
    margin: 10px;
  }
  &:hover {
    filter: opacity(.8);
    transform: scale(1.1);
  }
}

nav {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 120;
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
  background-color: white;
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
