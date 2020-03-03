<template>
  <div>
    <h1>Using Axios to Consume APIs</h1>
    <blockquote>
      Real-World Example: Working with the Data<br>
      1. Displaying Data from an API<br>
      2. Dealing with <i>Errors</i> and <i>loading statuss</i><br>
      <br>
      There are many times when building application for the web that you may want to consume and display data from an
      API. There are several ways to do so, but a very popular approach is to use axios, a <i>promise-based</i> HTTP
      client.
    </blockquote>

    <div class="axios-demo">
      <h3>Bitcoin Price Index</h3>
      <section v-if="error">
        <p>{{ error }}</p>
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>

      <section v-else>
        <div v-if="loading">
          loading...
        </div>
        <div
          v-for="(item, key) in info"
          v-else
          :key="key"
        >
          {{ item.description }}:
          <span class="brighten">
            <span v-html="item.symbol" />
            {{ item.rate_float | currencydecimal }}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    currencydecimal (val) {
      return val.toFixed(2)
    }
  },
  data () {
    return {
      loading: true,
      info: null,
      error: null
    }
  },
  mounted () {
    this.$http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((result) => {
        console.log(result, 123)

        if (result.status === 200) {
          this.info = result.data.bpi
        } else {
          this.error = 'something wroing with the api'
        }
      })
      .catch((error) => {
        this.error = error
      })
      .finally(() => (this.loading = false))
  }
}
</script>

<style lang="scss" scoped>
.axios-demo {
  margin-top: 20px;
  width: 300px;
  padding: 20px 40px 40px;
  background: #2f242c;
  border-radius: 5px;
  color: #b3bfb8;
  h3,
  .brighten {
    color: #f0f7f4;
  }
}
</style>
