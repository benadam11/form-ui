<script>
  export default {
    data(){
      return {
        error:false
      }
    },
    props: [ 
      'label',
      'name',
      'type',
      'placeholder', 
      'value', 
      'disabled', 
      'error-message'
    ],
    methods:{
      validateInput(){
        // Arbitrary Validation to show interaction pattern
        this.error = this.value.length < 1 ? true: false;

      },
      handleChanges(){

        this.validateInput();

        if(!this.error){ 
          this.$dispatch('update', this.value);
        }

      }
    }
  }
</script>

<style lang="sass">

  input[type="text"]{
    -webkit-appearance:none;
    -moz-appearance:none;
    border:none;
    appearance:none;
    font-size:1em;
    padding:12px;
    width:100%;
    background-color:#F5F6F8;
    position:relative;

    &:focus {
      outline:0;
      box-shadow: 2px 2px 20px rgba(0,0,0,0.2);
    }

  }

  .input-bg {
    margin-top:10px;
    margin-bottom:20px;
  }

  .input-container { position:relative; }

  .error-message {
    background-color:#EA6564;
    color:#fff;
    font-size:.75em;
    width:150px;
    text-align: center;
    padding:14px;
    position:absolute;
    top:28px;
    right:-120px;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.2);

    &:after {
      content:'';
      background-color:#EA6564;
      display: block;
      width:20px;
      height:20px;
      position:absolute;
      left:-5px;
      top:11px;
      transform:rotate(45deg);
      z-index:-1;
    }
  }

  .error-transition{
    opacity: 1;
    visibility: visible;
    transform:translateX(10px);
    transition:all .3s ease;

  }

  .error-enter, .error-leave {
    opacity: 0;
    visibility: hidden;
    transform:translateX(0px);
    transition: all .1s ease;
  }

</style>

<template>
  <div :class="{'disabled':disabled}" class="input-container">
    <label for="{{name}}">{{label}}</label>
    <div class="input-bg">
      <input
        v-model="value"
        v-on:keyUp="handleChanges($event)"
        v-on:blur="validateInput($event)"
        type="{{type}}" 
        placeholder="{{placeholder}}"
      />
    </div>

    <div class="error-message" v-show="error" transition="error">
      {{errorMessage}}
    </div>

  </div>

</template>