<template>
  <img :src="imgSource" :alt="imgDescription" />
</template>

<script>
export default {
  name: 'ImgType',
  props: {
    imgSource: {
      type: String,
      default: '/content/dam/vue/scarecrow.png'
    },
    imgDescription: {
      type: String,
      default: 'Espantalho'
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 45vw;
  max-height: 50vh;

  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 80%;
  }
}
</style>
