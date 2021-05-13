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
        @click="submit"
        >Sign in</v-btn
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { createFormData } from '@/config/headers.js';

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
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        await axios
          .post(
            'https://api.lifelinks.nl/api/account/login',
            createFormData(this.username, this.password)
          )
          .then((data) => {
            localStorage.jwt_token = data.data.access_token;
          })
          .finally((this.loading = false));
        this.$router.push('explore');
      }
    },
  },
};
</script>

<style></style>
