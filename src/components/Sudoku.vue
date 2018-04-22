<template>
  <div>
    <Header/>
    <h2>Hey Sudok&#9829;</h2>
    <p>coming soon &#9788;</p>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Sudoku',
  components: {Header},
  // eslint-disable-next-line
  data() {
    return {
      msg: 'Hello Sudoku &#9829;'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
</style>
