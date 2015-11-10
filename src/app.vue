<script>
import FormComponent from './components/form-component.vue'

export default {
  components: { FormComponent }
}
</script>

<style src="./styles/style.scss" lang="sass"></style>

<style lang="sass">
  .form-container {
    background-color:#fff;
    margin:70px auto;
    padding:30px 70px;
    width:600px;
    transition:all .1s ease;

    @media screen and(max-width: 480px){
      width:100%;
      padding:30px 30px;
      margin-top:0;
    }
  }

</style>

<template>
  <div class="form-container">
    <form-component></form-component>
  </div>
</template>


