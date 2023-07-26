import { removeItem, setItem } from '../helpers/persisteneStorage'
import AutoService from '../service/auth'
import { gettersTypes } from './gettersTyps'

const state={
    isLoading:false,
    user:null,
    error:null,
    isLoggedIn:null,
}

const getters={
    [gettersTypes.currentUser]: state=>{
        return state.user
    },
    [gettersTypes.isLoggedIn]:state=>{
        return Boolean(state.isLoggedIn)
    },
    [gettersTypes.isAnonimus]: state=>{
        return state.isLoggedIn===false
    }
}

const mutations={

    registerStart(state){
        state.isLoading=true,
        state.user=null
        state.error=null
        state.isLoggedIn=null
    },
    registerSuccess(state, payload){
        state.isLoading=false
        state.user=payload
        state.isLoggedIn=true


    },
    registerFailur(state, payload){
        state.isLoading=false
        state.error=payload
        state.isLoggedIn=false

    },
    loginStart(state){
        state.isLoading=true,
        state.user=null
        state.error=null
        state.isLoggedIn=null

    },
    loginSuccess(state, payload){
        state.isLoading=false
        state.user=payload
        state.isLoggedIn=true


    },
    loginFailur(state, payload){
        state.isLoading=false
        state.error=payload
        state.isLoggedIn=false

    },
    currentUserStart(state){
        state.isLoading=true
    },
    currentUserSuccess(state, payload){
        state.isLoading=false
        state.user=payload
        state.isLoggedIn=true


    },
    currentUserFailur(state){
        state.isLoading=false
        state.user=null
        state.isLoggedIn=false

    },

    logout(state){
        state.isLoggedIn=false,
        state.user=null
    }
}


const actions ={
    register(context, user){
        return new Promise((resolve,reject)=>{
            context.commit('registerStart')
            AutoService.register(user)
            .then(response=>{
                context.commit('registerSuccess',response.data.user)
                setItem('token', response.data.user.token)
                resolve(response.data.user)
            })
            .catch(error=>{
                context.commit('registerFailur',error.response.data.errors)
                reject(error.response.data.errors)

            })

        })
    },
    login(context, user){
        return new Promise((resolve,reject)=>{
            context.commit('loginStart')
            AutoService.login(user)
            .then(response=>{
                context.commit('loginSuccess',response.data.user)
                setItem('token', response.data.user.token)
                resolve(response.data.user)
            })
            .catch(error=>{
                context.commit('loginFailur',error.response.data.errors)
                reject(error.response.data.errors)

            })

        })
    },
    getUser(context){
        return new Promise((resolve)=>{
            context.commit('currentUserStart')
            AutoService.getUser()
            .then(response=>{
                context.commit('currentUserSuccess',response.data.user)
                resolve(response.data.user)
            })
            .catch(error=>{
                context.commit('currentUserFailur')
            })

        })
    },
    logout(context){
        context.commit('logout')
        removeItem('token')
    }
}


export default{
    state,
    mutations,
    actions,
    getters,
}