<template>
    <Transition name="fade" mode="out-in">
        <div class="loader-bg">
            <div class="loader"></div>
    
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