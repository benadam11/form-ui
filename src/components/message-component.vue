<script>
  export default {
    props:[
      'message', 
      'updated', 
      'active', 
      'error',
      'error-message'
    ]
  }
  
</script>

<style scoped>
  

  p {
    font-style: italic;
    text-align: center;
  }
  .message-group{
    background-color:#1ABD82;
    color:#fff;
    padding:2px;
    visibility: hidden;
    opacity: 0;
    height:0px;
    transform: translateY(10px);
    transition: all .3s ease;

  }

  .message-group.error{ background-color:#EA6564;}

  .message-group.showMessage{
    visibility: visible;
    position:relative;
    opacity: 1;
    transform: translateY(0);
    height:55px;
    margin-bottom:30px;
  }
  .accountInactive {
    background-color:red;
  }
  
</style>

<template>
  <div class="message-group" transition="showMessage" :class="{'error': error}">
    <p v-if="error">{{errorMessage}}</p>
    <p v-else>{{message}}</p>
  </div>
</template>