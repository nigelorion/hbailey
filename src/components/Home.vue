<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <h3>{{ header }}</h3>
    <p>{{ subHeader }}</p>


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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h3, p {
  font-weight: normal;
  transition: all 300ms;

  &:hover {
    color: rgb(215, 215, 215);
  }
}


</style>
