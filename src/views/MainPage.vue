<template>
  <Drawer />
  <div class="h-full">
    <div>
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div class="chat-bubble">I hate you!</div>
        <div class="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>

    <div class="join w-full px-12">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full grow w-full"
      />
      <div class="indicator">
        <button class="btn join-item">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import Drawer from "../components/Drawer.vue";
export default {
  components: { Drawer },
  methods: {
    sendMessage() {},
  },
};
</script>

<style></style>
