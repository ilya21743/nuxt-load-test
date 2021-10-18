export const state = () => ({
    categories: []
})

export const mutations = {
    setCategories(state, categories) {
        state.categories = categories
    }
}

export const actions = {
    async fetch({commit}) {
        const categories = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
        // const categories = [];

        commit('setCategories', categories)
    }
}

export const getters = {
    categories: s => s.categories
}
