<template>
    <Transition name="slide-fade">
        <div v-if="articleDetail" class="card details-card p-5 my-card-bg">
            <button  @click="$router.push('/')" style="height: 40px; width: 40px; margin: -30px; 0 0 -30px" class="rounded-circle btn btn-outline-dark d-flex align-items-center justify-content-center"><i class="fa-solid fa-arrow-left"></i></button>
            <div class="row gap-3 mt-4">
                <div class="col-md-2 col-sm-12 d-flex flex-column align-items-center gap-2">
                    <div style="height: 120px; width: 120px;" class="rounded-circle bg-dark d-flex align-items-center justify-content-center">
                        <span class="color-white">{{ articleDetail.author.username[0] }}</span>
                    </div>
                    <h5>{{ articleDetail.author.username}}</h5>
                </div>
                <div class="col-md-9 col-sm-12 description-container">
                    <div class="main-description">
                        <h2 class="product-category mb-0">{{articleDetail.author.username}}</h2>
                        <h4>{{articleDetail.title}}</h4>
                        <hr>
                        <p class="product-price fw-bold">{{articleDetail.description}}</p>
                        <hr>
                        <p class="product-description mb-4">
                            {{articleDetail.body}}
                        </p>
    
                        <hr>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                            <p class="product-title mt-4 mb-1">{{new Date(articleDetail.createdAt).toLocaleString('us')}}</p>
                            <p class="product-title mt-4 mb-1">{{new Date(articleDetail.updatedAt).toLocaleString('us')}}</p>
                        </div>
    
                    </div>
    
    
    
    
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState({
            articleDetail:state=>state.articles.articleDetail
        })
    },
}
</script>

<style lang="scss" scoped>

</style>