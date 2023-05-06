<script setup lang="ts">
import { Product } from "~/types/item";
const props = defineProps<{ product: Product }>();
const product = ref(props.product);
</script>

<template>
  <v-card class="mb-3">
    <v-card-title class="text-center">{{ product.title }}</v-card-title>
    <v-card-text>
      <v-row align="center">
        <v-col cols="12"
          ><v-img :src="product.image" max-height="150px"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <NuxtLink :to="`/products/${product.id}`">
            <v-btn color="primary" block>View Details </v-btn>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
