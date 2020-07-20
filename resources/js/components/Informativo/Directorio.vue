<template>
    <div>
    <br />
    <br />
    <br />
       <v-card>
    <v-card-title>
      Directorio
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.estado }}</td>
        <td class="text-xs-center">{{ props.item.organizaion }}</td>
        <td class="text-xs-center">{{ props.item.direccion }}</td>
        <td class="text-xs-center">{{ props.item.contacto }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
        
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
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Estado',
            align: 'center',
            sortable: false,
            value: 'estado'
          },
          { text: 'Organizaion', value: 'organizaion',align: 'center',
            sortable: false, },
          { text: 'Direccion', value: 'direccion',align: 'center',
            sortable: false, },
          { text: 'Contacto', value: 'contacto',align: 'center',
            sortable: false, },
          
        ],
        desserts: [
          {
            estado: 'Aguascalientes',
            organizaion: 'Instituto aguascalientes de las mujeres ',
            direccion: 'plaza república 105 Altos, col.Zona centro, C.P Zona Centro 20010 Aguascalientes',
            contacto: '(449) 910 2128, 9102040 Ext. 3103 fax (449)9102004.  aguascalientes@inmujeres.gob.mx, ecguzman@aguascalientes.gob.mx, pisikahua@aguascalientes.gob.mx, elsaguame@yahoo.com.mx, msdavila@aguscalientes.gob.mx',
            
          },
          {
            estado: 'Aguscalientes ',
            organizaion: 'Mujer contemporanea, A.C',
            direccion: 'Fray Bartolomé de las casas 404, Barrio de la estación, C.P 20259, Aguascalientes.',
            contacto: '(449)9188176 fax: (449) 9188176. contemporanea/_aguascalientes@hotmail.com',
            
          },
          {
            estado: 'Eclair',
            organizaion: 262,
            direccion: 16.0,
            contacto: 23,
          },
          {
            estado: 'Cupcake',
            organizaion: 305,
            direccion: 3.7,
            contacto: 67,
          },
          {
            estado: 'Gingerbread',
            organizaion: 356,
            direccion: 16.0,
            contacto: 49,
          },
          {
            estado: 'Jelly bean',
            organizaion: 375,
            direccion: 0.0,
            contacto: 94,
          },
          {
            estado: 'Lollipop',
            organizaion: 392,
            direccion: 0.2,
            contacto: 98,
          },
          {
            estado: 'Honeycomb',
            organizaion: 408,
            direccion: 3.2,
            contacto: 87,
          },
          {
            estado: 'Donut',
            organizaion: 452,
            direccion: 25.0,
            contacto: 51,
          },
          {
            estado: 'KitKat',
            organizaion: 518,
            direccion: 26.0,
            contacto: 65,
          }
        ]
      }
    }
  }
</script>