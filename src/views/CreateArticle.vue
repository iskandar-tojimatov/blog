<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-md-8 m-auto login-box text-center d-flex align-items-center flex-column">
                <div class="col-lg-12 login-title">
                    Create Article
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form @submit.prevent>
                            <input-component :type="'text'" :label="'Title'" v-model="title"></input-component>
                            <input-component :type="'text'" :label="'Description'" v-model="description"></input-component>
                            <input-component :type="'text'" :label="'Body'" v-model="body"></input-component>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                    <ul v-if="errorMessages"  style="padding-left: 0; margin-bottom: 0;">
                                        <li v-for="validationError in validationErrors" :key="validationError">
                                            {{validationError}}
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6 login-btm login-button d-flex justify-content-end">
                                    <button :disabled="isLoading" @click="articleHandler" type="submit" class="btn btn-outline-light me-2">Create article</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import InputComponent from '../components/InputComponent.vue'
    export default {
  components: { InputComponent },
        data() {
            return {
                title:'',
                description:'',
                body:'',
            }
        },
        computed:{
            ...mapState({
                isLoading:state=>state.control.isLoading,
            }),
            errorMessages(){
               return this.$store.state.control.errors
            },
            validationErrors(){
                return Object.keys(this.errorMessages).map(name=>{
                    const msg = this.errorMessages[name].join(', ')
                    return `${name} ${msg}`
                })
            }
        },
        methods: {
            articleHandler(){
                const article={
                    title:this.title,
                    description:this.description,
                    body:this.body,
                    tagList:[]
                }
                this.$store.dispatch('createArticle', article)
                .then(response=>{
                    this.$router.push({name:'home'})
                    this.$store.dispatch('articles')

                    console.log(response,'aaa');
                })
                .catch((e)=>{
                    console.log(e);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>