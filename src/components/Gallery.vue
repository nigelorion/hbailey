

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
        <button v-on:click="currentImage++"type="button" name="button" class="btnRight">&#9002;</button>

        <div class="thumbnails">
          <img v-for="(image, index) in images" v-on:click="thumbClick(index)" :id="index" class="thumb" :src="images[index]" alt="">
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
  name: 'main',
  data () {
    return {
      imageDetails: ['Hilary Bailey Burnett, a Seattle native, relishes the opportunity to build a destination boutique in the heart of Pioneer Square. Her work as a personal wardrobe stylist for over 15 years informs her approach to the shop. She believes  in the everyday art of getting dressed.', '"You can find inspiration in everything. If you can\'t, then you\'re not looking properly."<br><b>-Paul Smith</b>', '“Buy less, choose well.” <br><b>-Vivienne Westwood</b>', '“Fashion is the armor to survive the reality of everyday life.” <br><b>-Bill Cunningham</b>', '"Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. Have the courage to follow your heart and intuition. <br><b>-Paul Smith</b>"'],
      images: ['./static/imgs/windowInside.jpg', './static/imgs/jackets3.jpg', './static/imgs/misc.jpg', './static/imgs/timAlley.jpg', './static/imgs/drawing.jpg'],
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

.gallery {
  display: flex;
  align-items: center;
  margin: 10%;


  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 800px;
    padding-top: 10%;
  }
}

.galleryRight {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  // width: 500px;
  // height: 500px;
  // padding: 5px;
  @media (max-width: 800px) {
    width: auto;
    max-height: 200px;
    align-items: flex-start;
  }
}

.galleryText {
  font-size: 1.2em;
  margin: 10%;
  width: 400px

}

img {
  object-fit: contain;
  width: 500px;
  height: 500px;
  @media (max-width: 800px) {
    height: 320px;
    width: 320px;
  }
}

.galleryLeft {
  position: relative;
}

.btnLeft, .btnRight {
  position: absolute;
  outline: none;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.53);
  font-size: 2em;
  height: 500px;
  transition: all 300ms ease-in-out;;
  &:hover {
    background-color: rgba(201, 201, 201, 0.47);
    color: rgba(37, 37, 37, 0.82);
  }
  @media (max-width: 800px) {
    height: 320px;
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
}

</style>
