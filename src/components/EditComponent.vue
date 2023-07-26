<template>
    <form @submit.prevent>
        <div class="form-group">
            <label class="form-control-label">Title</label>
            <input type="text" v-model="title" class="form-control input">
        </div>
        <div class="form-group">
            <label class="form-control-label">Description</label>
            <textarea v-model="description" class="form-control input"></textarea>
        </div>
        <div class="form-group">
            <label class="form-control-label">Body</label>
            <textarea v-model="body" class="form-control input"></textarea>
        </div>

        <div class="col-lg-12 loginbttm">
            <div class="col-lg-6 login-btm login-text">
               
            </div>
            <div class="col-lg-6 login-btm login-button d-flex justify-content-end">
                <button :disabled="isLoading" @click="editHandler" type="submit" class="btn btn-outline-light me-2">Create article</button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapState } from 'vuex'
import LoaderComponent from './LoaderComponent.vue'
    export default {
  components: { LoaderComponent },
        props:{
            // title:{
            //     type:String,
            //     required:true
            // },  
            // description:{
            //     type:String,
            //     required:true

            // },
            // body:{
            //     type:String,
            //     required:true

            // },
            article: {
                type: Object,
                default: null
            }
        },
        ...mapState({
            isLoading: state=>state.control.isLoading,
        }),
        computed: {
            title: {
                get () {
                    return this.article.title
                },
                set (title) {
                    this.$emit('article', { ...this.article, title })
                }
            },
            body: {
                get () {
                    return this.article.body
                },
                set (body) {
                    this.$emit('article', { ...this.article, body })
                }
            },
            description: {
                get () {
                    return this.article.description
                },
                set (description) {
                    this.$emit('article', { ...this.article, description })
                }
            },
        },
      
        methods: {
            editHandler(){
                const article = {
                    title:this.title,
                    description:this.description,
                    body:this.body,
                    tagList:[]
                }
                this.$store.dispatch('updateArticle', {article:article, slug:this.$route.params.slug})
                .then(()=>{
                    this.$router.push({name:'home'})
                })
            }
        },
    }
</script>
