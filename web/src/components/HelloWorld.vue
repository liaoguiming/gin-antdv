<!--eslint-disable-->
<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div id="content">
      <router-view />
      <right-side></right-side>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import RightSide from '@/components/RightSide'
export default {
  name: 'App',
  components: {
    NavBar,
    RightSide
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f6f6f6;
  margin:  0 auto;
  top: 0;
}
#content {
  display: flex;
  margin: 0 auto;
  width: 1000px;
}
</style>
