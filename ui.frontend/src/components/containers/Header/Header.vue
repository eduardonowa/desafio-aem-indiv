<template>
  <header>
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
    }
  }
}
</script>

<style lang="scss" scooped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
header {
  width: 100%;
  font-family: "Inconsolata", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333333;
}
</style>
