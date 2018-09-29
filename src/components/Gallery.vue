

<template>
  <div class="main">
    <div class="gallery">
      <div class="galleryLeft">
        <v-touch v-on:swipeleft="currentImage--" v-on:swiperight="currentImage++">
          <transition name="fade2" mode="out-in">
            <img class="imgGallery" :key='currentImage' :src="images[Math.abs(currentImage) % images.length]" alt="Image Gallery">
          </transition>
        </v-touch>
        <button v-on:click="currentImage--" type="button" name="button" class="btnLeft">&#9001;</button>
        <button v-on:click="currentImage++" type="button" name="button" class="btnRight">&#9002;</button>
        <div class="thumbnails">
          <img v-for="(image, index) in images" v-on:click="thumbClick(index)" :id="index" class="thumb" :src="images[index]" :key="image.id" alt="">
        </div>
      </div>
      <div class="galleryRight">
        <transition name="fade2" mode="out-in">
          <p :key='currentImage' v-html="imageDetails[Math.abs(currentImage) % imageDetails.length]" class="galleryText">{{imageDetails[Math.abs(currentImage) % imageDetails.length]}}</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      imageDetails: ['Hilary Bailey Burnett, a Seattle native, relishes the opportunity to build a destination boutique in the heart of Pioneer Square. Her work as a personal wardrobe stylist for over 15 years informs her approach to the shop. She believes  in the everyday art of getting dressed.', '"You can find inspiration in everything. If you can\'t, then you\'re not looking properly."<br><b>-Paul Smith</b>', '“Buy less, choose well.” <br><b>-Vivienne Westwood</b>', '“Fashion is the armor to survive the reality of everyday life.” <br><b>-Bill Cunningham</b>', '"Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. Have the courage to follow your heart and intuition." <br><b>-Paul Smith</b>', '"I think perfection is ugly. Somewhere in the things humans make, I want to see scars, failure, disorder, distortion."  <br><b>-Yohji Yamamoto</b>', '"If you feel safe in the area you’re working in, you’re not working in the right area. Always go a little further into the water than you feel you’re capable of being in. Go a little bit out of your depth. And when you don’t feel that your feet are quite touching the bottom, you’re just about in the right place to do something exciting."<br><b>-David Bowie</b>', '', ''],
      images: ['./static/imgs/hilary1.jpg', './static/imgs/person3.jpg', './static/imgs/person1.jpg', './static/imgs/store1.jpg', './static/imgs/couple.jpg', './static/imgs/dudes.jpg', './static/imgs/person2.jpg', './static/imgs/happycustomer.jpg', './static/imgs/person5.jpg'],
      currentImage: 0
    }
  },
  methods: {
    thumbClick: function (val) {
      let imageIndex = val
      this.currentImage = imageIndex
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  height: 100%;
  display: flex;
}

.gallery {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}

.galleryRight {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100%;
}

.galleryText {
  font-size: 1.2em;
  width: 400px;
  padding: 10px;

}

.imgGallery {
  object-fit: cover;
  height: 700px;
  width: 700px;
  max-width: 100%;
  @media(max-width: 800px) {
    height: 600px;
  }
}

.galleryLeft {
  // max-width: 700px;
  // height: 600px;
  position: relative;
}

.btnLeft, .btnRight {
  position: absolute;
  outline: none;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 3em;
  height: 100%;
  transition: all 300ms ease-in-out;;
  &:hover {
    color: rgba(37, 37, 37, 0.82);
    transform: scale(1.1)
  }
}

.btnLeft {
  left: 0;
  top: 0;
}

.btnRight {
  right: 0;
  top: 0;
}

.thumbnails {
  display: flex;
  justify-content: center;
}

.thumb {
  height: 50px;
  width: 50px;
  margin: 1px;
  filter: grayscale(80%);
  &:hover {
    filter: grayscale(0%);
  }
  @media (max-width: 900px) {
    width: 37px;
    height: 37px;
  }
}

</style>
