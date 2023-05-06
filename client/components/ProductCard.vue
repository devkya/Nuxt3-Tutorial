<script setup lang="ts">
import { Product } from "~/types/item";
const props = defineProps<{ product: Product }>();
const product = ref(props.product);
</script>

<template>
  <!-- <v-card > -->
  <div>
    <ProductDetailCard :product="product"></ProductDetailCard>
  </div>
</template>

<style scoped></style>
