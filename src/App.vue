<template>
  <div class="my-page">
    <nav-component></nav-component>
   
    <div class="main-page w-100 pt-4">
        <RouterView />
    </div>

    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import NavComponent from "./components/NavComponent.vue"

export default {
    components: { NavComponent, FooterComponent },
    mounted(){
      this.$store.dispatch('getUser')
      this.$store.dispatch('articles')

    }
  }
</script>

<style lang="scss" scoped>

</style>