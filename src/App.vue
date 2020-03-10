<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue';
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {
  components: {
    'app-header': header,
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito';
  font-weight: 600;
}
</style>
