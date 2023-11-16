<script setup lang="ts">
type User = {
  name: string
  age: Number
}

const isDark = ref<Boolean>(true)

const changeTheme = () => {
  isDark.value = !isDark.value
}

// const user = ref<User | null>(null)
// const { data } = await useCustomFetch<User>('/test')
// user.value = data.value

// await defineExpose({ changeTheme, isDark })
</script>

<template>
  <ul class="flex">
    <li class="mr-6">
      <NuxtLink class="text-blue-500 hover:text-blue-800" to="/one" data-testid="home">
        one
      </NuxtLink>
      <NuxtLink class="text-blue-500 hover:text-blue-800" to="/two" data-testid="home">
        two
      </NuxtLink>
      <button data-test="changeThemeButton" @click="changeTheme()">changeTheme</button>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
