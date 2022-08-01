<template>
  <main class="main-container">
    <div class="left-main" :style="{ 'display': showImage }">
      <ImgType :imgSource="srcImg" :imgDescription="altImg" />
    </div>
    <div class="right-main">
      <Title
        :titleText="textTitle"
        :fontFamily="fontFamilyTitle"
        :colorTitle="colorTitle"
        :fontStyle="fontStyleTitle"
        :fontSize="fontSizeTitle"
        :showTitle="showTitleMain"
      />
      <TextContent
        :contentText="textContent"
        :fontFamily="fontFamilyText"
        :fontStyle="fontStyleText"
        :colorText="colorText"
        :showText="showTextMain"
        :fontSize="fontSizeText"
      />
      <ButtonType
        :buttonText="textButton"
        :colorButton="colorButton"
        :fontFamily="fontFamilyButton"
        :bgColor="bgColorButton"
        :showButton="showButtonMain"
        :fontSize="fontSizeButton"
        :borderRadius="borderRadiusButton"
      />
    </div>
  </main>
</template>

<script>
import Title from '../../micro/Title/Title.vue'
import TextContent from '../../micro/TextContent/TextContent.vue'
import ButtonType from '../../micro/ButtonType/ButtonType.vue'
import ImgType from '../../micro/ImgType/ImgType.vue'
export default {
  name: 'Main',
  components: {
    Title,
    TextContent,
    ButtonType,
    ImgType
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
    },
    srcImg: {
      type: String,
      default: '/content/dam/vue/scarecrow.png'
    },
    altImg: {
      type: String,
      default: 'Scarecrow'
    },
    showTitleMain: {
      type: String
    },
    showTextMain: {
      type: String
    },
    showButtonMain: {
      type: String
    },
    fontSizeButton: {
      type: String,
      default: '14'
    },
    fontSizeText: {
      type: String,
      default: '22'
    },
    fontSizeTitle: {
      type: String,
      default: '60'
    },
    borderRadiusButton: {
      type: String,
      default: '0'
    },
    showImage: {
      type: String
    }
  }
}
</script>

<style lang="scss">
@import "./Main.scss";
</style>
