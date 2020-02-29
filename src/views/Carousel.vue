<template>
  <div>
    <!--<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div v-bind:class="{'carousel-item':true, active:index==1}">
      <div class="d-block w-100" >
        <p>
          ksjadfkjdsaf
          sdfsldkflsdkjfldsf
          sdfldskflskdjfsd
          fdsfksdlfkdslkfjsd
          fdsflksdflkdsjflkj
        </p>
      </div>
    </div>
    <div v-bind:class="{'carousel-item':true, active:index==2}">
      <div class="d-block w-100" src="..." alt="First slide">
        <p>
          vksdkjvcxvcxoioidsdsfdsfsdf
          sdfsldkflsdkjfldsffsd
          fwefsfsdf
          sdfsldkflsdkjfldsffdsf
          sdfsldkflsdkjfldsffsds
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-block w-100" src="..." alt="First slide">3</div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" v-on:click=prev></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" v-on:click=next></span>
    <span class="sr-only">Next</span>
  </a>
</div>
-->

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-blank
      >
        <h1>sadsa</h1>
        <p>
          kdsjfdskjfhkjds dsfldskjfdslkfj
        </p></b-carousel-slide
      >

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1
    };
  },
  methods: {
    next() {
      this.index++;
    },
    prev() {
      this.index--;
    }
  }
};
</script>

<style scoped>
.carousel {
  background-color: black;
}
</style>
