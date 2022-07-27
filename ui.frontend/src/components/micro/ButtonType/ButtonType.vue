<template>
  <div>
    <button
      :style="{
        color: colorButton,
        'background-color': bgColor,
        'font-family': fontFamily,
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
  @media (max-width: 300px) {
    width: 190px;
    height: 55px;
  }
  &:hover {
    border: 2px solid #333333;
    color: #333333;
    background: #fff;
    transition: 1s;
  }
  &:not(:hover) {
    transition: 1s;
  }
}
</style>
