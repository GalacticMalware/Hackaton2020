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
      :rows-per-page-items='[5,10,25,{"text":"TODOS LOS DATOS","value":-1}]'
      rows-per-page-text="PÁGINAS"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.estado }}</td>
        <td class="text-xs-center">{{ props.item.organizaion }}</td>
        <td class="text-xs-center">{{ props.item.direccion }}</td>
        <td class="text-xs-center">{{ props.item.contacto }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          No se encontro "{{ search }}" .
        </v-alert>
      </template>
    </v-data-table>
    <br />
    <br />
    <br />
  </v-card>
        
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
            estado: 'Baja California ',
            organizaion: 'instituto de la mujer para el estado de Baja  california ',
            direccion: 'calle Héroes e independencia, Col. Centro comercial Plaza fiestanlocales 14 y 15 "E", C.P 21000, Méxicali ',
            contacto: 'tijuana: (664) 608 08 88, Mexicali: (686) 558 6364 , bajacalifornia@inmujeres.gob.mx; gnavarro@baja.gob.mx, inmujer2002@yahoo.com; kamiep_td@yahoo.com.mx',
          },
          {
            estado: 'Baja California ',
            organizaion: 'Centro de atención a la violencia intrafamiliar en Méxicali, Cavim ',
            direccion: '',
            contacto: '(686)5800442, pacavim@yahoo.com; elbasantella@yahoo.com',
          },
          {
            estado: 'Baja California sur',
            organizaion: 'Centro mujeres, A.C ',
            direccion: 'Av. Márquez de león 480, Col. Centro, C,P 23000, La paz. ',
            contacto: '(612)1223570, 1223313, 1222570, cmujeres@balandra.uabcs.mx www.centromujeresmexico.org',
          },
          {
            estado: 'Campeche ',
            organizaion: 'instituto estatal de la mujer de campeche ',
            direccion: 'Av. Adolfo López Mateos 250, por Abasolo, COL. Pensiones, CP 24030, Campeche. ',
            contacto: '(9891)8112656 campeche@inmujeres,gob.mx , elisel_ C28@yahoo.com.mx, imec@yahoo.com',
          },
          {
            estado: 'Chiapas',
            organizaion: 'Instituto de la mujer ',
            direccion: 'Circunvilación tapachula 111, col. Moctezuma, C.P 29030, Tuxla Gutiérrez. ',
            contacto: '(961)602 9137, 6029128 fax: 6029146,  instmujer@chiapas.gob.mx, chiapas @inmujeres.gob.mx , www.instmujer.chiapas.gob.mx',
          },
          {
            estado: 'Chihuahua',
            organizaion: 'Instituto chihuahuense de la mujer ',
            direccion: 'Av. 16 de septiembre y Guatemala 1220, Col. Partida Romero, Ciudad Juaréz C.P 32030. ',
            contacto: 'ciudad juarez (656)6293300, 635585 fax: 6295241 y 6295242 , Ch9ihuahua 6144293505, fax: 4293300 chihuahua@inmujeres.gob.mx, psaldana@buzon.chihuahua.gob.mx, ramirez@buzon.Chihuahua.gob.mx',
          },
          {
            estado: 'Chihuahua',
            organizaion: 'Mujeres por méxico en Chihuahua, AC, MXM',
            direccion: 'Morelos 803-1 col. Centro Chihuahua, cp 31000',
            contacto: '6144101019 fax: 4101019, mproxmx@avantel.net; azoe57@aventel,net; mujermex@prodigy.net.mx',
          },
          {
            estado: 'Coahuila ',
            organizaion: 'Instituto Coaguilense de las mujeres ',
            direccion: 'Instituto corona 348, col, zona centro, saltillo, cp. 25000.',
            contacto: '8444104151, fax122445 coaguilacm@hormail,com, instcoahmujeres@prodigy.net.mx mujeres@coahuila.gob.mx www.coahuila.gob.mx/mensaje.htm ',
          },
          {
            estado: 'Colima',
            organizaion: 'Instituto colimense de las mujeres ',
            direccion: 'complejo administrativo del Gobierni del Estado, Tercer Anillo perfiférico, Marcelino García Barragán, Edificio Planta Baja, Cuerpo A, Colima, C.P 28010 ',
            contacto: '3123162000 ext.2388, 62073/44357 fax: 2073 colima@inmujeres.gob.mx; incemujeres@hotmail.com: Silvia_07@msn.com_ incmujeres01@hotmail.com ww.icmujres.col.gob.mx',
          },
          {
            estado: 'CDMX',
            organizaion: 'instituto de las mujeres del distrito federal ',
            direccion: 'tacuba 76 ir piso, col, centro Histórico, delegación Cuauhtémoc, cp.06010',
            contacto: '5555103464, 55122762, 55122856 fax:55122762 distritofedralinmujeres.gob.mx luzrosal@df.gobl.mx ww.inmujres.df.gob.mx , luz_esteva@hotmail.com',
          },
          {
            estado: 'Durango ',
            organizaion: 'Instituto de la mujer duranguense ',
            direccion: 'Zaragosa526 sur, zona centro, Durango. COP. 34000 ',
            contacto: 'durangoinmujres.gob.mx immduranguense@terra.com.mx imd@prodigy.net.mx',
          },
          {
            estado: 'Guanajuato ',
            organizaion: 'Instituto de la mujer Guanajustense ',
            direccion: 'paseo de la presa 97, col. Altos, Guanajuato, 36000',
            contacto: '4737372402 guanajuato@inmujeres.gob.mx imug@guanajuato.gob.mx rosy_ochoa2001@hotmail.com',
          },
          {
            estado: 'Guanajuato',
            organizaion: 'Red de mujeres del bajío ',
            direccion: 'Nicólas Bravo 202 A, col. Zona centrto, Celaya, CP38000. ',
            contacto: '4616126492 ceremba@procigy.net.mx',
          },
          {
            estado: 'Guerrero ',
            organizaion: 'Secretaria de la mujer del Estado ',
            direccion: 'Blvd. René Juárez Cisneros 62, Edificio costa chica, piso 2, col. Ciudad de los serrvicios, Chilpancingo, c.p 39074 ',
            contacto: '7474719892, 4728010, 4719874, 4719884 fax: 4719965 guerreroinmujeres.gob.mx  semujer@prodigy.net.mx www.semujer.gob.mx ',
          },
          {
            estado: 'Hidalgo ',
            organizaion: 'Instituto hidalguense de la mujer ',
            direccion: 'Vicente Segura 206 planta Alta, COL. Periodistas, pachuca, CP. 4200 ',
            contacto: '7710177171, 7151635, 7181407, 7150683 cent.cap. 7152262 cent, cap. 71815 fax: 7150683 hidalgo@inmujeres.gob.mx, dgmujer@ehidalgo.gob.mx; ihm@prodigy.net.mx ',
          },
          {
            estado: 'Jalisco ',
            organizaion: 'Instituto jalisciense de las mujeres ',
            direccion: 'Miguel blanco 833, col. Centro, Guadalajara c.p 44100. ',
            contacto: '3336583167, 6583174, 6583166, 6583170 jalisco@inmujeres.gob.mx; mujer@jalisco.gob.mx csalas77@hotmail.com',
          },
          {
            estado: 'Estado de méxico ',
            organizaion: 'Instituto méxiquense de la mujer',
            direccion: 'Independencia poniente q06, tercer piso, Toluca ',
            contacto: '5555103464, 55122762/65, 55122845 fax: 55122762 edomexico@inmujeres.gob.mx, inmem@edomex.gob.mx; www.imem.gob.mx',
          },
          {
            estado: 'Estado de méxico ',
            organizaion: 'Servicios de atención integral para la mujer, AC, SEA IPM ',
            direccion: 'Av. Sor juna inés de la cruz 666, Benito juaréz, Nezahualcóyotl, cp.57000. ',
            contacto: '5555129426, cel: 0445518496146 fax: 511129426 mexpdh@prodigy.net.mx ',
          },
          {
            estado: 'Morelos',
            organizaion: 'Istituto de la mujer para el Estado de Morelos ',
            direccion: 'Dr. Manuel Maziri 206, colonia Miraval, Cuernavaca, CP. 62270 |',
            contacto: '735 310 3024, 310 30 25  fax: 310 30 25  morelosinmujeres.gob.mx morales_ avila@hormail.com institutodelamujerdemorelos@hotmailail.com fan44_hotmail.com',
          },
          {
            estado: 'Nayarit ',
            organizaion: 'Instituo de la mujer Nayarita ',
            direccion: 'Zacatecas q7 sur, interior 2y3, colo. Centro Tepic.',
            contacto: '3112170377 nayarit@inmujeres.gob.mx  inmunay@hotmail.com',
          },
          {
            estado: 'Sonora ',
            organizaion: 'Instituto Sonorense de la mujer ',
            direccion: 'Centro de Gobiern, Edificio Sonora, 3er. Nivel Ala Norte, Boulevard Paseo Río Sonora y Comonfort, Col. Villa de seris, HERmosillo, C.P 83280. 662 212 0340 ext. 16/212 3630, 018006729959 fax:2127914 sonora@inmujeres.gob.mx; mujer@rtn.uson.mx; mariaesthernf@hotmail.com',
            contacto: '99331399412 fax:3155226 tabascoinmujeres.gob.mx sperez@inmujeres.gob.mx dulcevictoria86@yahoo.com.mx ',
          }
        ]
      }
    }
  }
</script>