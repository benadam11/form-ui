<script>
  import _ from 'lodash'
  import Dropdown from './dropdown-component.vue'
  import Checkbox from './checkbox-component.vue'
  import InputComponent from './input-component.vue'
  import ButtonComponent from './button-component.vue'
  import MessageComponent from './message-component.vue'

  export default {
    components: {
      Dropdown,
      Checkbox,
      InputComponent,
      ButtonComponent,
      MessageComponent
    },
    data (){
      return {
        accountActive: true,
        accountLocked: false,
        hasErrors:false,
        isSaved:false,
        firstName:'Drew', 
        lastName: 'Baird',
        emailAddress: 'drewbiedoobiedrew@acme.com',
        securityRoles: [
          {role: 'User'}
        ]
      }
    },
    methods:{
      removeRole(index){
        this.securityRoles.splice(index, 1)
      },
      saveForm(){
        this.isSaved = !this.isSaved;
      },
      updateStatus(updatedState){
        this.accountActive = updatedState;
      },
      updateLocked(updatedState){
        this.accountLocked = updatedState;
      },
      updateFirstName(updatedState){
        console.log(updatedState)
      },
      updateLastName(updatedState){
        console.log(updatedState)
      },
      updateEmail(updatedState){
        console.log(updatedState)
      }
    },
    events:{
      addRole(newRole){

        let isAlreadySelected = _.some(this.securityRoles, newRole);

        if(!isAlreadySelected) { 
          this.securityRoles.push(newRole);
        }

      },
      handleSubmit(){

        let firstNameError = this.$refs.first.$data.error;
        let lastNameError = this.$refs.last.$data.error;
        let emailError = this.$refs.email.$data.error;


        if (!lastNameError && !lastNameError && !emailError){
          console.log('this is working')
          this.saveForm()
        }
        else { this.hasErrors = !this.hasErrors; }

      }
    }
    
  }
</script>

<style scoped>

  ul {
    padding:0;
    margin-bottom:30px;
    list-style: none;
  }

  li {
    margin-bottom:10px;
    padding-bottom:10px;
    border-bottom:1px solid #F5F6F8;
  }

  .list-transition {
    max-height:100px;
    transition: max-height .1s ease;
  }

  .list-enter, .list-leave { max-height: 0; }

  .inactive { color:#EA6564; }

</style>

<template>

  <form>

    <h2>Basic Settings</h2>
    
    <message-component 
      v-bind:error="hasErrors"
      :class="{'showMessage':showMessage, 'hasErrors':error}"
      message="Booya! Settings are saved"
      error-message="Woah there cowbow - fix them errors">
    </message-component>

    <div class="form-group">

      <checkbox 
        v-on:update="updateStatus"
        :is-active="accountActive"
        label="Active" 
        alt="Inactive" 
        name="account-active">
      </checkbox>

      <checkbox 
        v-on:update="updateLocked"
        :is-active="accountLocked"
        label="Account Locked" 
        alt="Lock Account" 
        name="account-locked">
      </checkbox>

    </div>

    <div class="form-group">

      <input-component
        v-on:update="updateFirstName"
        v-bind:value="firstName"
        v-bind:disabled="accountLocked"
        v-ref:first
        type="text"
        label="First Name"
        error-message="First Name Required">
      </input-component>

      <input-component
        v-on:update="updateLastName"
        v-bind:value="lastName"
        v-bind:disabled="accountLocked"
        v-ref:last
        type="text"
        label="Last Name"
        error-message="Last Name Required">
      </input-component>

      <input-component
        v-on:update="updateEmail"
        v-bind:value="emailAddress"
        v-bind:disabled="accountLocked"
        v-ref:email
        type="text"
        label="Email Address"
        error-message="Email Required">
      </input-component>

    </div>

    <div class="form-group">
      
      <div 
        v-if="accountLocked" 
        v-bind:class="{'disabled':accountLocked}">
        <h3>Security Roles - Locked</h3>
      </div>

      <div v-else="accountLocked" class="cf list-container">
        <div class="form-group">
          <dropdown class="right"></dropdown>
          <h3>Security Roles</h3>
        </div>

        <ul>
          <li class="cf" v-for="item in securityRoles" transition="list">
            <span>{{ item.role }}</span>
            <button 
              v-on:click="removeRole($index)"
              disabled="{{accountLocked}}"
              type="button" 
              class="button-link right">
              Remove
            </button>
          </li>
        </ul>
      </div>

    </div>

    <div class="form-group">
      <button-component 
        v-bind:saving="isSaving"
        disabled="{{accountLocked}}" 
        type="submit" 
        text="Save" 
        saving-text="Saving">
      </button-component>
    </div>

  </form>

</template>
