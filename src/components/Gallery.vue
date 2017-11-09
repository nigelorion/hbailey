

<template>
  <div class="main">
    <div class="gallery">
      <div class="galleryLeft">

        <v-touch v-on:swipeleft="currentImage--" v-on:swiperight="currentImage++">
          <transition name="fade2" mode="out-in">
            <img class="imgGallery" :key='currentImage' :src="images[Math.abs(currentImage) % images.length]" alt="Image Gallery">
          </transition>
        </v-touch>

        <button v-on:click="currentImage--" type="button" name="button" class="btnLeft">&#9664;</button>
        <button v-on:click="currentImage++"type="button" name="button" class="btnRight">&#9654;</button>

        <div class="thumbnails">
          <img v-for="(image, index) in images" v-on:click="thumbClick(index)" :id="index" class="thumb" :src="images[index]" alt="">
        </div>

      </div>

      <div class="galleryRight">

        <transition name="fade2" mode="out-in">
          <p :key='currentImage' class="galleryText">{{imageDetails[Math.abs(currentImage) % imageDetails.length]}}</p>
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
      imageDetails: ['Hilary Bailey Burnett, a Seattle native, relishes the opportunity to build a destination boutique in the heart of Pioneer Square. Her work as a personal wardrobe stylist for over 15 years informs her approach to the shop. She believes  in the everyday art of getting dressed.', 'hello this is a test consectetur adipisicing elit, sed', 'menswear for all testing testing', 'Loremsit amet, consectetur hello this is a test for hbailey elit, sed', 'cherry streeet arts building'],
      images: ['https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22046034_10155479723630795_6557431837921339062_n.jpg?oh=afb13b34a8d023e71fcee1bd78b0a856&oe=5A88214B', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22049865_10155482460010795_6342427858041865217_n.jpg?oh=6f391a4c98f1ae1ee8de13eac01c388e&oe=5A7EAEBE', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21768055_10155474844855795_4143192661684090217_n.jpg?oh=2bed796e06a98fabe7ee4b3b56874a29&oe=5A3A3FCF', 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/22814445_10155556278320795_1282492056027346624_n.jpg?oh=8417d968b340b0c4d253736675224f9d&oe=5A6F2A09', 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p526x296/22528103_10155522532560795_1420887067215911048_n.jpg?oh=05db0219a3e0dfda68a78dd7249f7f91&oe=5A709D5A'],
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
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 800px;
  }
}

.galleryRight {
  display: flex;
  text-align: center;
  align-items: center;

  justify-content: center;
  width: 500px;
  height: 500px;
  padding: 5px;
  @media (max-width: 800px) {
    width: auto;
    max-height: 200px;
    align-items: flex-start;
  }
}

.galleryText {
  font-size: 1.2em;
  margin: 10px;
}

img {
  height: 500px;
  width: 500px;
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
