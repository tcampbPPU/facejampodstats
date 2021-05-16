<template>
  <div class="container">

    <br>

    <div class="p-20 flex items-center justify-center space-x-2" v-if="isAuthorised">
      <a class="button" href="/">Documentation</a>
      <a @click="removeAuthorisation" class="button">Log out</a>
    </div>
    <div v-else>
      <div class="section">
        <form class="flex items-center justify-center py-20">
          <input
              class="p-2 bg-gray-300 w-1/4 rounded-md border border-gray-400 text-gray-900"
              v-model="methodLoginValue"
              type="password"
              placeholder="type password and hit enter"
              @keyup.enter="loginUser()"
          >
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.button {
  @apply bg-gray-800 p-2 rounded-md text-gray-500
}

</style>

<script>
export default {
  layout: 'single',
  data: function() {
    return {
      methodLoginValue: '',
      isAuthorised: false
    }
  },

  computed: {
    redirectPath() {
      const path = this.$route.query.previousPath

      return path || this.localePath('/')
    }
  },

  mounted() {
    this.isAuthorised = this.$passwordProtect.isAuthorised()
  },

  methods: {
    loginUser() {
      this.$passwordProtect.authorise(this.methodLoginValue)
      this.isAuthorised = this.$passwordProtect.isAuthorised()

      this.$router.push(this.redirectPath)
    },
    removeAuthorisation() {
      this.$passwordProtect.removeAuthorisation()
      this.isAuthorised = this.$passwordProtect.isAuthorised()
    }
  }
}
</script>
