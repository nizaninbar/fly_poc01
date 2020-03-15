<template>
  <div>
    <div>
      <input
        type="text"
        placeholder="סנן"
        v-model="filterText"
        v-on:keyup="filterContacts"
      />
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1000"
      img-height="100"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <Slide
        v-for="contact in displayContacts"
        v-bind:key="contact.FullName"
        v-bind:comp="{ name: contact.FullName, email: contact.EMailAddress1 }"
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
      contacts: [{ FullName: "Empty", EMailAddress1: "" }],
      displayContacts: [],
      filterText: ""
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
      this.displayContacts = this.contacts;
    },
    filterContacts() {
      this.displayContacts = this.contacts.filter(
        item => item.FullName.indexOf(this.filterText) > -1
      );
    }
  }
};
</script>

<style scoped>
.carousel {
  background-color: black;
}
</style>
