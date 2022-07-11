<template>
  <all-pages></all-pages>
</template>

<script>
import AllPages from "./components/grade-resources/AllPages.vue";


export default {
	name: "App",
	components: {
    AllPages
	},
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Faustina&family=Merriweather&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Faustina&family=Merriweather&family=Tapestry&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Faustina', 'Merriweather', serif, sans-serif;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
