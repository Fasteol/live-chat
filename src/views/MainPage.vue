<template>
  <Drawer />
  <div>hello guys</div>
  <input type="text" v-model="inputMessage">
  <button @click="sendMessage"></button>
</template>

<script>
import Drawer from "../components/Drawer.vue";
export default {
  components: { Drawer },
  methods: {
    sendMessage(){
    }
  }
};
</script>


<style></style>
