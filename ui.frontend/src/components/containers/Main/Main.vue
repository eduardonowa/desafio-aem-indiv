<template>
  <main class="main-container">
    <div class="left-main">
      <Image :src="imgUrl" />
    </div>
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
import Image from '../../micro/Image/Image.vue'
import ButtonType from '../../micro/ButtonType/ButtonType.vue'
export default {
  name: 'Main',
  components: {
    Title,
    TextContent,
    Image,
    ButtonType
  },
  props: {
    imgUrl: {
      type: String
    },
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
  height: 100vh;
}

main {
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0px;

  .left-main {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-main {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    gap: 10px;
  }
}
</style>
