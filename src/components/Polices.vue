<template>
  <div class="main">
    <div class="wrapper">

      <p>*H.Bailey does not accept cash at this time.  All “plastic” is welcome.</p>

      <p>*All sales are final and our carefully-curated items are sold as presented.  If purchasing a gift, consider choosing accessories or a gift card as a foolproof option.</p>

      <p>*I buy quality/high end/designer menswear by appointment only.  I pay out a little “pocket money”. Text me to inquire.</p>

      <p class="phoneNum">206-351-1595</p>

      <button class="textMe"><a href="sms:1-206-351-1595">Text me</a>

</button>
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

.main {
  width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    width: 90%;
  }
}

.textMe {
  display: none;
  height: 50px;
  width: 100px;
  background-color: rgb(191, 167, 112);
  margin: 10px auto;
  border: none;
  &:hover {
    background-color: rgb(193, 193, 193);
  }
  & a {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
}

.phoneNum {
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
}

p {
  font-size: 1.2em;
  border-bottom: solid 1px rgb(191, 167, 112);

}

.wrapper {
  height: 50%;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
}

</style>
