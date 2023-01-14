<template>
  <ul class="flex">
    <li class="mr-6">
      <NuxtLink
        class="text-blue-500 hover:text-blue-800"
        to="/"
        data-testid="home"
        >Home</NuxtLink
      >
      <button @click="changeTheme()" data-test="changeThemeButton">
        테마바꾸기
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
const isDark = ref<Boolean>(true);

const changeTheme = () => {
  isDark.value = !isDark.value;
};

defineExpose({ changeTheme, isDark });
</script>

<style lang="scss" scoped></style>
