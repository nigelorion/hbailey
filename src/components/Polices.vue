<template>
  <div class="main">
    <div class="wrapper">

      <p>*H.Bailey does not accept cash at this time.  All “plastic” is welcome.</p>

      <p>*Returns are offered WITHIN 30 days, with receipt, for in store credit only.</p>

      <p>*Prices are firm - as marked.</p>

      <p>*I buy quality/high end/designer menswear by appointment only.  I pay out a little “fun money” (not much! typically 5.00 to 15.00 dollars per piece).  Please bring items in excellent condition on hangers. Text me to set up your appointment.</p>
      <p class="phoneNum">206-351-1595</p>
      <button class="textMe"><a href="tel:1-206-351-1595">Text me</a>
</button>
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

.textMe {
  display: none;
  height: 50px;
  width: 100px;
  background-color: rgb(191, 167, 112);
  margin: 3px auto;
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
}

</style>
