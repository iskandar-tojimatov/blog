<template>
    <Transition name="fade" mode="out-in">
        <div class="loader-bg">
          <section class="paytm-loader"></section>
        </div>
      </Transition>

</template>

<script>
import {Transition} from "vue" 

    export default {
      components:{
        Transition
      }
    }
</script>

<style lang="scss" scoped>

</style>