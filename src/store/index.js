import { createStore } from 'vuex'
import auth from '../moduls/auth'
import articles from '../moduls/articles'
import control from '../moduls/control'

// Create a new store instance.
const store = createStore({
  modules:{
    auth,
    articles,
    control,
  }
})


export default store