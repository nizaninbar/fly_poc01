<template>
  <div>
    <b-carousel-slide img-blank>
      <h1>{{ comp.name }}</h1>
      <span>id:</span><span>{{ comp.id }}</span>
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
