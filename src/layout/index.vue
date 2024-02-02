<script setup lang="ts">
  import ContentView from './components/content-view.vue';

  defineOptions({
    name: 'KaLayout',
  });

  const cacheRoutes = ref<string[]>(['Home', 'User']);
</script>

<template>
  <div>
    <router-link :to="{ path: '/user', query: { name: '1' } }">用户1</router-link>
    <router-link :to="{ path: '/user', query: { name: '2' } }">用户2</router-link>
    <div>
      <content-view :include="cacheRoutes"></content-view>
    </div>
  </div>
</template>
