<script setup lang="ts">
import { Product } from "@/types/item";
definePageMeta({
  layout: "products",
});

// get all products
const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);
// console.log(products.value?.length);
// console.log(products.value);
</script>
<template>
  <div>
    <h2>Products</h2>
    <v-row>
      <v-col v-for="(product, index) in products" :key="index" cols="3">
        <ProductCard :product="product"></ProductCard>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
