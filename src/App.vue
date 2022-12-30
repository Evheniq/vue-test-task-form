<template>
  <FormPage />
</template>

<script>
import FormPage from "@/views/FormPage.vue"

export default {
  components: { FormPage },
}
</script>

<style lang="scss">
//@import "./assets/scss/font";
@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/Roboto-Regular.ttf") format("ttf");
}

* {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
}
</style>
