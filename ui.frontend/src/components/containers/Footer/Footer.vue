<template>
  <footer :style="{ 'justify-content': position, 'background': bgColor , 'display': showFooter }">
    <p
      :style="{
        'color': color,
        'font-family': fontFamily ,  'font-style': fontStyle,
        'font-size': formatFontSize
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
      return (this.fontSize) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

footer {
  position: absolute;
  bottom: 15px;
  width: 90%;
  height: 70px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  @media (max-height: 900px) {
    position: static;
  }
  @media (max-width: 1200px) {
    margin-top: 30px;
  }
  @media (max-width: 900px) {
    margin-top: 100px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #bdbdbd;

    a,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
    }
    .ref {
      font-weight: bold;
      &:hover {
        color: #8d8d8d;
      }
    }

    .ref-company {
      font-weight: bold;
      text-decoration: none;
      &:hover {
        color: #8d8d8d;
      }
    }
  }
}
</style>
