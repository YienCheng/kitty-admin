<script setup lang="ts">
  import LoginPanel from './components/login-panel.vue';

  defineOptions({
    name: 'KaLogin',
  });
</script>

<template>
  <div class="wh-full flex-center">
    <login-panel> </login-panel>
  </div>
</template>
