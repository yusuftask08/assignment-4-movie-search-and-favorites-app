<template>
  <header>
    <navBar />
  </header>
  <router-view></router-view>
</template>

<script>
import navBar from "@/components/navBar";

export default {
  components: {
    navBar,
  },
};
</script>