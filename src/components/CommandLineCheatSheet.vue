<template>
  <div>
    <h1>{{msg}}</h1>
    <table>
      <tr>
        <th></th>
        <th>mac</th>
        <th>PC</th>
        <th>Examples</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.directive}}</td>
        <td>{{item.macInstruction}}</td>
        <td>{{item.pcIntstruction}}</td>
        <td>{{item.example}}</td>
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
  name: 'CommandLineCheatSheet',
  // eslint-disable-next-line
  data() {
    return {
      msg: 'Command Line Cheat Sheet',
      items: [
        {
          directive: 'Change Directory',
          macInstruction: 'cd',
          pcIntstruction: 'PCTBD',
          example: 'cd .. //to go back one folder'
        },
        {
          directive: 'Print Working Directory',
          macInstruction: 'pwd',
          pcIntstruction: 'PCTBD',
          example: 'output could be "usr/kschaefer/Workspace/code"'
        },
        {
          directive: 'Make Directory',
          macInstruction: 'mkdir',
          pcIntstruction: 'PCTBD',
          example: 'mkdir newDirectoryName'
        },
        {
          directive: 'Remove Directory',
          macInstruction: 'rmdir',
          pcIntstruction: 'PCTBD',
          example: 'rmdir directoryName (if directory is not empty, use rm -rf)'
        },
        {
          directive: 'Create/refresh a File',
          macInstruction: 'touch',
          pcIntstruction: 'PCTBD',
          example: 'touch index.html'
        },
        {
          directive: 'Move a file',
          macInstruction: 'mv',
          pcIntstruction: 'PCTBD',
          example: 'mv ~/Desktop/images ~/Documents/images'
        },
        {
          directive: 'Copy a file',
          macInstruction: 'cp',
          pcIntstruction: 'PCTBD',
          example: 'cp ~/Desktop/hello.js ~/Desktop/hello2.js'
        },
        {
          directive: "Search a directory for it's contents",
          macInstruction: 'find .',
          pcIntstruction: 'PCTBD',
          example: 'find . | grep "*.js"'
        },
        {
          directive: 'Print the contents of a file',
          macInstruction: 'cat',
          pcIntstruction: 'PCTBD',
          example: 'cat index.html'
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
