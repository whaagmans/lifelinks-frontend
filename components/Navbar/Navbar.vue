<template>
  <nav>
    <v-app-bar class="text-uppercase font-weight-light title text--primary" app>
      <span>LifeLinks</span>
      <v-spacer></v-spacer>
      <v-btn
        id="btnThemeSwitch"
        class="mr-4"
        :ripple="false"
        icon
        @click="themeSwitch"
      >
        <v-icon>mdi-brightness-4</v-icon>
      </v-btn>

      <v-btn text @click="logout">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  watch: {
    '$vuetify.theme.dark'(val) {
      localStorage.setItem('darkTheme', val);
    },
  },
  methods: {
    themeSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    logout() {
      localStorage.removeItem('jwt_token');
      this.$router.push('login');
    },
  },
};
</script>
