<script>
  export default {
    data() {
      return {
        showDropdown:false,
        availableRoles: [
          {type: 'System Admin'},
          {type: 'Company Admin'},
          {type: 'Team Admin'},
          {type: 'User'}
        ]
      }
    },
    methods:{
      
      selectRole(index){

        let newRole = {
          role: this.availableRoles[index].type
        }

        if(newRole){
          this.$dispatch('addRole', newRole)
          this.showDropdown = !this.showDropdown;
        }

      },
      toggleDropdown(){

        this.showDropdown = !this.showDropdown;

      }
    }
  }
</script>

<style lang="sass">

  .button-link {
    background-color:transparent;
    color:#3887BE; 
    display:inline-block;
    text-transform:normal;
    vertical-align:middle;
  }  

  .dropdown{ position:relative; }
  .dropdown__list {
    background-color:#fff;
    position:absolute;
    min-width:180px;
    top:-20px;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.3);
    z-index: 10;

  }
  .dropdown__list li {
    
    border-bottom:none;

    &:hover{
      background-color:#F5F6F8;
    }

    a {
      font-size:.75em;
      width:100%;
      padding-top:15px;
      padding-bottom:15px;
      padding-left:30px;
      padding-right:30px; 
      text-transform: uppercase;
    }
  }

  .show-transition{
    transition: all .2s ease;
    visibility: visible;
    opacity: 1;
    transform: scale(1);

  }
  .show-enter, .show-leave{
    visibility: hidden;
    opacity: 0;
    transform: scale(.8);
  }
  
</style>

<template>
  <div class="dropdown">

    <button 
      class="button-link" 
      v-on:click.prevent="toggleDropdown($event)"
      type="button">
      + Add Security Roles
    </button>

    <ul class="dropdown__list" v-if="showDropdown" transition="show">
      <li v-for="role in availableRoles">
        <a type="button" class="button-link" v-on:click.prevent="selectRole($index)">{{role.type}}</a>
      </li>
    </ul>

  </div>
</template>