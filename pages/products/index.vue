<template>
  <div>
    <Nav />
    <v-container>
      <v-row dense>
        <v-col md="3">
          <div>
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              outlined
              clearable
              placeholder="Search"
              v-model="search"
            />
            <v-list
              v-if="$vuetify.breakpoint.mdAndUp"
              color="transparent"
              subheader
            >
              <v-subheader> Categories</v-subheader>
              <v-list-item
                v-for="(c, i) in categories"
                :key="`category${i}`"
                link
              >
              <v-list-item-avatar>
                <v-img :src="c.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ c.name }}
                </v-list-item-title>
              </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col md="9">

          <v-row>
            <template v-for="(p,i) in filteredProducts">
              <v-fade-transition>

              <v-col cols="12" md="6">
                     <v-card  nuxt :to="`products/${p.id}`" color="surface" class="pointer ma-2 mb-5 mr-5">
                      <v-img :src="p.image" height="300">
                        <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="primary"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                       </v-img>
                       <v-card-title class="text-md-body-1 font-weight-bold">{{
                      p.name
                    }}</v-card-title>
                    <v-card-subtitle class="primary--text pb-3">
                      {{ $formatMoney(p.price)  }}

                    </v-card-subtitle>
                    <v-card-text>
                      <v-chip
                        x-small
                        label
                        outlined
                        class="mr-1"
                        v-for="(t, i) in p.tags"
                        :key="`prod${p.id}-${i}`"
                      >
                        {{ t }}
                      </v-chip>
                    </v-card-text>
                       </v-card>
              </v-col>
              </v-fade-transition>

            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
   <ScrollTop />
  </div>
</template>

<script>
export default {
  async created() {
    this.categories = await this.$content("category").fetch();
    this.products = await this.$content("products").fetch();
  },
  data() {
    return {
      products: null,
      categories: null,
      search:null,
    };
  },
  computed:{
    filteredProducts() {
      if (!this.products || !this.search) return this.products;
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        );
      });
    },
  }
};
</script>

<style>
</style>
