<template>
  <div>
    <Header/>
    <h2>{{msg}}</h2>
    <ul>
      <li>
        <router-link to='/cmd-line'>Command Line</router-link>
      </li>
      <li>
        <router-link to='/keybindings'>Keyboard Shortcuts</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'CheatSheet',
  components: {Header},
  // eslint-disable-next-line
  data() {
    return {
      msg: 'Cheat Sheets'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
