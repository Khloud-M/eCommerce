<template>
  <div>
    <v-app-bar
      color="surface"
      height="80"
      class="nav_bar"
      app
      :style="{ padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '' }"
    >
      <v-toolbar-title
        @click="$router.push('/')"
        class="text-md-h5 font-weight-bold pointer"
      >
        logo</v-toolbar-title
      >
      <v-spacer />

      <v-btn icon nuxt to="/products">
        <v-icon size="20"> mdi-store-outline </v-icon>
      </v-btn>
      <v-btn  icon nuxt to="/">
        <v-icon size="20"> mdi-cart-outline </v-icon>
      </v-btn>
      <v-divider vertical class="mx-md-5 mx-2" />
      <v-btn  icon @click="toggleTheme" >
        <v-icon size="20"> mdi-brightness-7 </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods:{
    toggleTheme(){
      this.$vuetify.theme.dark = ! this.$vuetify.theme.dark;
    }
  }
};
</script>

<style>
</style>
