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
          <img class="imgGallery" :key='currentImage' :src="images[Math.abs(currentImage) % images.length]" alt="Image Gallery">
        </transition>
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
  name: 'main',
  data () {
    return {
      title: 'H.Bailey',
      header: 'CURATED RESALE',
      subHeader: 'menswear for all',
      images: ['https://1.bp.blogspot.com/-4ogaUVbkyHc/VyQ3O3w-rjI/AAAAAAAAN7k/uHRiJirGTtokxtdEF5iXR5DYSu9aVNe6ACKgB/s1600/IMG_20160429_172620965.jpg', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23622331_163116877762334_2666721309216779934_n.jpg?oh=6287177b05d6bbc8df6fc9b895b03b13&oe=5AA86D98', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23722281_164669347607087_4094898096238189237_n.jpg?oh=6c0940e16e76f17d14df5e9b22b29ecb&oe=5AA8CB9C', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22049865_10155482460010795_6342427858041865217_n.jpg?oh=6f391a4c98f1ae1ee8de13eac01c388e&oe=5A7EAEBE', 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/23031437_10155572760190795_6574598774051766548_n.jpg?oh=3f67590145413122ce92b7425bbaeeb8&oe=5A6507D5', 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/22046034_10155479723630795_6557431837921339062_n.jpg?oh=afb13b34a8d023e71fcee1bd78b0a856&oe=5A88214B', 'https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/23507494_918989928269575_1878742961559175168_n.jpg'],
      currentImage: 0,
      timer: null
    }
  },
  mounted: function () {
    this.startRotation()
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3700)
    },
    next: function () {
      this.currentImage++
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
  // background-image: url(../assets/tim2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

}

.mainCont {
  display: flex;
  margin-top: 25px;
  @media (max-width: 768px) {
  flex-direction: column;
  }
  // background-color: white
}

.bio {
  width: 510px;
  border: solid 2px rgb(191, 167, 112);
  text-align: center;
  border-top: solid 1px rgb(191, 167, 112);
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 85%;
  }
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  margin: 10px;

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
  // padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  @media (max-width: 768px) {
    // height: 210px;
    // width: 210px;
  }
}

.right {
  @media (max-width: 768px) {
  }
  background-color: rgba(255, 255, 255, 0.68);
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
