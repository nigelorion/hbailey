<template>

  <div class="main">
    <div class="left">
      <h1>{{ title }}</h1>
      <h3>{{ header }}</h3>
      <p>{{ subHeader }}</p>
    </div>
    <div class="right">
      <a target="_blank" href="https://www.facebook.com/hilary.b.burnett"><img src="../assets/facebook.png" alt=""></a>
      <a target="_blank" href="https://www.instagram.com/hilarybaileyburnett/"><img src="../assets/insta.png" alt=""></a>
    </div>
  </div>

</template>

<script>

export default {
  name: 'main',
  data () {
    return {
      title: 'h.bailey',
      header: 'CURATED RESALE',
      subHeader: "men's wear for all."
    }
  }
}

</script>

<style lang="scss" scoped>

.main {
  display: flex;
  @media (max-width: 768px) {
  flex-direction: column;
  }
}

.left, .right {
  width: 200px;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0px;
  }
}

h1, h3, p {
  font-weight: normal;
  transition: all 300ms;

  &:hover {
    color: rgb(215, 215, 215);
  }
}

h1 {
  font-size: 3em;
}

img {
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

</style>
