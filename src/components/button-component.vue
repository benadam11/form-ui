<script>
  export default {
    props:[
      'type',
      'saving',
      'text', 
      'savingText'
    ],
    methods:{
      handleEnter(event){
        this.$dispatch('handleSubmit')
      }
    }
  }
</script>

<style lang="sass" scoped>
  
  .submit-button {
    display:inline-block;
    background-color:#1ABD82;
    color:#fff;
    position:relative;
    font-size:12px;
    min-width:120px;
    padding:8px;
    text-align:center;
    text-transform:uppercase;
    transform: scale(1);
    transition: transform .2s ease;

    &:hover:enabled {
      transform:scale(1.1);
      box-shadow: 2px 2px 20px rgba(0,0,0,0.2);
    }

    &:disabled{ opacity: .2; }
  }

</style>


<template>
  <button type="{{type}}" class="submit-button" v-on:click="handleEnter($event)">
    <span>{{text}}</span>
  </button>
</template>