<template>
    <v-card
        elevation="1"
        class="pa-2"
        outlined
        rounded = "lg"
    >
        <v-card-title>
            Search for Flights
        </v-card-title>
        <v-divider/>
        <v-card-text>
            <v-btn-toggle
                v-model="text"
                group
                rounded
                color = blue
            >
                <v-btn 
                    value="roundtrip"
                    outlined
                    >
                    
                    Roundtrip
                </v-btn>

                <v-btn 
                    value="oneway"
                    >
                    Oneway
                </v-btn>
            </v-btn-toggle>

            <v-container>
                <v-row
                    class = "d-flex align-top"
                >
                    <v-col
                        cols= 4>
                        <v-text-field
                        label="Leaving From"
                        outlined
                        rounded 
                        prepend-inner-icon="mdi-map-marker"
                        ></v-text-field>
                    </v-col>
                    <v-icon
                        class = "icon-class"
                        >
                        mdi-arrow-left-right
                    </v-icon>
                    
                    <v-col
                        cols= 4>
                        <v-text-field
                        label="Going to"
                        outlined
                        rounded 
                        prepend-inner-icon="mdi-map-marker"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <DatePickerMenu pickerLabel="Departing"/>
                    </v-col>
                    <v-col>
                        <DatePickerMenu pickerLabel="Returning"/>
                    </v-col>
                </v-row>
            </v-container>
            
            
            <v-container
                class="d-flex justify-center"    
            >

                <v-btn
                    x-large
                    depressed
                    color="primary"
                    min-width = 300
                    min-height = 60
                    rounded
                    >
                    Search
                    <v-icon
                        right
                        dark
                    >
                        mdi-magnify
                    </v-icon>
                </v-btn>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
  import DatePickerMenu from '../components/DatePickerMenu';

  export default {
    name: 'FlightSearch',
    components: {
        DatePickerMenu
    },
    }

</script>

<style scoped>
/* .v-card__text {
  color: blue!important;
} */
.icon-class{
    margin-bottom: 1.3em;
}
</style>
