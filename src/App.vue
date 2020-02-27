<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of a form</h3>
        <p>This is some info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="text" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
  components: {
    'form-helper': formHelper
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleSubmit: function(){
      alert('Thanks for submiting!');
    }
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
</style>
