<template>
  <div>
    <button
      :style="{
        'color': colorButton,
        'background': bgColor,
        'font-family': fontFamily,
        'display': showButton,
        'font-size': formatFontSize,
        'border-radius': formatBorderRadius
      }"

    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonType',
  props: {
    buttonText: {
      type: String,
      default: 'back to homepage'
    },
    colorButton: {
      type: String
    },
    bgColor: {
      type: String
    },
    fontFamily: {
      type: String
    },
    showButton: {
      type: String
    },
    fontSize: {
      type: String,
      default: '14'
    },
    borderRadius: {
      type: String,
      default: '0'
    }

  },
  computed: {
    formatFontSize () {
      return (this.fontSize) + 'px'
    },
    formatBorderRadius () {
      return (this.borderRadius) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
button {
  width: 216px;
  height: 68px;
  background: #333333;
  color: #fff;
  font-family: "Space Mono", monospace;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  border: none;

  @media (max-width: 300px) {
    width: 190px;
    height: 55px;
  }
}
</style>
