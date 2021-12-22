<template>
  <div id="app">
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated animate__bounceOutRight"
      >
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>


 
