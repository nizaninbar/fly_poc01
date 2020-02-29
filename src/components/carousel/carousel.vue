<template>
  <div>
    <slot>123</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: []
    };
  },
  mounted() {
    this.slides = this.$children;
  }
};
</script>
