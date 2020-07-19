<template>
<v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Pregunda 1
      <small>Contestar con un SI o NO</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="#FCE4EC" class="mb-5" height="100px">
      <center>
      <br />
      <br />
      <font size="4">¿TU PAREJA U OTRA PERSONA A HECHO BROMAS O COMENTARIOS QUE TE HAGA SENTIR INCÓMODA U OFENDIDA?</font>
      </center>
      </v-card>
      <center>
      <v-btn color="red" @click="e6 = 2">SI</v-btn>
      <v-btn color="primary" @click="e6 = 2">NO</v-btn>
      </center>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Pregunda 2</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="red" @click="e6 = 3">SI</v-btn>
      <v-btn color="primary" @click="e6 = 3">NO</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Pregunda 3</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="red" @click="e6 = 4">SI</v-btn>
      <v-btn color="primary"@click="e6 = 4">NO</v-btn>
    </v-stepper-content>
    <v-stepper-step step="4">Pregunda 4</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="red" @click="e6 = 1">SI</v-btn>
      <v-btn color="primaty">NO</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
   
export default {
    data(){
        return{
            e6:1
        }
    },
    methods:{
       
    }
};
</script>