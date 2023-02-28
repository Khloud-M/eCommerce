<template>
  <v-carousel height="100vh" hide-delimiter-background>
    <template #prev="{ attrs, on }">
      <v-btn fab color="transparent" depressed v-bind="attrs" v-on="on">
        <v-icon size="20"> mdi-arrow-left </v-icon>
      </v-btn>
    </template>
    <template #next="{ attrs, on }">
      <v-btn fab color="transparent" depressed v-bind="attrs" v-on="on">
        <v-icon size="20"> mdi-arrow-right </v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="(p, index) in sale_item" :key="`setItem-${index}`">
      <v-img height="100vh" :src="p.image">
        <v-container class="fill-height">
          <v-row dense align="center">
            <v-col md="7">
              <div
                style="background-color: rgba(255, 255, 255, 0.8)"
                class="pa-md-10- pa-5 rounded-lg black--text text-center text-md-left"
              >
                <h2 class="text-md-h3 text-h5">{{ p.name }}</h2>
                <p class="text-subtitle-1 text-md-h5 primary--text mt-5">
                  {{ p.price }}
                </p>
                <p class="text-md-body-2 mb-7">{{ p.description }}</p>
                <v-btn
                  nuxt
                  :to="`/products/${p.id}`"
                  depressed
                  color="primary"
                  class="text-capitalize"
                  min-height="40"
                >
                  Check It Out
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  props: {
    sale_item: Array,
  },
};
</script>

<style>
</style>
