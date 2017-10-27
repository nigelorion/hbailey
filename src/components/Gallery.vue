<template>
  <div class="main">
    <div class="gallery">
      <div class="galleryLeft">
        <transition name="fade2" mode="out-in">
          <img class="imgGallery" :key='currentImage' :src="images[Math.abs(currentImage) % images.length]" alt="Image Gallery">
        </transition>

        <button v-on:click="currentImage--" type="button" name="button" class="btnLeft"><</button>
        <button v-on:click="currentImage++"type="button" name="button" class="btnRight">></button>
        <div class="thumbnails">
          <img v-on:click="thumbClick" id="0" class="thumb" :src="images[0]" alt="">
          <img v-on:click="thumbClick" id="1" class="thumb" :src="images[1]" alt="">
          <img v-on:click="thumbClick" id="2" class="thumb" :src="images[2]" alt="">
          <img v-on:click="thumbClick" id="3" class="thumb" :src="images[3]" alt="">
          <img v-on:click="thumbClick" id="4" class="thumb" :src="images[4]" alt="">

        </div>
      </div>
      <div class="galleryRight">
        <transition name="fade2" mode="out-in">
          <p :key='currentImage' class="galleryText">"{{imageDetails[Math.abs(currentImage) % imageDetails.length]}}"</p>
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
      imageDetails: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed', 'hello this is a test consectetur adipisicing elit, sed', 'menswear for all testing testing', 'Loremsit amet, consectetur hello this is a test for hbailey elit, sed', 'cherry streeet arts building'],
      images: ['https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22046034_10155479723630795_6557431837921339062_n.jpg?oh=afb13b34a8d023e71fcee1bd78b0a856&oe=5A88214B', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22049865_10155482460010795_6342427858041865217_n.jpg?oh=6f391a4c98f1ae1ee8de13eac01c388e&oe=5A7EAEBE', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21768055_10155474844855795_4143192661684090217_n.jpg?oh=2bed796e06a98fabe7ee4b3b56874a29&oe=5A3A3FCF', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22008023_10155467767510795_8813018744575320245_n.jpg?oh=454c11338a1c14e6925f48f4fee2e1d2&oe=5A4C5283', 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p526x296/22528103_10155522532560795_1420887067215911048_n.jpg?oh=05db0219a3e0dfda68a78dd7249f7f91&oe=5A709D5A'],
      currentImage: 0
    }
  },
  methods: {
    thumbClick: function (val) {
      let imageIndex = val.path[0].attributes[1].value
      this.currentImage = imageIndex

      console.log(imageIndex)
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  @media (max-width: 900px) {
    margin-top: 25%;
  }

}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}

.galleryLeft, .galleryRight {

  height: 400px;
  width: 400px;
  margin: 10px;
  @media (max-width: 900px) {
    height: 300px;
    width: 300px;
    margin: 5px;
  }
}

.galleryRight {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

}

.galleryText {
  font-size: 1.2em;
  margin: 10px;
}

img {
  height: 100%;
  width: 100%;
}

.galleryLeft {
  position: relative;

}

.btnLeft, .btnRight {
  position: absolute;
  outline: none;
  background: none;
  border: none;
  color: white;
  font-size: 3em;
  height: 100%;
  transition: all 300ms ease-in-out;;
  &:hover {
    background-color: rgba(131, 131, 131, 0.47);
    color: rgb(201, 190, 111);
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

// img {
//   height: 300px;
//   margin: 5px;
//   transition: all 300ms;
//   filter: grayscale(80%);
//   @media (max-width: 840px) {
//     height: 250px;
//
//   }
// }

// .gallery {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//
//
//   // padding: 100px;
//   @media (max-width: 768px) {
//     // margin-top: 500px;
//
//   }
// }


</style>
