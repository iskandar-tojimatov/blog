import ArticleService from "../service/articles"

const state={
    isLoading:false,
    error:null,
    data:null,
    articleDetail:null
}

const getters = {
    getArticle: state => state.articleDetail
}

const mutations={
    getArticleStart(state){
        state.isLoading=true,
        state.error=null,
        state.data=null,
        state.articleDetail=null
    },
    getArticleSuccess(state, payload){
        state.isLoading=false,
        state.data=payload
    },
    getArticleFailur(state, payload){
        state.isLoading=false,
        state.error=payload
    },
    getArticleDetailStart(state){
        state.isLoading=true,
        state.error=null,
        state.data=null,
        state.articleDetail=null
    },
    getArticleDetailSuccess(state, payload){
        state.isLoading=false,
        state.articleDetail=payload
    },
    getArticleDetailFailur(state, payload){
        state.isLoading=false,
        state.error=payload
    },
}


const actions ={
    articles(context){
        return new Promise((resolve)=>{
            context.commit('getArticleStart')
            ArticleService.articles()
            .then(response=>{
                resolve(response)
                context.commit('getArticleSuccess', response.data.articles)
            })
            .catch(e=>{
                context.commit('getArticleFailur', e)
            })
        })
    },
    articleDetail(context, slug){
        return new Promise((resolve)=>{
            context.commit('getArticleDetailStart')
            ArticleService.articlesDetail(slug)
            .then(response=>{
                context.commit('getArticleDetailSuccess', response.data.article)
                resolve(response.data.article, slug)
            })
            .catch(e=>{
                context.commit('getArticleDetailFailur', e)
            })
        })
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}