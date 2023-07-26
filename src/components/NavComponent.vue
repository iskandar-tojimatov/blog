<template>
    <header class="p-3 my-nav">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-between w-100">
            <a @click="$router.push('/')" class=" logo d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img style="width: 120px;" src="https://static.vecteezy.com/system/resources/thumbnails/001/203/837/small/eagle-logo.png" alt="logo">
            </a>
    
            <div class="d-flex align-items-center justify-content-end">
                <div v-if="isAnonimus" class="text-end">
                    <RouterLink :to="{name:'login'}">
                        <button type="button" class="btn btn-outline-light me-2">Login</button>
                    </RouterLink>
                    <RouterLink :to="{name:'register'}">
                        <button type="button" class="btn btn-warning">Sign-up</button>
                    </RouterLink>
                </div>
                <div v-if="isLoggedIn" class="flex-shrink-0 dropdown">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                        <div class="account-btn">
                            <p>{{CurrentUser.username}}</p>
                            <div class="circle">
                                <i class="fas fa-user"></i>
                            </div>
                        </div>
                    </div>
                    <ul class="dropdown-menu text-small shadow" data-popper-placement="bottom-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 34px);">
                      <li>
                        <router-link :to="{name:'create-article'}" class="dropdown-item" >
                            Create article
                        </router-link>
                      </li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a href="#" class="dropdown-item" @click="logout">Sign out</a></li>
                    </ul>
                  </div>

            </div>
    
          </div>
        </div>
      </header>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { gettersTypes } from '../moduls/gettersTyps';
    export default {
        computed:{
            // ...mapState({
            //     CurrentUser: state=>state.auth.user.username,
            //     isLoggedIn: state=>state.auth.isLoggedIn
            // })

            ...mapGetters({
                CurrentUser:gettersTypes.currentUser,
                isLoggedIn:gettersTypes.isLoggedIn,
                isAnonimus:gettersTypes.isAnonimus,
            })
        },
        methods:{
            logout(){
                return this.$store.dispatch('logout')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>