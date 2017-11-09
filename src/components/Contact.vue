<template>
  <div class="main">
    <div class="container">

      <div class="contactContainer">
        <p>hours</p>
        <p>1234466654</p>

      </div>
      <div class="mapContainer contain">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.1983975898875!2d-122.33630418400797!3d47.602831796230944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab00ce85a13%3A0x42b2cea88c1da9dd!2sGood+Arts+Building!5e0!3m2!1sen!2sus!4v1506739634885" frameborder="0" style="border:0" allowfullscreen class="map"></iframe>
      </div>

    </div>

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container {
  height: 50%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.socialLinks {
  height: 20px;
  filter: opacity(.4);
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

.contain {
  width: 350px;
  height: 400px;
}

.socialContainer {
  margin-top: 10px;
}

.contactContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.map {
  height: 100%;
}

.mapContainer {
  margin: 20px;
}

</style>
