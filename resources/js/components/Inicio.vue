<template>
    <div>
     <v-layout justify-center class="hidden-sm-and-up">
    <br />
        <br />
        <br />
         </v-layout>
    <v-img width="626" height="352" style="width:100%; height:auto;" :src="'/img/Propo.jpg'"></v-img>
    
    <v-jumbotron>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
            <center>
            <v-flex class="hidden-xs-only">
          <h3 class="display-3">¿Sabes lo que es un violentómetro?</h3>
            </v-flex>
            <v-flex class="hidden-sm-and-up">
            <br />
          <font class="display-1">¿Sabes lo que es un violentómetro?</font>
            <br />
            <br />
            </v-flex>
            
            
          <span class="subheading">El Violentómetro es una herramienta de gran utilidad la cual permite a hombres y mujeres estar alerta, capacitadas (os) y/o atentas (os) para detectar y atender la violencia en cualquiera de sus tipos y modalidades a través de diferentes manifestaciones, resultando no solo benéfico para las instituciones educativas, sino también en los ámbitos familiar (relaciones de pareja) y laboral.</span>
            
            </center>
          <v-divider class="my-3"></v-divider>
            <center>
            <br />
            <br />
            
          <div class="title mb-3">Ve los nievesl del Violentómetro</div>
            </center>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <v-flex class="hidden-xs-only">
  <Violentrometro></Violentrometro>
   </v-flex>
   <v-flex class="hidden-sm-and-up">
    <TablaViolentrometro></TablaViolentrometro>
   </v-flex>

                  <v-jumbotron>
    <br />
    <br />
    <br />
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
            <center>
            <v-flex class="hidden-xs-only">
          <h3 class="display-3">Ahora sabes los nivel de violencia que sufren muchas mujeres.</h3>
          <br />
          <h4 class="display-1">Te invitamos a participar en nuestra encuesta.</h4>
            </v-flex>
            <v-flex class="hidden-sm-and-up">
          <font class="display-1">Ahora sabes los nivel de violencia que sufren muchas mujeres.</font>
          <br />
          <br />
          
          <font size="3">Te invitamos a participar en nuestra encuesta.</font>
            <br />
            <br />
            </v-flex>
            <br />
            <br />
              <v-btn color="#ff6666" class="white--text" large @click="EncuestaActivar = true">Encuesta<v-icon style="margin-left:10px">sticky_note_2</v-icon></v-btn>
            <br/>
            <br/>
            <br/>
            </center>
            <br/>
          <v-divider class="my-3"></v-divider>
            
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
    
     <v-flex xs sm md lg xl class="hidden-xs-only">
        <v-card>        
            <v-card-text>
                <v-container grid-list-md>
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen2.jpg'"
                            >
                                <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        
                                            <v-flex xs8 sm8 md8 lg8 xl8 >
                                            <v-layout justify-left>
                                            <center>
                                               No tienes por que sentirte sola.
                                            </center>
                                            </v-layout>
                                            </v-flex>
                                        
                                    </div>  
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>
                    <br />
                    <br />
                    <br />
                    <br />
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen6.jpg'"
                            >
                                <v-expand-transition>
                                    <v-layout class="hidden-xs-only">
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        <v-layout justify-center>
                                            <v-flex xs10 sm10 md10 lg10 xl10 >
                                            <center>
                                                El trato que te da una persona agresiva no solo te afecta a ti, afecta a tus seres queridos.
                                            </center>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                    </v-layout>
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>
                    <br />
                    <br />
                    <br />
                    <br />
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen4.jpg'"
                            >
                                <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        <v-layout justify-center>
                                            <v-flex xs10 sm10 md10 lg10 xl10 >
                                            <center>
                                                Tu puedes cambiar esto.
                                            </center>
                                            </v-flex>
                                        </v-layout>
                                    </div>  
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>
                    <br />
                    <br />
                    <br />
                    <br />
                    <v-hover>
                        <v-card
                          slot-scope="{ hover }"
                          color="grey lighten-4"
                          width="626"
                          height="352" 
                          style="width:100%; height:auto;"
                        >
                            <img
                              :aspect-ratio="16/9"
                              width="626" height="352" style="width:100%; height:auto;"
                              :src="'/img/Imagen5.jpg'"
                            >
                                <v-expand-transition>
                                    <div
                                      v-if="hover"
                                      class="d-flex transition-fast-in-fast-out black darken-2 v-card-btn display-3 white--text"
                                      style="height: 100%;"
                                    >
                                        <v-layout justify-center>
                                            <v-flex xs8 sm8 md8 lg8 xl8 >
                                            <center>
                                                Te invitamos a participar en nuestra encuesta.
                                                <v-btn color="#e17e6e" large @click="EncuestaActivar = true">Encuesta<v-icon style="margin-left:10px">sticky_note_2</v-icon></v-btn>
                                            </center>
                                            </v-flex>
                                        </v-layout>
                                    </div>  
                                </v-expand-transition>
                            </img> 
                        </v-card>
                    </v-hover>        
                </v-container>
                
            </v-card-text>
        </v-card>

 </v-flex> 
 <!--Sin hover-->
 <v-layout justify-center class="hidden-sm-and-up">
    <v-jumbotron>
    <br />
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
            <center>
            <v-flex class="hidden-sm-and-up">
          <font class="display-1">No tienes por que sentirte sola.</font>
          <br />
          <br />
            </v-flex>
            </center>
            
    <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen2.jpg'"
    >
    </v-img>
    
            <br/>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</v-layout>
