<template>
  <div>
    <Nav />
    hi
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  async created() {
    const p =  this.products = await this.$content("products")
      .where({ id: this.$route.params.id })
      .limit(1)
      .fetch();
      this.products = p[0]
  },
  data(){
    return{
      products:null
    }
  }
};
</script>

<style>
</style>
