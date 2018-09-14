<template>
  <div class="main">
    <div class="container">
      <div class="contactContainer">
        <h1>H.Bailey</h1>
        <p>108 Cherry Street, Suite 1 <br>
          Seattle, WA 98104</p>
          <p class="phoneNum">206-351-1595</p>
          <button class="textMe"><a href="sms:1-206-351-1595">Text me</a>
    </button>
        <p>Monday - Saturday 12-7</p>

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

.textMe {
  display: none;
  height: 50px;
  width: 100px;
  background-color: rgb(191, 167, 112);
  margin: 3px auto;
  border: none;

  &:hover {
    background-color: rgb(193, 193, 193);
  }
  & a {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
}

.phoneNum {
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
}

h1 {
  font-weight: normal;
  margin: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;

}

.socialContainer {
  margin-top: 10px;
}

.contactContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  font-size: 1.5em;
}

.map {
  height: 100%;
  width: 100%;
}

.mapContainer {
  margin-bottom: 25px;
  width: 100%;
  height: 400px;
  padding: 5px;
}

</style>
