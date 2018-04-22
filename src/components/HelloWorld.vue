<template>
  <div class="hello">
    <Header/>
    <h2 class="mid-page">Essentials</h2>
    <ul>
      <li>
        <router-link
          to="/cheat-sheet"
        >
          Cheat Sheet
        </router-link>
      </li>
      <li>
        <router-link
          to="/sudoku"
        >
          Sudoku
        </router-link>
      </li>
    </ul>
    <h2 class="contact">Reach out &#9829;</h2>
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
import Header from './Header'
export default {
  name: 'HelloWorld',
  components: {Header},
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
img {
  border-radius: 50%;
}
.flex {
  display: flex;
  margin-left: 23vw;
}
.title {
  font-weight: bold;
  font-size: 3em;
  margin-left: 3vw;
}
.mid-page {
  margin-top: 8vh;
}
.contact {
  margin-top: 4vh;
}
</style>
