<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      :src="require(`@/assets/sidebar.jpg`)"
    >
      <template v-slot:img="props">
        <v-img :gradient="gradient" v-bind="props"> </v-img>
      </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},
  gradient: "rgba(0,0,0,0.7), rgba(0,0,0,0.7)",
  data: () => ({
    drawer: false,
    items: [
      { title: "DashBoard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Grid  System", icon: "mdi-image", to: "/grid-system" },
      {
        title: "Break Points",
        icon: "mdi-image",
        to: "/breakpoints",
      },
      {
        title: "Grid List Page",
        icon: "mdi-image",
        to: "/grid-list-page",
      },
      {
        title: "Typography",
        icon: "mdi-image",
        to: "/typography",
      },
    ],
    right: null,
  }),
});
</script>
