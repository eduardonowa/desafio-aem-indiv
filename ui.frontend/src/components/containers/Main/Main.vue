<template>
  <main class="main-container">
    <div class="right-main">
      <Title
        :titleText="textTitle"
        :fontFamily="fontFamilyTitle"
        :colorTitle="colorTitle"
        :fontStyle="fontStyleTitle"
      />
      <TextContent
        :contentText="textContent"
        :fontFamily="fontFamilyText"
        :fontStyle="fontStyleText"
        :colorText="colorText"
      />
      <ButtonType :buttonText="textButton" :colorButton="colorButton" :fontFamily="fontFamilyButton" :bgColor="bgColorButton"/>
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
    },
    fontFamilyText: {
      type: String
    },
    fontFamilyTitle: {
      type: String
    },
    fontFamilyButton: {
      type: String
    },
    colorTitle: {
      type: String
    },
    colorText: {
      type: String
    },
    fontStyleTitle: {
      type: String
    },
    fontStyleText: {
      type: String
    },
    bgColorButton: {
      type: String
    },
    colorButton: {
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
  width: 75%;
  margin-left: 5vw;
  @media (max-width: 768px) {
    margin: 0 auto 0 15px;
    width: 98%;
  }
  .right-main {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    gap: 10px;
  }
}
</style>
