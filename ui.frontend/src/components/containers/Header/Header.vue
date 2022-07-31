<template>
  <header
    :style="{
      'color': colorHeader,
      'justify-content': position,
      'font-family': fontFamily,
      'background': bgColor,
      'font-style': fontStyle,
      'display': showHeader,
      'font-size': formatFontSize
    }"
  >
    {{ text }}
  </header>
</template>

<script>
// Imports

export default {
  name: 'Header',
  props: {
    text: {
      type: String,
      default: '404 not found'
    },
    colorHeader: {
      type: String
    },
    position: {
      type: String
    },
    fontFamily: {
      type: String
    },
    bgColor: {
      type: String
    },
    fontStyle: {
      type: String
    },
    showHeader: {
      type: String
    },
    fontSize: {
      type: String,
      default: '24'
    }
  },
  computed: {
    formatFontSize () {
      return (this.fontSize) + 'px'
    }
  }
}
</script>

<style lang="scss" scooped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
header {
  display: flex;
  justify-content: flex-start;
  width: 90%;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333333;
  margin: 2vh 5vw;

  @media (max-width: 768px) {
    margin: 15px;
  }
}
</style>
