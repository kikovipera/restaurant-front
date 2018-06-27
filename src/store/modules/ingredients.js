import Api from '@/services/Api';

export default {
  namespaced: true,
  state: {
    list: [],
    ingredient: {}
  },
  getters: {

  },
  mutations: {
    setAllIngredients(state, ingredients){
      state.list = ingredients;
    },
    setIngredient(state, ingredient){
      state.ingredient = ingredient;
    }
  },
  actions: {
    async getIngredients({commit}){
      var response = await Api().get('ingredients');
      commit('setAllIngredients', response.data);
    },
    async addIngredient({commit}, newIngredient){
      await Api().post('ingredients', newIngredient);
    },
    async getIngredientById({commit}, id){
      var response = await Api().get('ingredients/'+id);
      commit('setIngredient', response.data);
    },
    async editIngredient({commit}, editedIngredient){
      await Api().put('ingredients/'+editedIngredient._id, editedIngredient);
    },
    async deleteIngredient({commit, dispatch}, id){
      await Api().delete('ingredients/'+id);
      dispatch('getIngredients');
    }
  }
}