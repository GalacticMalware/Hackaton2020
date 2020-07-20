;
'use strict'

//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_programador_hackaton',
  urlsToCache = [
    './',
    './Directorio',
    './AcercaDe',
    'https://fonts.googleapis.com/css?family=Raleway:400,700',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
    'https://use.fontawesome.com/releases/v5.0.7/css/all.css',
    'https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2',
    './style.css',
    './script.js',
    './img/logo.png',
    './img/favicon.png'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(async cache => {
        await cache.addAll(urlsToCache)
        return self.skipWaiting()
      })
      //.catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})


const WebPush = {
  init () {
    self.addEventListener('push', this.notificationPush.bind(this))
    self.addEventListener('notificationclick', this.notificationClick.bind(this))
    self.addEventListener('notificationclose', this.notificationClose.bind(this))
  },

  /**
   * handle notification push event!
   * @param {NotificationEvent} event
   */
  notificationPush(event) {
      console.log('pushed');
      
    if (!(self.Notification && self.Notification.permission === 'granted')) return
    
    const data = event.data.json()
    const options = {
      title: data.title,
      body: (data.body) ? data.body : '',
      icon: '/images/logo.png',
      vibrate: [300, 200, 300],
      badge: '/images/logo.png',
      data: data.data,
    }

    if (event.data) {
      event.waitUntil(
        this.showNotification(data.title, options)
      )
    }
  },

  /**
   * handle notification click event
   * @param {NotificationEvent} event
   */
  notificationClick(event) {

    event.notification.close()
    
    var clickLink = '/';
   
    if (event.notification.data.link) {
      clickLink = event.notification.data.link
    }
    self.clients.openWindow(clickLink)
  },


  /**
   * handle notification close event
   * @param {NotificationEvent} event
   */
  notificationClose(event) {
    self.clients.openWindow('/')
  },

  /**
   * show notification on display
   * @param {PushMessageData|Object} data
   */
  showNotification(title, data) {
    return self.registration.showNotification(title, data)
  },
}

WebPush.init()