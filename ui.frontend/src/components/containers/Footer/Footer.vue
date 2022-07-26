<template>
  <footer>
    <p>
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
      type: URL,
      default: 'https://github.com/eduardonowa'
    },
    hrefCompany: {
      type: URL,
      default: 'https://compass.uol/'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

footer {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
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
      text-decoration: none;
      &:hover {
        color: #8d8d8d;
      }
    }
  }
}
</style>
