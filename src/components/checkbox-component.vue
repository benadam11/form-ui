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
        this.$dispatch('update', this.active)
        
      }
    }
  }
</script>

<style scoped>

  label { padding-left:8px; }

  .checkbox-container { 
    display: inline-block;
    margin-right:10px;
  }
</style>

<template>
  <div class="checkbox-container">
    <span v-if="isActive">
      <input type="checkbox" name="{{name}}" v-on:change="sendUpdate()" v-model="isActive">
      <label for="{{name}}" v-if="isActive">{{label}}</label>
    </span>

    <span v-else="isActive">
      <input type="checkbox" name="{{name}}" v-on:change="sendUpdate()" v-model="isActive">
      <label for="{{name}}" v-else="isActive">{{alt}}</label>
    </span>
  </div>
</template>