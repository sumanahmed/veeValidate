<template>
  <div id="app" class="container mt-5">
    <VeeValidateForm></VeeValidateForm>
  </div>
</template>

<script>
import VeeValidateForm from './components/VeeValidateForm.vue'

export default {
  name: 'App',
  components: {
    VeeValidateForm
  }
}
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
</style>
