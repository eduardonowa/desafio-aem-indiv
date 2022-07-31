<template>
  <div class="img-container">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String,
      default: '/content/dam/vue/scarecrow.png'
    },
    alt: {
      type: String,
      default: 'Scarecrow'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
