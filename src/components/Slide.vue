<template>
  <div>
    <b-carousel-slide img-blank>
      <h1>{{ comp.name }}</h1>
      <span>Email:</span><span>{{ comp.email }}</span>
    </b-carousel-slide>
  </div>
</template>

<script>
export default {
  data() {
    return { v: "pokpok" };
  },
  props: ["comp"]
};
</script>
