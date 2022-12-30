<template>
  <input
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
    type="text"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/screen-sizes";

input {
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #bcbcbc;
  background: #fbfbfb;

  @media screen and (min-width: $x-large) {
    width: 100%;
  }
}
</style>
