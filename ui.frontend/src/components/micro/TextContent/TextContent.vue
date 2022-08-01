<template>
  <div class="text-container">
    <p :style="{ 'color': colorText , 'font-family': fontFamily , 'font-style': fontStyle , 'display': showText , 'font-size': formatFontSize}">
      {{ contentText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    contentText: {
      type: String,
      default:
        'The page you are looking for might be removed or is temporarily unavailable'
    },
    colorText: {
      type: String
    },
    fontFamily: {
      type: String
    },
    fontStyle: {
      type: String
    },
    showText: {
      type: String
    },
    fontSize: {
      type: String,
      default: '22'
    }
  },
  computed: {
    formatFontSize () {
      return (this.fontSize) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
.text-container {
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
  p {
    font-family: "Space Mono", monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
    @media (max-width: 1200px) {
      line-height: 25px;
    }
  }
}
</style>
