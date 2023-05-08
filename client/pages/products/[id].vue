<script setup lang="ts">
import { Product } from "@/types/item";

definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;
const { data: product } = await useFetch<Product>(uri, { key: id as string });
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found.",
    fatal: true,
  });
}
</script>

<template>
  <v-row v-if="!!product" align="center" justify="center" style="height: 100vh">
    <v-col cols="6">
      <v-img class="mx-auto" :src="product.image" max-width="500px"></v-img>
    </v-col>
    <v-col cols="6">
      <v-card class="pa-5">
        <v-card-title class="mb-3 text-h5 font-weight-bold">{{
          product.title
        }}</v-card-title>
        <v-card-text>
          <v-row align="center">
            <v-spacer></v-spacer>

            <v-col cols="auto"
              ><v-chip>{{ product.category }}</v-chip>
            </v-col>
            <v-col cols="auto"
              ><h3 class="text-h4">{{ product.price }}$</h3></v-col
            >
          </v-row>
          <v-divider class="my-3"></v-divider>
          <v-row>
            <v-col cols="12"><p class="text-h5">Product Details</p></v-col>
            <v-col cols="12">{{ product.description }}</v-col>
          </v-row>
          <v-row justify="end">
            <v-col cols="auto">
              <v-btn color="primary">
                <v-icon icon="mdi-cart-plus" class="mx-2"></v-icon>
                <span>Add To Cart</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
