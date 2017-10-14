<template>
  <div class="main">
    <div class="mapContainer">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.1983975898875!2d-122.33630418400797!3d47.602831796230944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab00ce85a13%3A0x42b2cea88c1da9dd!2sGood+Arts+Building!5e0!3m2!1sen!2sus!4v1506739634885" width="300" height="440" frameborder="0" style="border:0" allowfullscreen class="map"></iframe>
    </div>
    <p>{{ email }}</p>
    <p>(123) 345 - 7891</p>


  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      email: 'testing@gmail.com'
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  text-align: center;
}



</style>
