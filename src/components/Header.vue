<template>
    <div class="flex">
      <router-link to="/">
    <img src="../assets/profile.jpg"></router-link>
    <h1 class="title">{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'Header',
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
h1 {
  font-weight: normal;
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
</style>
