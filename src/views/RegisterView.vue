<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8 login-box text-center d-flex align-items-center flex-column">
                    <a @click="$router.push('/')" class=" logo d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img style="width: 120px;" src="https://static.vecteezy.com/system/resources/thumbnails/001/203/837/small/eagle-logo.png" alt="logo">
                    </a>
                    <div class="col-lg-12 login-title">
                        Sign in
                    </div>
    
                    <div class="col-lg-12 login-form">
                        <div class="col-lg-12 login-form">
                            <form>
                                <div class="form-group">
                                    <label class="form-control-label">EMAIL</label>
                                    <input type="email" v-model="email" class="form-control input" i>
                                </div>
                                <div class="form-group">
                                    <label  class="form-control-label">USERNAME</label>
                                    <input type="text" v-model="username" class="form-control input">
                                </div>
                                <div class="form-group">
                                    <label class="form-control-label">PASSWORD</label>
                                    <input type="password" v-model="password" class="form-control input" i>
                                </div>
    
                                <div class="col-lg-12 loginbttm">
                                    <div class="col-lg-6 login-btm login-text">
                                        <validation-error></validation-error>
                                    </div>
                                    <div class="col-lg-6 login-btm login-button d-flex justify-content-end">
                                        <button :disabled="isLoading" type="submit" @click="submitHendler" class="btn btn-outline-light me-2">Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ValidationError from '../components/ValidationError.vue';
    export default {
  components: { ValidationError },
        data() {
            return {

                username:'',
                email:'',
                password:'',
            }
        },
        computed:{
            ...mapState({
                isLoading: state => state.auth.isLoading,
           })
        },
        methods: {
            submitHendler(e){
                e.preventDefault();
                const data={
                    username:this.username,
                    email:this.email,
                    password:this.password,
                }
                this.$store.dispatch('register', data)
                .then(user=>{
                    console.log(user)
                    this.$router.push({name:'home'})
                })
                .catch(error=>{
                    console.log(error)
                })
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>