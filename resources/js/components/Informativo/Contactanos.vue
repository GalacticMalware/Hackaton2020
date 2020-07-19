<template>
    <div>
        <v-content>
            <v-container>
                <v-card>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-form
                                ref="form"
                                v-model="ValidarDatosRules"
                                lazy-validation
                            >
                                <v-layout wrap column>
                                    <v-layout wrap>
                                        <v-flex xs12 sm5 md5 lg5 xl5>
                                            <v-text-field
                                                v-model="Nombre"
                                                :counter="25"
                                                clearable
                                                required
                                                label="Nombre"
                                                color="pink"
                                            />
                                        </v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex xs12 sm5 md5 lg5 xl5>
                                            <v-text-field
                                                v-model="Apellido"
                                                color="pink"
                                                :counter="25"
                                                clearable
                                                required
                                                label="Apellido"
                                            />
                                        </v-flex>
                                    </v-layout>
                                    <v-layout wrap>
                                        <v-flex xs12 sm5 md5 lg5 xl5>
                                            <v-select
                                                v-model="Sexo"
                                                color="pink"
                                                old="Sexo"
                                                reuired
                                                label="Sexo"
                                                :items="[
                                                    'Hombre',
                                                    'Mujer',
                                                    'Distinto'
                                                ]"
                                            />
                                        </v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex xs12 sm5 md5 lg5 xl5>
                                            <v-text-field
                                                v-model="Correo"
                                                color="pink"
                                                label="Correo electronico"
                                                clearable
                                                phone
                                                :counter="25"
                                            />
                                        </v-flex>
                                    </v-layout>
                                    <v-layout wrap>
                                        <v-flex xs12 sm5 md5 lg5 xl5>
                                            <v-select
                                                v-model="Estado"
                                                color="pink"
                                                reuired
                                                label="Estado"
                                                :items="[
                                                    'Chiapas',
                                                    'DF',
                                                    'Chihuahua'
                                                ]"
                                            />
                                        </v-flex>
                                        <v-spacer></v-spacer>
                                        <v-flex xs12 sm5 md5 lg5 xl5>
                                            <v-text-field
                                                v-model="Telefono"
                                                color="pink"
                                                label="Numero telefonico"
                                                clearable
                                                mask="phone"
                                                :counter="10"
                                            />
                                        </v-flex>
                                    </v-layout>
                                    <v-flex>
                                        <v-textarea
                                            v-model="Texto"
                                            color="pink"
                                            required
                                            label="Ingrese el comentario deseado"
                                            :counter="255"
                                        />
                                    </v-flex>
                                    <v-checkbox color="pink">
                                        <template v-slot:label>
                                            Aceptp los&nbsp;
                                            <a
                                                href="#"
                                                class="ColorA"
                                                @click.stop.prevent="
                                                    dialog = true
                                                "
                                                >TERMINOS</a
                                            >
                                            &nbsp;y&nbsp;
                                            <a
                                                class="ColorA"
                                                href="#"
                                                @click.stop.prevent="
                                                    dialog = true
                                                "
                                                >CONDICIONES</a
                                            >*
                                        </template>
                                    </v-checkbox>
                                </v-layout>
                            </v-form>
                        </v-container>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-layout wrap justify-center>
                        <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-btn
                                :disabled="!ValidarDatosRules"
                                :loading="CargaEfecto"
                                block
                                color="#e17e6e"
                                class="white--text"
                                @click="EfectoBoton = 'CargaEfecto'"
                            >
                                Enviar
                                <v-icon right dark>cloud_upload</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-container>
        </v-content>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="headline ColorB white--text" primary-title>
                    TERMINOS y CONDICIONES
                </v-card-title>

                <v-card-text>
                    Todos los datos recopilados seran utilizados para
                    estadisticas, para mas informacion visitar en apartado de
                    Acerca de.
                </v-card-text>

                <v-divider></v-divider>

                <v-layout justify-center>
                    <v-flex xs12 sm6 md6 lg6 xl6>
                        <v-btn
                            block
                            color="#e17e6e"
                            class="white--text"
                            @click="dialog = false"
                        >
                            Aceptar
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-dialog>
        <br />
        <br />
        <br />
        <v-snackbar
              v-model="NotificacionSuccess"
              :multi-line="true"
              :right="true"
              :timeout="3000"
              :top="true"
              color="success"
            >
              <v-icon left color="white">check_circle</v-icon>
              <font size="3">{{textoSuccess}}</font>
              <v-btn flat @click="NotificacionSuccess = false">
                <v-icon color="white">cancel</v-icon>
              </v-btn>
            </v-snackbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            //EFECTOS DE BOTONES DE CARGA
            EfectoBoton_2: null,
            EfectoBoton: null,
            ValidarDatosRules: true,
            CargaEfecto: false,
            Nombre: "",
            Apellido: "",
            Correo: "",
            Texto: "",
            Sexo: "",
            Estado:"",
            Telefono:"",
            NotificacionSuccess:false,
            textoSuccess:"El mensaje se a enviado correctamente"

        };
    },
    watch: {
        EfectoBoton() {
            const A = this.EfectoBoton;
            this[A] = !this[A];
            this.CargaEfecto = true;
            this.ValidarDatosRules = false;
            setTimeout(() => ((this[A] = false), this.Proceso()), 3000);
            //redirect()->route('/Inicio')
            this.EfectoBoton = null;
            this.NotificacionSuccess=true;
        }
    },
    Proceso() {
        if (this.$refs.form.validate()) {
            console.log("Echo");
        }
    }
};
</script>
