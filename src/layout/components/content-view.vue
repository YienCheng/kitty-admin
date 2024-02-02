<script setup lang="ts">
  import { type VNode, type ConcreteComponent } from 'vue';
  import { type RouteLocationNormalizedLoaded } from 'vue-router';

  defineOptions({ name: 'KaContentView' });

  const props = defineProps<{ include: string[] }>();
  const cacheRoutes = props.include;

  // 用来缓存已经加载过的路由
  const cachedMap = new Map<string, VNode>();
  const cachedSet = new Set<string>();

  const getComponent = (vNode: VNode, route: RouteLocationNormalizedLoaded) => {
    const comp = vNode.type as ConcreteComponent;
    const name = comp.name;
    const fullPath = route.fullPath;
    const hasComponentName = name ? cacheRoutes.includes(name) : false;

    // 不需要缓存的场景：未定义组件name || 该组件所在路由不需要缓存
    if (!name || !hasComponentName) return vNode;

    // 需要缓场景
    const cache = cachedMap.get(fullPath);

    // 取到缓存直接返回缓存
    if (cache) return cache;


    // 未取到缓存：先判断该组件(路由)是否已经加载过，未加载过返回此组件 加载过重新生成新的实例
    const hasCache = cachedSet.has(name);
    let c: VNode;

    if (hasCache) {
      c = {
        ...vNode,
        type: {
          name: `${name}$${fullPath}`,
          ...comp,
        },
      };
    } else {
      cachedSet.add(name);
      c = vNode;
    }
    cachedMap.set(fullPath, c);
    return c;
  };

  // 监听需要缓存路由数组的变化，动态改变缓存的组件和名称
  watch(cacheRoutes, (value) => {
    [...cachedSet].forEach(
      (name) => !value.includes(name) && cachedSet.delete(name)
    );
    [...cachedMap.keys()].forEach((key) => {
      const vNode = cachedMap.get(key) as VNode;
      const comp = vNode.type as ConcreteComponent;
      const name = comp.name as string;
      !value.includes(name) && cachedMap.delete(key);
    });
  });
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="cacheRoutes">
      <component :is="getComponent(Component, route)" />
    </keep-alive>
  </router-view>
</template>
