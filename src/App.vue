<template>
  <div id="app">
    <nav>
      <a href="#">home</a>
      <a href="#">gallery</a>
      <a href="#">story</a>
      <a href="#">terms</a>
      <a href="#">contact</a>
    </nav>
    <router-view></router-view>
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
  top: 10px;
  left: 10px;
  
}
</style>
