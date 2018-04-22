<template>
  <div>
    <h1>{{msg}}</h1>
    <table>
      <tr>
        <th></th>
        <th>mac</th>
        <th>PC</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.directive}}</td>
        <td>{{item.macInstruction}}</td>
        <td>{{item.pcIntstruction}}</td>
      </tr>
    </table>
    <ul>
      <li>
        <router-link to='/cheat-sheet'>Back to Cheat Sheets</router-link>
      </li>
      <li>
        <router-link to='/'>Home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KeyboardShortcutsCheatSheet',
  // eslint-disable-next-line
  data() {
    return {
      msg: 'Keyboard Shortcuts Cheat Sheet',
      items: [
        {
          directive: 'Refresh a page',
          macInstruction: 'command + R',
          pcIntstruction: 'PCTBD'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
table {
  display: inline-block;
  margin: 0 10px;
}
td {
  padding: 2vw;
}
tr:hover {
  cursor: pointer;
}
tr:first-child:hover {
  background-color: rgba(66, 185, 131, 0.03);
}
tr:not(:first-child):hover {
  background-color: rgba(66, 185, 131, 0.1);
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
