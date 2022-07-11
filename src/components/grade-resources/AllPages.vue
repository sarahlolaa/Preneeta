<template>
  <div class="w-full h-screen flex">
    <navigation-tab></navigation-tab>
    <main class="w-3/4 overflow-scroll">
      <router-view></router-view>
    </main>
  </div>
  
</template>

<script>
// import "./assets/tailwind.css";
// import NavigationTab from "././layouts/NavigationTab.vue";
import NavigationTab from "../layouts/NavigationTab.vue"


export default {
	components: {
    NavigationTab
	},
};
</script>