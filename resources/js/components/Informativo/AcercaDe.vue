
  <template>
  <v-timeline>
    <v-timeline-item
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>Informacion</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Quienes somos</v-card-title>
        <v-card-text>
         Somos una empresase social en cual nos dericaresmos a ayudar a las demas personas con problemas de violencia
        </v-card-text>
      </v-card>
    </v-timeline-item>
     <v-timeline-item
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>Informacion</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Vision</v-card-title>
        <v-card-text>
         Somos una empresase social en cual nos dericaresmos a ayudar a las demas personas con problemas de violencia
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <v-timeline-item
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>Informacion</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">Mision</v-card-title>
        <v-card-text>
         Somos una empresase social en cual nos dericaresmos a ayudar a las demas personas con problemas de violencia
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>


<script>
export default {
  mounted() {
        console.log("Quienes somos");
    }
};
</script>