<template>
    <form @submit.prevent>
        <input-component :type="'text'" :label="'Title'" v-model="title"></input-component>
        <input-component :type="'text'" :label="'Description'" v-model="description"></input-component>
        <input-component :type="'text'" :label="'Body'" v-model="body"></input-component>
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
import InputComponent from './InputComponent.vue'
import LoaderComponent from './LoaderComponent.vue'
    export default {
  components: { LoaderComponent, InputComponent },
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
