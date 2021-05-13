<template>
  <div>
    <v-form ref="form">
      <v-text-field
        id="registerUsername"
        v-model="registerUsername"
        label="Username"
        name="Username"
        prepend-icon="mdi-account"
        type="text"
        :rules="usernameRules"
        required
      ></v-text-field>
      <v-text-field
        id="registerEmail"
        v-model="registerEmail"
        label="Email"
        name="Email"
        prepend-icon="mdi-email"
        type="text"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        id="registerPassword"
        v-model="registerPassword"
        label="Password"
        name="Password"
        prepend-icon="mdi-lock"
        type="password"
        :rules="passwordRules"
        required
      ></v-text-field>
      <v-text-field
        id="passwordConfirm"
        v-model="registerPasswordConfirm"
        label="Re-enter Password"
        name="PasswordConfirm"
        prepend-icon="mdi-lock"
        type="password"
        :rules="passwordConfirmRules"
        required
      ></v-text-field>
    </v-form>
    <div class="text-center mt-3">
      <v-btn
        id="btnRegisterSubmit"
        large
        color="primary"
        class="mb-5"
        :loading="loading"
        @click="submit"
        >Register</v-btn
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
      registerPasswordConfirm: '',
      usernameRules: [
        (v) => v.length >= 3 || 'Minimum length is 3 characters',
        (v) => v.length < 50 || 'Maximum lenth is 50 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 5) || 'Password must be at least 6 characters',
        (v) => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        (v) => /(?=.*\d)/.test(v) || 'Must have one digit',
        (v) => /(?=.*[!@#$%^&*])/.test(v) || 'Must have a special character',
      ],
      passwordConfirmRules: [
        (v) => !!v || 'Password is required',
        (v) => v === this.registerPassword || 'Passwords do not match!',
      ],
      loading: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios
          .post('https://api.lifelinks.nl/api/account/register', {
            username: this.registerUsername,
            email: this.registerEmail,
            password: this.registerPassword,
            confirmpassword: this.registerPasswordConfirm,
          })
          .then((this.loading = false))
          .finally(() => {
            this.$emit('accountCreated');
          });
      }
    },
  },
};
</script>

<style></style>
