<template>
  <footer
    :style="{
      'justify-content': position,
      background: bgColor,
      display: showFooter,
    }"
  >
    <p
      :style="{
        color: color,
        'font-family': fontFamily,
        'font-style': fontStyle,
        'font-size': formatFontSize,
      }"
    >
      created by <a target="blank" :href="href" class="ref">{{ username }}</a> -
      <a target="blank" :href="hrefCompany" class="ref-company">{{
        company
      }}</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    username: {
      type: String,
      default: 'eduardonowa'
    },
    company: {
      type: String,
      default: 'Compass.UOL'
    },
    href: {
      type: String,
      default: 'https://github.com/eduardonowa'
    },
    hrefCompany: {
      type: String,
      default: 'https://compass.uol/'
    },
    color: {
      type: String
    },
    fontFamily: {
      type: String
    },
    position: {
      type: String
    },
    bgColor: {
      type: String
    },
    fontStyle: {
      type: String
    },
    showFooter: {
      type: String
    },
    fontSize: {
      type: String,
      default: '14'
    }
  },
  computed: {
    formatFontSize () {
      return this.fontSize + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>
