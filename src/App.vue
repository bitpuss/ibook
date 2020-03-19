<template>
  <div id="app">

    <div class="buttons">
      <b-button type="is-primary">Primary</b-button>

      <b-button type="is-success">Success</b-button>

      <b-button type="is-danger">Danger</b-button>

      <b-button type="is-warning">Warning</b-button>

      <b-button type="is-info">Info</b-button>

      <b-button type="is-link">Link</b-button>

      <b-button type="is-light">Light</b-button>

      <b-button type="is-dark">Dark</b-button>

      <b-button type="is-text">Text</b-button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
