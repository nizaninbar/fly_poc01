<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1000"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <Slide v-bind:comp="{ name: 'Iron Man', id: 234 }" />
      <Slide v-bind:comp="{ name: 'Thor', id: 879 }" />
    </b-carousel>
  </div>
</template>

<script>
import Slide from "../components/Slide";
export default {
  data() {
    return {};
  },
  components: {
    Slide
  }
};
</script>

<style scoped>
.carousel {
  background-color: black;
}
</style>
