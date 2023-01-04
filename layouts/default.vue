<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  setup() {
    console.log(
      "%c 🤩🤩🤩 영우의 로그 test: ",
      "font-size: x-large; color: #bada55;",
      ""
    );

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
