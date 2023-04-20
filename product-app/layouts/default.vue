<template>
    <div>
      <header class='shadow-sm bg-white'>
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/">AppBuy</NuxtLink>
          <ul class='flex gap-4'>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            <li><NuxtLink to="/products/abc">Products Exc</NuxtLink></li>
          </ul>
        </nav>
      </header>
  
      <!-- body (page content) -->
      <div class='container mx-auto p-4'>
        <!-- <slot name="default" v-bind:defaultSlot="defaultSlot" /> -->
        <slot />
      </div>
    </div>
  </template>
  
  <!-- <script>
  export default {
    methods: {
      defaultSlot() {
        return this.$slots.default();
      },
    },
  };
  </script> -->
  
  <style scoped>
  .router-link-exact-active {
    color: green;
  }
  </style>
  