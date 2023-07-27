<template>
    <div class="container">
        <div class="row">
            <loader-component v-if="isLoading"></loader-component>
            <Transition v-else name="slide-fade">
                <div v-if="article" class="col-lg-10 col-md-8 m-auto login-box text-center d-flex align-items-center flex-column">
                    <div class="col-lg-12 login-title">
                        Edit Article
                    </div>
    
                    <div class="col-lg-12 login-form">
                        <div class="col-lg-12 login-form">
                            <edit-component 
                                v-if="article"
                                :article="article"
                                @article="$event => article = $event">
                            </edit-component>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-2"></div>
                </div>
            </Transition>
        </div>

    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import EditComponent from '../components/EditComponent.vue'
import LoaderComponent from '../components/LoaderComponent.vue'
export default {
  components: { EditComponent, LoaderComponent },
  data () {
    return {
        article: null
    }
  },
     
        computed:{
            ...mapState({
                isLoading:state=>state.articles.isLoading,
            }),
            ...mapGetters({
                editingArticle: "getArticle"  
            })
        },
        async mounted(){
            await this.$store.dispatch('articleDetail', this.$route.params.slug)
            this.article = this.editingArticle
        },
     
    }
</script>
