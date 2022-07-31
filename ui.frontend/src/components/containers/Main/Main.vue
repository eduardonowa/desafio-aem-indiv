<template>
  <main class="main-container">
    <div class="left-main">
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
      default: '/content/dam/vue/espantalho.png'
    },
    altImg: {
      type: String,
      default: 'Espantalho'
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
  width: 95%;
  height: 100%;
  margin-top: 100px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    margin: 0 auto 0 15px;
    width: 98%;
  }
  .left-main {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 50px;
    }
  }
  .right-main {
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    gap: 10px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
