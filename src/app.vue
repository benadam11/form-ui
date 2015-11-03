<script>
import FormComponent from './components/form.vue'

export default {
  components: { FormComponent }
}
</script>

<style src="./styles/style.scss" lang="sass"></style>

<style>
  .form-container {
    background-color:#fff;
    margin:70px auto;
    padding:30px 70px;
    width:600px;
  }
</style>

<template>
  <div class="form-container">
    <form-component></form-component>
  </div>
</template>


