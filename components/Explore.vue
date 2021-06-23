<template>
  <div class="explore">
    <v-container class="my-5">
      <v-btn fab color="primary" class="mb-5" @click="refreshPosts"
        ><v-icon>mdi-refresh</v-icon></v-btn
      >
      <v-flex v-for="post in posts" :key="post.id">
        <v-row justify="center" class="mb-12">
          <v-card flat class="text-left" width="600px">
            <v-card-title class="primary darken-2">
              <div class="white--text text-h5 font-weight-normal">
                {{ post.username }}
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="text--primary text-h6 font-weight-light mt-4">
                {{ post.postContent }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-ripple="{ center: true }"
                class="mr-5"
                large
                outlined
                text
                @click="addHeart(post)"
              >
                <v-icon color="pink">mdi-heart</v-icon>
                <v-spacer></v-spacer>
                <span class="text--secondary">{{ post.likes }}</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    addHeart(post) {
      this.$axios
        .$put('/api/post/likes', {
          id: post.id,
        })
        .then(post.likes++);
    },
    async fetchPosts() {
      await this.$axios.$get('/api/post').then((data) => {
        const posts = data;
        posts.forEach((post) => {
          this.posts.push(post);
        });
      });
    },
    async refreshPosts() {
      await this.$axios.$get('/api/post').then((data) => {
        const posts = data;
        posts.forEach((post) => {
          if (this.posts.some((item) => item.id === post.id)) {
            return;
          }
          this.posts.unshift(post);
        });
      });
    },
  },
};
</script>

<style></style>
