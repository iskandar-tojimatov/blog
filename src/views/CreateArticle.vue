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
                            <div class="form-group">
                                <label class="form-control-label">Title</label>
                                <input type="text" v-model="title" class="form-control input" i>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Description</label>
                                <textarea v-model="description" class="form-control input" name="" id=""></textarea>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">Body</label>
                                <textarea v-model="body" class="form-control input"></textarea>
                            </div>

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
    export default {
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