<v-layout justify-center class="hidden-sm-and-up">
    <v-jumbotron>
    <br />
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
            <center>
            <v-flex class="hidden-sm-and-up">
          <font class="display-1">El trato que te da una persona agresiva no solo te afecta a ti, afecta a tus seres queridos.</font>
          <br />
          <br />
            </v-flex>
            </center>
            <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen6.jpg'"
    >
    </v-img>
            <br/>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

</v-layout>
<v-layout justify-center class="hidden-sm-and-up">
    <v-jumbotron>
    <br />
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
            <center>
            <v-flex class="hidden-sm-and-up">
          <font class="display-1">Tu puedes cambiar esto.</font>
          <br />
          <br />
            </v-flex>
            </center>
            <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen4.jpg'"
    >
    </v-img>
            <br/>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

</v-layout>
<v-layout justify-center class="hidden-sm-and-up">
    <v-jumbotron>
    <br />
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
            <center>
            <v-flex class="hidden-sm-and-up">
          <font class="display-1">Te invitamos a participar en nuestra encuesta.</font>
          <v-btn color="#ff6666" class="white--text" large @click="EncuestaActivar = true">Encuesta<v-icon color="white" style="margin-left:10px">sticky_note_2</v-icon></v-btn>
                                            
          <br />
          <br />
            </v-flex>
            </center>
            <v-img
      :aspect-ratio="16/9"
      width="626" height="352" style="width:100%; height:auto;"
      :src="'/img/Imagen5.jpg'"
    >
    </v-img>
            <br/>
          <v-divider class="my-3"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

</v-layout>

<br />
<br />
<br />
        <v-dialog
                v-model="EncuestaActivar"
                max-width="1000px"
                persistent
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                scrollable
              >
              <v-card>
              <v-toolbar card dark color="#ff6666">
                      <v-btn icon dark @click="EncuestaActivar = false">
                        <v-icon>close</v-icon>
                      </v-btn>
                      <v-toolbar-title>
                        <span class="headline">Encuesta</span>
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <Encuesta></Encuesta>
                    </v-card>
                    
              </v-dialog>
              
              <v-flex class="hidden-xs-only">
               <v-footer
    dark
    height="auto"
  >
    <v-card
      color="#ff6666"
      flat
      tile
      class="black lighten-1 white--text text-xs-center"
    >
      <v-card-text>
          <!--<v-icon size="24px" color="white">info</v-icon>-->
      </v-card-text>

      <v-card-text class="white--text pt-0">
      Creamos una iniciativa escalable partiendo desde la prevención, información y educación donde se genere un sentido de autoconciencia de la violencia. No se puede ayudar a quien no reconoce esta situación en su vida.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2020 — <strong>Equipo SEG - 052</strong>
      </v-card-text>
    </v-card>
  </v-footer>
              </v-flex>
        
    </div>
</template>
<script>
    import Encuesta from "./Encuesta"
    import Violentrometro from './Informativo/Violentrometro'
    import TablaViolentrometro from './Informativo/TablaApp'
export default {
    components:{Encuesta,Violentrometro,TablaViolentrometro},
    mounted() {
        console.log("Import");
    },
    data(){
        return{
            EncuestaActivar:false,
            e6:1
        }
    },
    methods:{
       
    }
};
</script>