<template lang="pug">
  .hello
    h1 {{ msg }}
    .cat(v-for="category in categories")
      h2 {{ category.title }}
      ul
        li(v-for="link in category.links")
          a(:href="link.href" target="_blank") {{ link.label }}
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js Library",
      categories: [
        {
          title: "Essential Links",
          links: [
            { label: "Core Docs", href: "https://vuejs.org" },
            { label: "Forum", href: "https://forum.vuejs.org" },
            { label: "Community Chat", href: "https://chat.vuejs.org" },
            { label: "Twitter", href: "https://twitter.com/vuejs" },
            {
              label: "Docs for This Template",
              href: "http://vuejs-templates.github.io/webpack/"
            }
          ]
        },
        {
          title: "Ecosystem",
          links: [
            { label: "vue-router", href: "https://vuejs.org" },
            { label: "vuex", href: "https://forum.vuejs.org" },
            { label: "vue-loader", href: "https://chat.vuejs.org" },
            { label: "awesome-vue", href: "https://twitter.com/vuejs" }
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight: normal
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
</style>
