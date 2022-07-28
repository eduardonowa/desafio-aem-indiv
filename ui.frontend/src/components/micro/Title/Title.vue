<template>
  <div class="title-container">
    <h1 :style="{ 'color': colorTitle , 'font-family': fontFamily , 'font-style': fontStyle}">
      {{ titleText }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    titleText: {
      type: String,
      default: 'I have bad news for you'
    },
    colorTitle: {
      type: String
    },
    fontFamily: {
      type: String
    },
    fontStyle: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
.title-container {
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 80px;
    letter-spacing: -0.035em;
    font-family: "Space Mono", monospace;
    color: #333333;
    @media (max-width: 1200px) {
      width: 90%;
      font-size: 45px;
      line-height: 65px;
      margin: 0;
    }
  }
}
</style>
