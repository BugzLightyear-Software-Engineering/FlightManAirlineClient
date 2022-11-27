<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <div>
        <router-link to="/">
          <v-btn disabled text>
            <h2 class="logo">FlightMan Expedia Client</h2>
          </v-btn>
        </router-link>
      </div>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style>
.logo {
  color: white !important;
}
</style>