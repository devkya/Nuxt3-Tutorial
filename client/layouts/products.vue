<script setup lang="ts"></script>

<template>
  <v-app>
    <div class="header">
      <v-tabs bg-color="primary" align-tabs="center">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/products">Products</v-tab>
      </v-tabs>
    </div>

    <!-- output the page content -->
    <v-container>
      <slot></slot>
    </v-container>
  </v-app>
</template>
