<template>
  <div class="container">
    <loader-component v-if="isLoading"></loader-component>

    <article-detail-component v-else></article-detail-component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleDetailComponent from '../components/ArticleDetailComponent.vue'
import LoaderComponent from '../components/LoaderComponent.vue'
  export default {
  components: { ArticleDetailComponent, LoaderComponent },
   computed:{
      ...mapState({
        isLoading:state=>state.articles.isLoading
      })
   },
     
    mounted(){
      console.log(this.$route.params.slug)
      this.$store.dispatch('articleDetail', this.$route.params.slug)
    }
  }
</script>

