<script setup lang="ts">
const props = defineProps<{ error: any }>();
const error = ref(props.error);
function handleClearError() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <v-container fluid>
    <v-row justify="center" align="center" style="height: 80vh">
      <v-col cols="6">
        <v-card class="pa-5 text-center" elevation="3">
          <v-card-text>
            <h1 class="ma-3 text-center text-h1 font-weight-black">
              {{ error.statusCode }} Error
            </h1>

            <h3 class="text-h3">{{ error.message }}</h3>

            <v-btn
              color="primary"
              class="ma-3"
              block
              flat
              @click="handleClearError"
              >Go Home...</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
