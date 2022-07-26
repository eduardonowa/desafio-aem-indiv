<template>
  <main class="main-container">
    <div class="right-main">
      <Title :titleText="textTitle" />
      <TextContent :contentText="textContent" />
      <ButtonType :buttonText="textButton" />
    </div>
  </main>
</template>

<script>
import Title from '../../micro/Title/Title.vue'
import TextContent from '../../micro/TextContent/TextContent.vue'

import ButtonType from '../../micro/ButtonType/ButtonType.vue'
export default {
  name: 'Main',
  components: {
    Title,
    TextContent,
    ButtonType
  },
  props: {
    textTitle: {
      type: String
    },
    textContent: {
      type: String
    },
    textButton: {
      type: String
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-left: 5vw;
  @media (max-width: 768px) {
    margin-left: 15px;
    width: 99%;
  }
  .right-main {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    gap: 10px;
  }
}
</style>
