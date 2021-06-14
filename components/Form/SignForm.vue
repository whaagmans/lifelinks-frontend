<template>
  <div>
    <v-form ref="form">
      <v-text-field
        id="username"
        v-model="username"
        label="Username"
        name="Username"
        prepend-icon="mdi-account"
        type="text"
        :rules="usernameRules"
        required
      ></v-text-field>
      <v-text-field
        id="password"
        v-model="password"
        label="Password"
        name="Password"
        prepend-icon="mdi-lock"
        type="password"
        :rules="passwordRules"
        required
      ></v-text-field>
    </v-form>
    <div class="text-center mt-3">
      <v-btn
        id="btnSignInSubmit"
        large
        color="primary"
        class="mb-5"
        :loading="loading"
        @click="login"
        >Sign in</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameRules: [(v) => !!v || 'Username is required'],
      passwordRules: [(v) => !!v || 'Password is required'],
      loading: false,
    };
  },
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        await this.$auth
          .loginWith('identityServer', {
            username: this.username,
            password: this.password,
            rememberLogin: false,
          })
          .then(() => {
            this.loading = false;
            this.$toast.success('Logged In !');
          });
      }
    },
  },
};
</script>

<style></style>
