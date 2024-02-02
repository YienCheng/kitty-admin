<template>
  <el-button @click="goBack">返回首页</el-button>
  <div>
    user: {{ route.fullPath }}
    <el-input v-model="value"></el-input>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter();
  const route = useRoute();

  defineOptions({
    name: 'KaUser',
  });

  const goBack = () => {
    router.push({ name: 'Home' });
  };

  const value = ref('');
</script>
