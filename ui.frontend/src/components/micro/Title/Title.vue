<template>
  <div>
    <h1>{{ titleText }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    titleText: {
      type: String,
      default: "I have bad news for you",
    },
  },
};
</script>

<style lang="scss" scooped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
h1 {
  font-weight: 700;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;
  font-family: "Space Mono", monospace;
  color: #333333;
}
</style>
