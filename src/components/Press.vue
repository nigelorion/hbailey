<template>
  <div class="main">

    <div class="pressBox">
      <div class="imgBox">
         <a class="pressImgLink" href="https://www.king5.com/article/entertainment/television/programs/new-day-northwest/perfect-your-unique-style-with-curated-quality-menswear-from-hbailey/281-581992288" target="_blank"><img class="pressImg" src="static/imgs/H.Bailey.jpg" alt="Hilary at H.Bailey"></a>
      </div>
     

      <p class="pressBio">"Perfect your unique style with curated quality menswear from H.Bailey Looking good isn't about the latest trends, it's about finding items that make you feel and look your best in your own style." <br><a href="https://www.king5.com/article/entertainment/television/programs/new-day-northwest/perfect-your-unique-style-with-curated-quality-menswear-from-hbailey/281-581992288" target="_blank">Full King 5 video</a></p>
    </div>
    
    <div class="pressBox">
      <div class="imgBox">
        <a class="pressImgLink" href="https://www.seattlemag.com/shopping/seattle%E2%80%99s-new-vintage-clothing-shop-helps-men-suit" target="_blank"><img class="pressImg" src="https://www.seattlemag.com/sites/default/files/field/image/man%20suit.jpg" alt="Hilary at H.Bailey"></a>
      </div>

      <p class="pressBio">"...Owner Hilary Bailey Burnett...sees menswear as an ideally adaptable style for outfitting all genders.“I wanted to create a calm space with an array of menswear that would be welcoming to all people.”" <br><a href="https://www.seattlemag.com/shopping/seattle%E2%80%99s-new-vintage-clothing-shop-helps-men-suit" target="_blank">Full Seattle Mag article</a></p>
    </div>



  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

.pressBox {
  border: solid 1px rgb(191, 167, 112);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  margin: 20px;
  width: 748px;
  max-height: 500px;
  @media(max-width: 900px) {
    width: 100%;
  }
}

a {
  color: rgb(191, 167, 112);
  font-size: 1.2em;
  transition: color 300ms;
  &:hover {
    color: #282f36;
  };
}

.pressBio {
  background-color: rgb(255, 246, 233); 
  text-align: center;
  font-size: 1.2em;

}

.imgBox {
  max-height: 400px;
  overflow: hidden;
  transition: all 300ms;
  filter: grayscale(100%);
  &:hover {
    filter: none;
 
  }
}

.pressImg {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
}


</style>
