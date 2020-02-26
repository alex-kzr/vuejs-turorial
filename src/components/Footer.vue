<template>
  <footer>
      <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'Copyright 2020 Vue Ninjas'
    }
  }
}
</script>

<style scoped>
footer {
    background: #222;
    padding: 6px;
}
p {
    color: lightgreen;
    text-align: center;
}
h1 {
    color: #222;
    text-align: center;
}
</style>
