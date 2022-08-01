<template>
  <header
    :style="{
      color: colorHeader,
      'justify-content': position,
      'font-family': fontFamily,
      background: bgColor,
      'font-style': fontStyle,
      display: showHeader,
      'font-size': formatFontSize,
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
      return this.fontSize + 'px'
    }
  }
}
</script>

<style lang="scss" scooped>
@import "./Header.scss";
</style>
