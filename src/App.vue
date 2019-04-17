<template>
  <div id="app">
    <h1 id="site-header">Game of Thrones</h1>
    <h2 id="site-subheader">Death Pool</h2>
    <div id="nav">
      <router-link to="/scoreboard">Scoreboard</router-link> |
      <router-link to="/comparison">Comparison</router-link> |
      <router-link to="/characters">Character Status</router-link>
    </div>
    <router-view class="inner-content" />
  </div>
</template>

<style lang="scss">
body {
  background-color: #0e0b16;
  color: #db5461;
}
#app {
  font-family: "Cinzel Decorative", cursive;
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
}
#site-header {
  background-color: #0e0b16;
  margin: 0;
  text-align: center;
}
#site-subheader {
  background-color: #0e0b16;
  color: #db5461;
  margin: 0;
  text-align: center;
}
#nav {
  background-color: #db5461;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #e7dfdd;
  margin-top: 2rem;
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #f7b267;
    &.router-link-exact-active {
      color: #e7dfdd;
    }
  }
}
.inner-content {
  background-color: rgb(231, 223, 221);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1rem;
}
</style>
