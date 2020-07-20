<template>
<div>
<template v-if="dialog == true">
<center>
<br />
    <font size="6" class="font-weight" style="margin-top:50px;">Si requieres ayuda contactanos</font>
</center>
    <contacto></contacto>
  
</template>

<template v-if="activo == true">
<v-stepper v-model="preguntas" vertical>
    <v-stepper-step :complete="preguntas > 1" step="1" color="cyan">
      Pregunda 1
      <small>Contestar con un SI o NO</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="cyan " class="mb-5" height="100px">
      <center>
      <v-flex class="hidden-xs-only">
      <br />
      <br />
      <font size="4" class="white--text">¿TU PAREJA U OTRA PERSONA A HECHO BROMAS O COMENTARIOS QUE TE HAGA SENTIR INCÓMODA U OFENDIDA?</font>
      </v-flex>
      <v-flex class="hidden-sm-and-up">
      <br />
      <font size="2" class="white--text">¿TU PAREJA U OTRA PERSONA A HECHO BROMAS O COMENTARIOS QUE TE HAGA SENTIR INCÓMODA U OFENDIDA?</font>
      </v-flex>
      </center>
      </v-card>
      <center>
      <v-btn color="#E53935" class="white--text" @click="preguntas=2, puntos+=1">SI</v-btn>
      <v-btn color="blue"  class="white--text"@click="preguntas= 2">NO</v-btn>
      </center>
    </v-stepper-content>

    <v-stepper-step :complete="preguntas > 2" step="2" color="cyan">Pregunda 2</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="cyan" class="mb-5" height="100px">
      <center>
      <v-flex class="hidden-xs-only">
      <br />
      <br />
      <font size="4" class="white--text">¿TU PAREJA U OTRA PERSONA TE A CELADO CONSTANTEMENTE O TE A CULPADO POR ALGO QUE NO HAYAS HECHO?</font>
      </v-flex>
      <v-flex class="hidden-sm-and-up">
      <br />
      <font size="2" class="white--text">¿TU PAREJA U OTRA PERSONA TE A CELADO CONSTANTEMENTE O TE A CULPADO POR ALGO QUE NO HAYAS HECHO?</font>
      </v-flex>
      </center>
      </v-card>
      <center>
      <v-btn color="#E53935" class="white--text" @click="preguntas =3 ,  puntos+=1">SI</v-btn>
      <v-btn color="blue"  class="white--text"@click="preguntas = 3">NO</v-btn>
      </center>
    </v-stepper-content>

    <v-stepper-step :complete="preguntas > 3" step="3" color="cyan">Pregunda 3</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="cyan" class="mb-5" height="100px">
      <center>
      <v-flex class="hidden-xs-only">
      <br />
      <br />
      <font size="4" class="white--text">¿TU PAREJA U OTRA PERSONA TE A INTIMIDADO, AMENAZADO O TE HA OBLIGADO A HACER ALGO QUE TU NO QUIERAS HACER ?</font>
      </v-flex>
      <v-flex class="hidden-sm-and-up">
      <br />
      <font size="2" class="white--text">¿TU PAREJA U OTRA PERSONA TE A INTIMIDADO, AMENAZADO O TE HA OBLIGADO A HACER ALGO QUE TU NO QUIERAS HACER ?</font>
      </v-flex>
      </center>
      </v-card>
      <center>
      <v-btn color="#E53935" class="white--text" @click="preguntas = 4, puntos+=1">SI</v-btn>
      <v-btn color="blue"  class="white--text"@click="preguntas = 4">NO</v-btn>
      </center>
      </v-card>
    </v-stepper-content>
    <v-stepper-step :complete="preguntas > 4" step="4" color="cyan">Pregunda 4</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="cyan" class="mb-5" height="100px">
      <center>
      <v-flex class="hidden-xs-only">
      <br />
      <br />
      <font size="4" class="white--text">¿TU PAREJA TE HA MENOSPRECIADO O GOLPEADO Y DICIENDO QUE ES UN JUEGO? </font>
      </v-flex>
      <v-flex class="hidden-sm-and-up">
      <br />
      <font size="2" class="white--text">¿TU PAREJA TE HA MENOSPRECIADO O GOLPEADO Y DICIENDO QUE ES UN JUEGO? </font>
      </v-flex>
      </center>
      </v-card>
      <center>
      <v-btn color="#E53935" class="white--text" @click="preguntas = 5, puntos+=1">SI</v-btn>
      <v-btn color="blue"  class="white--text"@click="preguntas = 5">NO</v-btn>
      </center>
      </v-card>
    </v-stepper-content>
     <v-stepper-step step="5" color="cyan">Pregunda 5</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="cyan" class="mb-5" height="100px">
      <center>
      <v-flex class="hidden-xs-only">
      <br />
      <br />
      <font size="4" class="white--text">¿TU PAREJA TE HA GOLPEADO, ENCERRADO, AMENAZADO DE MUERTE  O ABUSADO SEXUALMENTE?</font>
      </v-flex>
      <v-flex class="hidden-sm-and-up">
      <br />
      <font size="2" class="white--text">¿TU PAREJA TE HA GOLPEADO, ENCERRADO, AMENAZADO DE MUERTE  O ABUSADO SEXUALMENTE?</font>
      </v-flex>
      </center>
      </v-card>
      <center>
      <v-btn color="#E53935" class="white--text" @click="puntos+=1, Total()">SI</v-btn>
      <v-btn color="blue"  class="white--text"@click="Total()">NO</v-btn>
      </center>
      </v-card>
    </v-stepper-content>
  </v-stepper>
</template>
</div>
</template>

<script>
  import contacto from './Informativo/Contactanos' 
export default {
    components:{contacto},
    data(){
        return{
            preguntas:1,
            puntos:0,
            dialog:false,
            activo:true,
        }
    },
    methods:{
      Total(){
       this.dialog = true;
       if(this.puntos>=3){
         this.puntos = 0
         //this.activo = false
       }
        this.puntos = 0
         this.dialog = false;
        var link = this.$router.resolve({
          path : '/Contactanos'
        });
        window.location = link.href
      }
       
    }
};
</script>