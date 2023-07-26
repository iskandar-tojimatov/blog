import ArticleService from "../service/articles"

const state={
    isLoading:false,
    errors:null,
}

const mutations={
    createArticleStart(state){
        state.isLoading=true,
        state.errors=null
    },
    createArticleSuccess(state){
        state.isLoading=false
    },
    createArticleFailur(state, payload){
        state.isLoading=false
        state.errors=payload

    },
}


const actions ={
   createArticle(context, article){
    return new Promise((resolve,reject)=>{
        context.commit('createArticleStart')
        ArticleService.createArticle(article)
        .then((response)=>{
            context.commit('createArticleSuccess')
            console.log('Create article success')
            resolve(response)
        })
        .catch((error)=>{
            context.commit('createArticleFailur', error.response.data.errors)
            reject(error.response.data.errors)
        })
    })
   },
   deleteHandler(context, slug){
    return new Promise((resolve)=>{
        context.commit('createArticleStart')
        ArticleService.deleteArticle(slug)
        .then((r)=>{
            context.commit('createArticleSuccess')
            resolve(r)
        })
        .catch(e=>{
            context.commit('createArticleFailur')
            console.log(e);
        })
    })
    },
    updateArticle(context, data){
        return new Promise((resolve,reject)=>{
            context.commit('createArticleStart')
            ArticleService.updateArticle(data.article, data.slug)
            .then(()=>{
                context.commit('createArticleSuccess')
                resolve()
            })
            .catch((e)=>{
                context.commit('createArticleFailur')
                reject(e)
            })
        })
        }
}


export default{
    state,
    mutations,
    actions,
}