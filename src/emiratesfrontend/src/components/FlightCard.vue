<template>
  <v-card class="mx-auto my-7">
    <v-container class="d-flex flex-row">
      <v-col>
        <v-card-title>4:15pm - 6:15pm</v-card-title>
        <v-card-text>
          <div>New York(LGA) - Toronto(YYZ)</div>
          <div>Delta</div>
        </v-card-text>
      </v-col>
      <v-col> <v-card-text align="middle">2h 0m (Nonstop)</v-card-text> </v-col>
      <v-col>
        <v-card-text align="end">
          <div>2 left</div>
          <div class="ticketprice">$174</div>
          <div>Roundtrip per traveler</div>
        </v-card-text>
      </v-col>
    </v-container>
    <v-divider class="mx-4"></v-divider>

    <v-card-text> Carry-on included </v-card-text>
  </v-card>
</template>
<script>
export default {};
</script>
<style>
.ticketprice {
  font-weight: bold;
  font-size: x-large;
}
</style>