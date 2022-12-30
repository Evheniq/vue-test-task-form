<template>
  <div class="title">{{ title }}</div>
  <input type="checkbox" />
</template>

<script>
export default {
  name: "CheckboxInput",
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 16px;
  padding-top: 10px;
}

input {
  padding: 100px;
}
</style>
