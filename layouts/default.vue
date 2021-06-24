<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
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

      <v-btn text @click="Logout">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-compass',
          title: 'Explore',
          to: '/explore',
        },
        {
          icon: 'mdi-account',
          title: 'profile',
          to: '/profile',
        },
        {
          icon: 'mdi-lock',
          title: 'Login',
          to: '/login',
        },
      ],
      miniVariant: false,
      title: 'Lifelinks',
    };
  },
  methods: {
    themeSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    Logout() {
      this.$auth.logout('identityServer');
    },
  },
};
</script>
