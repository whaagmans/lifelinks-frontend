<template>
  <div class="mt-5">
    <v-card width="300px">
      <div v-for="friend in friends" :key="friend.id">
        <v-card-title>
          <v-icon left>mdi-account</v-icon>
          <span>{{ friend.username }}</span>
        </v-card-title>
        <v-divider></v-divider>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        { id: 0, username: 'Friend1' },
        { id: 1, username: 'Friend2' },
        { id: 2, username: 'Friend3' },
        { id: 3, username: 'Friend4' },
        { id: 4, username: 'Friend5' },
      ],
    };
  },
};
</script>
