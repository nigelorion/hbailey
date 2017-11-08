<template>
  <div class="main">
    <div class="wrapper">
      <p>*H.Bailey does not accept cash at this time.  All “plastic” is welcome.</p>

      <p>*Returns are offered WITHIN 30 days, with receipt, for in store credit only.</p>

      <p>*Prices are firm - as marked.</p>

      <p>*I buy quality/high end/designer menswear by appointment only.  I pay out a little “fun money” (not much! typically 5.00 to 15.00 dollars per piece).  Please bring items in excellent condition on hangers. Text me to set up your appointment.</p>

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
  width: 70%;

  text-align: center;
  @media (max-width: 768px) {

  }
}

p {
  font-size: 1.2em;
}

.wrapper {
  height: 50%;
  display: flex;
  flex-direction: column;

}



</style>
