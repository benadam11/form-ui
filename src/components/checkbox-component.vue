<script>
  export default{
    props: [
      'label',
      'alt',
      'isActive', 
      'name'
    ],
    methods: {
      sendUpdate(){

        this.isActive = !this.isActive;

        let updatedState = this.isActive;

        this.$dispatch('update', updatedState)
        
      }
    }
  }
</script>

<template>
  <input type="checkbox" name="{{name}}" checked="{{isActive}}" v-on:change="sendUpdate()">
  <label for="{{name}}" v-if="isActive">{{label}}</label>
  <label for="{{name}}" v-else="isActive">{{alt}}</label>
</template>