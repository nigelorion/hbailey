<template>

  <div class="main">

    <div class="mainCont">

      <div class="left">
        <h1>{{ title }}</h1>
        <h3>{{ header }}</h3>
        <p class="subP">{{ subHeader }}</p>
      </div>

      <div class="right">
        <transition name="fade2" mode="out-in">
          <img v-on:click="lightBoxOpen()" class="imgGallery" :key='faderImage' :src="images[Math.abs(faderImage) % images.length]" alt="Image Fade Gallery">
        </transition>
      </div>

      <div v-if="lightBoxActive" class="lightBox">
        <div class="closeDiv" v-on:click="lightBoxClose()">
          <div v-on:click="lightBoxClose()" class="closeBtn"><p>&times;</p></div>

        </div>
        <div class="imgBox">
          <v-touch v-on:swipeleft="lightBoxImage--" v-on:swiperight="lightBoxImage++">
            <transition name="fade2" mode="out-in">
              <img :src="images[Math.abs(lightBoxImage) % images.length]" class="lightBoxImages" alt="Light Box Images">

            </transition>
          </v-touch>

          <button v-on:click="lightBoxImage--" type="button" name="button" class="btnLeft">&#9001;</button>
          <button v-on:click="lightBoxImage++" type="button" name="button" class="btnRight">&#9002;</button>
        </div>

      </div>

    </div>

    <div class="bio">

      <p>I like weathered things.  I like the patina a quality garment develops over time.  Good clothes, like good furniture, have been built to wear well.  That’s  what I sell - quality menswear that’s a little worn.</p>

      <p>I see beauty in the mundane and believe deeply that details matter.  Your daily look can bring you joy and inspiration.</p>

      <p>At <b>H.Bailey</b> the aim is to help you craft your signature style with contemporary and vintage pieces that are lovingly curated. You’ll find cool denim, vintage sportcoats, and cashmere scarves. From fabulous shoes to dapper designer suits, we’ll get you dressed to show up for your life.</p>

      <p>All who want to be handsome are invited to <b>H.Bailey</b> to invest in themselves, in sustainable luxury, in the art of a life lived in style.</p>

      <p>XO,</p>

      <p>H.</p>

    </div>

  </div>

</template>

<script>

export default {

  data () {
    return {
      title: 'H.Bailey',
      header: 'CURATED RESALE',
      subHeader: 'menswear for all',
      images: ['./static/imgs/hilary2.jpg', './static/imgs/windowInside.jpg', './static/imgs/windowSign.jpg', './static/imgs/jackets.jpg', './static/imgs/rings.jpg', './static/imgs/brownJacket.jpg', './static/imgs/blackJacket.jpg', './static/imgs/street.jpg'],
      faderImage: 0,
      lightBoxImage: 0,
      timer: null,
      lightBoxActive: false
    }
  },
  mounted: function () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 5000)
    },
    next: function () {
      this.faderImage++
    },
    lightBoxOpen: function () {
      this.lightBoxActive = true
      this.lightBoxImage = this.faderImage
      this.timer = 0
    },
    lightBoxClose: function () {
      this.lightBoxActive = false
    }
  }
}

</script>

<style lang="scss" scoped>

img {
  object-fit: cover;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
}

.mainCont {
  display: flex;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  @media (max-width: 658px) {
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
    margin-top: 0px;
  }
}

.bio {
  font-size: 1.1em;
  width: 700px;
  text-align: center;
  border-top: solid 1px rgb(191, 167, 112);
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 88%;
    font-size: 1.2em;
  }
  @media (min-width: 1200px) {
    border-top: none;
  }
}

.left, .right {
  border: solid 2px rgb(191, 167, 112);
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  @media (max-width: 658px) {
    width: 90%;
    margin: 2%;
  }


}

.right:hover {
  filter: grayscale(80%);
  cursor: pointer;
}

h1, h3, .subP {
  font-weight: normal;
  transition: all 300ms;
  margin: 0;
  &:hover {
    color: rgb(215, 215, 215);
  }
}

h1 {
  font-size: 3em;
  @media (max-width: 768px) {
  }
}

h3 {
  letter-spacing: 2px;
  font-size: 1.3em;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
}

p {
  font-size: 1.1em;
  @media (max-width: 768px) {
  }
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

.lightBox {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  .imgBox {
    z-index: 5;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    max-width: 800px;
    @media (max-width: 768px) {
      width: 95%;
    }
    img {
      width: 100%;
    }
  }
}

.btnLeft, .btnRight {
  position: absolute;
  outline: none;
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  height: 100%;
  transition: all 300ms ease-in-out;
  font-size: 3em;
  &:hover {
    background-color: rgba(201, 201, 201, 0.47);
    color: rgba(37, 37, 37, 0.82);
  }

}

.closeDiv {
  z-index: 4;
  position: absolute;
  height: 100vh;
  width: 100vw;
}

.closeBtn {
  position: absolute;
  top: 80px;
  right: 10px;
  font-size: 5em;
  color: white;
  z-index: 99;
  p {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 768px) {
    top: 20px;
  }
  transition: all 300ms;
  &:hover {
    transform: scale(1.2);
    color: rgb(106, 106, 106);
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

.socialContainer {
  margin-top: 10px;
}

.imgGallery {
  height: 100%;
  width: 100%;
}

.fade2-enter-active, .fade2-leave-active {
  transition: opacity 1s
}

.fade2-enter, .fade2-leave-active {
  transition: opacity 1s
}

</style>
