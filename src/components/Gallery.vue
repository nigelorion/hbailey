<template>
  <div class="main">
    <div class="gallery">
      <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22046034_10155479723630795_6557431837921339062_n.jpg?oh=afb13b34a8d023e71fcee1bd78b0a856&oe=5A88214B" alt="">
      <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22049865_10155482460010795_6342427858041865217_n.jpg?oh=6f391a4c98f1ae1ee8de13eac01c388e&oe=5A7EAEBE" alt="">
      <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21768055_10155474844855795_4143192661684090217_n.jpg?oh=2bed796e06a98fabe7ee4b3b56874a29&oe=5A3A3FCF" alt="">
      <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22008023_10155467767510795_8813018744575320245_n.jpg?oh=454c11338a1c14e6925f48f4fee2e1d2&oe=5A4C5283" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  
}

img {
  height: 300px;
  margin: 5px;
  transition: all 300ms;
  filter: grayscale(80%);
  @media (max-width: 840px) {
    height: 250px;

  }
}

.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  // padding: 100px;
  @media (max-width: 768px) {
    // margin-top: 500px;

  }
}


</style>
