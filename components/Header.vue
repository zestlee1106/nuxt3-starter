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
type User = {
  name: string;
  age: Number;
};

const isDark = ref<Boolean>(true);

const changeTheme = () => {
  isDark.value = !isDark.value;
};

const user = ref<User | null>(null);
const { data } = await useCustomFetch<User>("/test");
user.value = data.value;

defineExpose({ changeTheme, isDark });
</script>

<style lang="scss" scoped></style>
