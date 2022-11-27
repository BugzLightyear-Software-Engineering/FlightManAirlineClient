<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="pickerLabel"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      @input="menu = false"
      @change="bindDate()"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "DatePickerMenu",
  props: {
    bindingDict: String,
    pickerLabel: String,
  },
  data() {
    return {
      date: this.$store.state.user_search[this.bindingDict],
      menu: null,
    };
  },
  methods: {
    bindDate() {
      this.$store.state.user_search[this.bindingDict] = this.date;
    },
  },
};
</script>
