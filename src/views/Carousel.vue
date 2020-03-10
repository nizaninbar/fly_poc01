<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1000"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <Slide
        v-for="contact in contacts"
        v-bind:key="contact.FullName"
        v-bind:comp="{ name: contact.FullName, id: 234 }"
      />
    </b-carousel>
  </div>
</template>

<script>
import Slide from "../components/Slide";
import DataService from "../components/DataService";

export default {
  data() {
    return {
      contacts: [{ FullName: "Empty" }]
    };
  },
  components: {
    Slide
  },
  created() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      DataService.getContacts(this.setContacts);
    },
    setContacts(data) {
      this.contacts = data;
    }
  }
};
</script>

<style scoped>
.carousel {
  background-color: black;
}
</style>
