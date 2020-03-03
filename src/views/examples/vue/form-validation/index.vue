<template>
  <div>
    <h1>Form Validation</h1>

    <div
      v-show="errorList.length > 0"
      class="error"
    >
      <div>Please correct the following error(s):</div>
      <ul>
        <li
          v-for="error in errorList"
          :key="error.msg"
        >
          {{ error.msg }}
        </li>
      </ul>
    </div>

    <h3>使用自定义校验</h3>
    <form
      action="#"
      @submit="checkForm"
    >
      *Name: <input
        v-model="name"
        type="text"
      > <br>
      *Age: <input
        v-model.number="age"
        type="number"
      > <br>
      *Email: <input v-model="email"> <br>
      Favorite Movie:
      <select
        v-model="favoriteMovie"
        name="favoriteMovie"
      >
        <option
          v-for="movie in movieList"
          :key="movie.name"
          value="movie.name"
        >
          {{ movie.name }}
        </option>
      </select>
      <br>
      <input
        type="submit"
        value="submit"
      >
    </form>

    <h3>服务端校验</h3>
    <form
      action="@"
      @submit="checkForm2"
    >
      New Product Name: <input
        v-model="productName"
        type="text"
      ><br>
      <input
        type="submit"
        value="submit"
      >
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // data for the first demo
      errorList: [],
      name: null,
      age: null,
      email: null,
      favoriteMovie: null,
      movieList: [{ name: 'spring' }, { name: 'summer' }, { name: 'autumn' }, { name: 'winter' }],

      // data for the second demo
      productName: null
    }
  },
  methods: {
    checkForm (e) {
      console.log('check')
      this.errorList = []
      if (!this.name) {
        this.errorList.push({ msg: "name can't be empty" })
      }
      if (!this.age) {
        this.errorList.push({ msg: "age can't be empty" })
      }
      if (!this.email) {
        this.errorList.push({ msg: "email can't be empty" })
      } else if (!this.validEmail(this.email)) {
        this.errorList.push({ msg: 'please input validate email!' })
      }
      if (!this.errorList.length) {
        return true
      }
      e.preventDefault()
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    checkForm2 (e) {
      e.preventDefault()
      this.errorList = []
      if (!this.productName) {
        this.errorList.push({ msg: 'please input product name!' })
      } else {
        const validateNames = ['spring', 'summer', 'autumn', 'winter']
        setTimeout(() => {
          if (validateNames.indexOf(this.productName) > -1) {
            alert('corrent product name! bingo!')
          } else {
            this.errorList.push({ msg: 'invalide product name (tip: four seasons)' })
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.error {
  color: red;
}
</style>
