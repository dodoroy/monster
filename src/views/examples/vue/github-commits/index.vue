<template>
  <div>
    <h1>GitHub Commits</h1>
    <blockquote>
      This example fetches latest Vue.js commits data from GitHub’s API and displays them as a list. You can switch
      between the master and dev branches.
    </blockquote>

    <p>Latest dodoroy/wordbox Commits</p>
    <template v-for="branch in branches">
      <input
        :key="branch"
        v-model="currentBranch"
        type="radio"
        :value="branch"
        name="branch"
      >
      <label
        :key="branch + 'label'"
        :for="branch"
      >{{ branch }}</label>
    </template>

    <p>dodoroy/wordbox@{{ currentBranch }}</p>
    <ul>
      <li
        v-for="record in commits"
        :key="record.sha"
      >
        <a
          :href="record.html_url"
          target="_blank"
          class="commit"
        >{{ record.sha.slice(0, 7) }}</a>
        - <span class="message">{{ record.commit.message | truncate }}</span><br>
        by
        <span
          class="author"
        ><a
          :href="record.author.html_url"
          target="_blank"
        >{{ record.commit.author.name }}</a></span>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

const apiURL = 'https://api.github.com/repos/dodoroy/wordbox/commits?per_page=3&sha='

export default {
  filters: {
    truncate (v) {
      const newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  data () {
    return {
      branches: ['master', 'zx'],
      currentBranch: 'master',
      commits: null
    }
  },
  watch: {
    currentBranch (newVal, oldVal) {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios
        .get(apiURL + this.currentBranch)
        .then((res) => {
          this.commits = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>
