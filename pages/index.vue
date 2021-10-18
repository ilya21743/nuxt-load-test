<template>
  <main>
    <div v-for="category in categories">{{ category.title }}</div>
  </main>
</template>

<script>
export default {
  async fetch() {
    if (this.$store.getters['categories/categories'].length === 0) {
      await this.$store.dispatch('categories/fetch')
    }
  },
  computed: {
    categories() {
      return this.$store.getters['categories/categories']
    },
  }
}
</script>
