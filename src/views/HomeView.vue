<template>
  <div class="container">
    <loader-component v-if="isLoading"></loader-component>
    <Transition name="slide-fade">
      <div v-if="data" class="my-cards">
          <card-component v-for="article in data" :key="article.id" :article="article"></card-component>
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '../components/CardComponent.vue'
import LoaderComponent from '../components/LoaderComponent.vue'
  export default {
    components:{
      CardComponent,
      LoaderComponent
    },
    computed:{
      ...mapState({
        data:state=>state.articles.data,
        isLoading:state=>state.articles.isLoading,
      })
    },
    mounted() {
      this.$store.dispatch('articles')
    },
  }
</script>

