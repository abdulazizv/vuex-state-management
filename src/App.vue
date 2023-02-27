<template>
  <header class="bg-cyan-700">
    <div class="container mx-auto">
    <nav class="bg-cyan-700 h-[75px] flex justify-between px-4 items-center">
      <a href="#" class="text-white text-2xl">VUE-ROUTER</a>
      <ul class="flex w-3/12 justify-between">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/post">Post</RouterLink></li>
        <li><RouterLink to="/user">Users</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </nav>
  </div>
  </header>
  <main>
    <section class="main">
      <div class="container mx-auto px-5">
          <RouterView />
      </div>
    </section>
  </main>
  <footer class="bg-cyan-800 text-white p-5 text-center">
    <div class="container mx-auto">
      VUE-ROUTER
    </div>
  </footer>
</template>
<script>
import { RouterView,RouterLink } from 'vue-router';
export default {
  name:'App'
}
</script>
<style lang="css">
  .router-link-active {
    font-weight: bold;
    text-decoration: underline;
    color: white  ;
    font-size: larger;
  }
  .main {
    min-height: calc(100vh - 75px - 75px);
  }
</style>