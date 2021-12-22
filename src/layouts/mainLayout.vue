<template>
  <div class="paddingBox-container  border-box">
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated animate__bounceOutRight">
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
