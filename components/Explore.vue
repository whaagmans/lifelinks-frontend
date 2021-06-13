<template>
  <div class="explore">
    <v-container class="my-5">
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
import axios from 'axios';
export default {
  components: {},
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.$axios.$get('https://api.lifelinks.nl/api/post').then((data) => {
      const posts = data.data;
      posts.forEach((post) => {
        this.posts.push(post);
      });
    });
  },
  methods: {
    addHeart(post) {
      axios
        .put(
          'https://api.lifelinks.nl/api/post/likes',
          {
            id: post.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.jwt_token}`,
            },
          }
        )
        .then(post.likes++);
    },
  },
};
</script>

<style></style>
