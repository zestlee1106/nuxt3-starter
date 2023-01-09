<template>
  <ul class="flex">
    <li class="mr-6">
      <NuxtLink
        class="text-blue-500 hover:text-blue-800"
        to="/"
        data-testid="home"
        >Home</NuxtLink
      >
    </li>

    <li class="mr-6">
      <NuxtLink
        class="text-blue-500 hover:text-blue-800"
        to="/one"
        data-testid="one"
        >one</NuxtLink
      >
    </li>
    <li class="mr-6">
      <NuxtLink
        class="text-blue-500 hover:text-blue-800"
        to="/two"
        data-testid="two"
        >two</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup></script>

<style lang="scss" scoped></style>
