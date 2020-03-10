<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button v-on:click="getContacts()" value="go">lets go</button>

    <div v-for="contact in contacts" :key="contact">
      {{ contact.FullName }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataService from "@/components/DataService";

export default {
  data() {
    return {
      contacts: [{ FullName: "not set" }]
    };
  },
  name: "Home",
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
