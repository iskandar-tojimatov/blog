<template>
  <Transition name="fade" mode="out-in">
    <div class="card shadow-sm bg-body-tertiary">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"></rect>
          
        </svg>
        <div class="card-body">
          <p class="card-text fw-bold">{{article.title}}</p>
          <p class="text-body">{{article.body}}</p>
          <div class="bottom d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" @click="apiHandler()">Read article</button>
              <button v-if="isCreator" @click="deleteHandler()" :disabled="isLoading" type="button" class="btn btn-sm btn-outline-danger">Delete</button>
              <button v-if="isCreator" @click="updateHandler()" type="button" class="btn btn-sm btn-outline-primary">Edit</button>
            </div>
            <small class="text-body-secondary">{{new Date(article.createdAt).toLocaleString('us')}}</small>
          </div>
        </div>
    </div>
  </Transition>

</template>

<script>
import { mapState } from 'vuex'
import {Transition} from "vue" 
 
    export default {
      components:{
        Transition
      },
      props:{
        article:{
          type:Object,
          required:true
        }
      },
        computed:{
          ...mapState({
            data:state=>state.articles.data,
            error:state=>state.articles.error,
            user:state=>state.auth.user,
            isLoading:state=>state.control.isLoading
          }),
          isCreator () {
            return this.user?.username === this.article.author.username
          }
        },
        methods:{
          apiHandler(){
            return this.$router.push(`/article/${this.article.slug}`)
          },
          updateHandler(){
            return this.$router.push(`/edit-article/${this.article.slug}`)
          },
          deleteHandler(){
            this.$store.dispatch('deleteHandler', this.article.slug)
            .then(()=>{
              this.$store.dispatch('articles')
            })
          }

        }
    }
</script>

<style lang="scss" scoped>

</style>