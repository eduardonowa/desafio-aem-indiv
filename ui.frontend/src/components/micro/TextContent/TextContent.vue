<template>
  <p>{{ contentText }}</p>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    contentText: {
      type: String,
      default:
        'The page you are looking for might be removed or is temporarily unavailable'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
p {
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #4f4f4f;
}
</style>
