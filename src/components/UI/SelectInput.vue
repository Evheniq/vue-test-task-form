<template>
  <div
    v-if="!selectedTitle && title"
    style="padding-top: 10px; font-size: 16px"
  >
    {{ title }}
  </div>
  <select :multiple="multiple" name="select" @change="changeSelect">
    <option
      v-if="selectedTitle && title"
      :selected="selectedTitle"
      :disabled="selectedTitle"
      value=""
    >
      {{ title }}
    </option>
    <option v-for="item in itemsToSelect" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    title: {
      type: String,
    },
    itemsToSelect: {
      type: Array,
      required: false,
    },
    multiple: { type: Boolean, default: false },
    selectedTitle: { type: Boolean, default: true },
    // emits: {
    //   "add-ticker": value => typeof value === "string" && value.length > 0
    // },
  },
  methods: {
    changeSelect(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/screen-sizes";

select {
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #bcbcbc;
  background: #fbfbfb;

  @media screen and (min-width: $x-large) {
    //padding: 10px 5px;
    width: 100%;
  }
}
</style>
