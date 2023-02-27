<template>
  <div>
   <Nav  />
   <HomeCarsoul  :sale_item="sale_item"/>
   <br/>
   <br/>
   <v-container>
    <h1 class="text-md-h4 text-h6"> Check these out </h1>
    <br/>
   </v-container>
   <Footer />
  </div>
</template>

<script>
export default {
 async created(){
    this.sale_item= await this.$content('products').where({onSale:true}).fetch();
    this.products= await this.$content('products').fetch();
  },
  data(){
    return{
      products:null,
      sale_item:null

    }
  }
}
</script>

<style>

</style>
