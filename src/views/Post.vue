<template>
  <div>
    <h1 class="text-center m-5 font-bold uppercase text-2xl">Post</h1>

    <ul class="shadow-lg w-2/3 mx-auto p-5 border" v-if="isLoading">
      <li v-for="item in post" class="shadow">
        <RouterLink
          class="shadow p-4 my-1 border block"
          :to="`/post/${item.id}`"
          >{{ item.id }} {{ item.title }}</RouterLink
        >
      </li>
    </ul>
    <span
      class="loader text-center items-center ml-[600px] mt-12"
      v-else="isLoading"
    ></span>
  </div>
</template>
<script>
import axios from "../service/axios";
import { RouterLink } from "vue-router";
export default {
  name: "post",
  data() {
    return {
      post: [],
      isLoading: false,
    };
  },
  methods: {
    async getPost() {
      try {
        const response = await axios.get("/posts");
        if (response.status == 200) {
          console.log(response.data);
          this.isLoading = true;
          this.post = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>
<style lang="css">
.loader {
  width: 84px;
  height: 84px;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #ff3d00;
  animation: push 1s infinite linear alternate;
}
.loader:after {
  top: auto;
  bottom: 0;
  left: 0;
  background: #fff;
  animation-direction: alternate-reverse;
}
@keyframes push {
  0% {
    width: 14px;
    height: 14px;
  }
  100% {
    width: 84px;
    height: 84px;
  }
}
</style>
