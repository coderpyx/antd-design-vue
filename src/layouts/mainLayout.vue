<template>
  <div class="paddingBox-container  border-box">
    <transition
      name="custom-classes-transition">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'paddingBox',
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.paddingBox-container {
  padding: 24px;
  background: #f0f2f5;
}
</style>
