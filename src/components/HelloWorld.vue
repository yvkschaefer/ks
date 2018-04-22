<template>
  <div class="hello">
    <div class="flex">
    <img src="../assets/profile.jpg">
    <h1>{{ msg }}</h1>
    </div>
    <h2 class="mid-page">Essentials</h2>
    <ul>
      <li>
        <a
          href="/cheat-sheet"
          target="_blank"
        >
          Cheat Sheet
        </a>
      </li>
      <li>
        <a
          href="/sudoku"
          target="_blank"
        >
          Sudoku
        </a>
      </li>
    </ul>
    <h2>Reach out!</h2>
    <ul>
      <li>
        <a
          href="https://twitter.com/kayschaef"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://github.com/yvkschaefer"
          target="_blank"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/kara-schaefer"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // eslint-disable-next-line
  data() {
    return {
      msg: 'Kara Schaefer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
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
.flex {
  display: flex;
  margin-left: 25vw;
}
.mid-page {
  margin-top: 5vh;
}
</style>
