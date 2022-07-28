<template>
  <div class="img-container">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.img-container {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95%;
    margin-top: 50px;
  }
  img {
    margin-top: 100px;
    width: 50vw;
    max-height: 40vh;
    @media (max-width: 1200px) {
      margin-top: 0px;
      width: 75%;
      height: 75%;
    }
  }
}
</style>
