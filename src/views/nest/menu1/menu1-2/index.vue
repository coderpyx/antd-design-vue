<template>
  <div>
    <p style="padding-left:15px">嵌套菜单1-2</p>
    <transition name="left">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'menu1-2',
  data() {
    return {};
  }
};
</script>
