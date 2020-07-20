<template>
    <div>
        <v-layout justify-center class="hidden-xs-only">
            <v-toolbar
                color="white "
                class="elevation-0"
                dark
                flat
                clipped-left
                fixed
                app
            >
            
                <!--<v-toolbar-side-icon>Hola</v-toolbar-side-icon> -->
               <!--> <v-toolbar-title class="white--text"></v-toolbar-title>-->
                <v-img max-width="100px" min-width="100px" :src="'/img/logo2.png'"></v-img>
                <v-layout colum justify-center>
                    <v-spacer></v-spacer>
                    <v-layout justify-wrap justify-center>
                       <v-btn flat color="#ff6666" router-link :to="{ path: '/' }">Inicio <v-icon style="margin-left:10px;" color="pink">house</v-icon></v-btn>
                        <v-btn flat color="#ff6666" router-link :to="{ path: '/AcercaDe' }">Acerca de <v-icon style="margin-left:10px;" color="pink">info</v-icon></v-btn>
                        <v-btn flat color="#ff6666" router-link :to="{ path: '/Directorio' }">Directorio <v-icon style="margin-left:10px;" color="pink">import_contacts</v-icon></v-btn>
                        <v-btn flat color="#ff6666" router-link :to="{ path: '/Contactanos' }">Contactos<v-icon style="margin-left:10px;" color="pink">contact_mail</v-icon></v-btn>
                        <v-btn flat color="#ff6666" @click.native="Instalar = true">Instala la APP<v-icon style="margin-left:10px;" color="pink">smartphone</v-icon></v-btn>
                    </v-layout>
                </v-layout>
                
            </v-toolbar>
            <br />
        <br />
        <br />
        </v-layout>
        
        <v-flex class="hidden-sm-and-up">
         <v-toolbar
                color="#ff6666"
                class="elevation-0"
                dark
                flat
                clipped-left
                fixed
                app
            >
            
                <!--<v-toolbar-side-icon>Hola</v-toolbar-side-icon> -->
                <v-toolbar-title class="white--text"></v-toolbar-title>
                <v-img max-height="60px" max-width="60px":src="'/img/logo.png'"></v-img>
                
                <v-spacer></v-spacer>
                    <font size="4">SURE RED ALIADA</font>
                
                  
                    <v-layout  justify-end>
                        <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          flat
          icon
           v-on="on"
        >
          <v-icon large>more_vert</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile router-link :to="{ path: '/Contactanos' }">
          <v-list-tile-title>Contactanos <v-icon style="margin-left:10px">contact_mail</v-icon></v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click.native="Instalar = true">
          <v-list-tile-title>Instalar App <v-icon style="margin-left:10px">smartphone</v-icon></v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click.native="Info = true">
          <v-list-tile-title>Creditos <v-icon style="margin-left:10px">info</v-icon></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
                </v-layout>
            </v-toolbar>
  </v-flex>
    
    <v-dialog
      v-model="Instalar"
      width="500"
      persistent
    >
      

      <v-card>
        <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" color="cyan">Paso 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2" color="cyan">Paso 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3" color="cyan">Paso 3</v-stepper-step>
        
        <v-divider></v-divider>

       <v-stepper-step step="4" color="cyan">Paso 4</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="white"
          height="200px"
        >
        <v-img max-height="180px" :src="'/img/instalar1.jpeg'"> </v-img>
        <center>
        <font size="4">Pulsamos el botón <v-icon>more_vert</v-icon></font>
        </center>
        </v-card>
        <center>
        <v-btn
          color="cyan"
          class="white--text"
          @click="e1 = 2"
        >
          Continuar
        </v-btn>
        </center>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="white"
          height="200px"
        >
        <v-img max-height="200px" :src="'/img/instalar2.jpeg'"> </v-img>
        </v-card>
        <center>
        <v-btn
            class="white--text"
          color="cyan"
          @click="e1 = 3"
        >
          Continuar
        </v-btn>
        </center>
        
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="white"
          height="200px"
        >
         <v-img max-height="200px" :src="'/img/instalar3.jpeg'"> </v-img>
        </v-card>
        <center>
        <v-btn
            class="white--text"
          color="cyan"
          @click="e1 = 4"
        >
          Continuar
        </v-btn>
        </center>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card
          class="mb-5"
          color="white"
          height="200px"
        >
         <v-img max-height="150px" :src="'/img/instalar4.jpeg'"> </v-img>
            
            <center style="margin-top:10px;">
        <font  size="4">Listo ya tienes la APP <v-icon>smartphone</v-icon></font>
        </center>
        </v-card>
        <center>
        <v-btn
          color="cyan"
          class="white--text"
          @click="e1 = 1, Instalar = false"
        >
          Continuar
        </v-btn>
        </center>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
      </v-card>
    </v-dialog>
    
    <v-dialog
      v-model="Info"
      width="500"
      persistent
    >
      
    <v-card
      flat
      tile
      class=" white--text text-xs-center"
    >
      
        <br />
      
      <v-card-text class="white--text pt-0">
      
        <center>
        <v-img max-height="180px" max-width="180px" :src="'/img/logo.png'"></v-img>
        <br />
        <font size="4" class="black--text">"Generemos consciencia sobre la violencia"</font>
        </center>    
        </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        &copy;2020 -<strong> Equipo SEG - 052</strong>
        <br />
        <br />
        <v-btn color="cyan" class="white--text" @click.native="Info = false">Continuar</v-btn>
      </v-card-text>
    </v-card>
    </v-dialog>

    

    </div>
</template>

<script>
export default {
    
    data() {
        return {
            AcercaDe: true,
            Instalar:false,
            Info:false,
             e1: 0
        }
    },
    computed: {
      
      
    }
};
</script>
