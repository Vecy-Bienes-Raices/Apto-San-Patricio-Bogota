/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - APARTAMENTO SAN PATRICIO BOGOTÁ
 */

const propertyConfig = {
  // 1. SEO
  seo: {
    title: "Venta Apartamento en San Patricio Bogotá - 243m²",
    description: "Venta Apartamento San Patricio Bogotá - $2.000 Millones - 243m² - 5 Habitaciones - 5 Baños - 3 Garajes - Estrato 6. ¡Elegancia y Exclusividad!",
    keywords: "Venta Apartamento San Patricio, Vecy Bienes Raíces, Inmobiliaria Bogotá, Apartamentos Norte Bogotá, Venta Inmuebles San Patricio, Estrato 6 Bogotá",
    propertyId: "ID-BOG-SP01",
    ogUrl: "https://apto-san-patricio-bog.netlify.app/",
    ogImage: "https://raw.githubusercontent.com/Vecy-Bienes-Raices/Apto-San-Patricio-Bogota/main/assets/1.jpg",
    author: "Vecy Bienes Raíces", 
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "❤️ ¡Elegancia y Exclusividad! 🏢",
    tituloHtml: "Apartamento en San Patricio - Bogotá",
    precioVenta: "$2.000.000.000",
    valorAdmin: "$2.000.000",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles
  detalles: [
    { label: "Área Const.", value: "243 m²", icon: "📐" },
    { label: "Año", value: "2004", icon: "🏗️" },
    { label: "Estrato", value: "6", icon: "✨" },
    { label: "Habitaciones", value: "5", icon: "🛏️" },
    { label: "Baños", value: "5", icon: "🚽" },
    { label: "Garajes", value: "3", icon: "🚗" },
    { label: "Piso", value: "5", icon: "🏢" },
    { label: "Barrio", value: "San Patricio", icon: "📍" },
    { label: "Negocio", value: "Venta/Permuta", icon: "💼" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "Alarma", emoji: "🚨" },
    { name: "Balcones (1)", emoji: "🏢" },
    { name: "Baño en cada alcoba", emoji: "🚽" },
    { name: "Biblioteca/Estudio", emoji: "📚" },
    { name: "Calentador/Chimenea", emoji: "🔥" },
    { name: "Citófono", emoji: "📞" },
    { name: "Cocina equipada", emoji: "🍳" },
    { name: "Comedor auxiliar", emoji: "🍽️" },
    { name: "Depósito/Despensa", emoji: "🧺" },
    { name: "Doble Ventana", emoji: "🪟" },
    { name: "Gas domiciliario", emoji: "🏡" },
    { name: "Hab. servicio con baño", emoji: "🛏️" },
    { name: "Hall de alcobas", emoji: "🏠" },
    { name: "Pisos madera/cerámica", emoji: "🪶" },
    { name: "Sala de estar", emoji: "🛋️" },
    { name: "Terraza", emoji: "🌅" },
    { name: "Vista panorámica", emoji: "🌄" },
    { name: "Walking closet", emoji: "👗" },
    { name: "Zona de lavandería", emoji: "🧺" }
  ],
  destacadoInterno: "Alcoba principal con Walking closet y baño privado con tina. Además cuenta con terraza, balcón y estudio para tu comodidad.",

  // 5. Características Externas
  caracteristicasExternas: [
    { name: "Acceso pavimentado", emoji: "🛣️" },
    { name: "Área Social", emoji: "🎉" },
    { name: "Ascensor", emoji: "🏢" },
    { name: "Bicicletero", emoji: "🚴‍♂️" },
    { name: "CCTV", emoji: "📹" },
    { name: "Colegios/Universidades", emoji: "🏫" },
    { name: "Gimnasio cerca", emoji: "💪" },
    { name: "Parqueadero visitantes", emoji: "🚗" },
    { name: "Parques cercanos", emoji: "🌳" },
    { name: "Planta eléctrica", emoji: "🔌" },
    { name: "Portería / Recepción", emoji: "🏢" },
    { name: "Puertas eléctricas", emoji: "🚪" },
    { name: "Salón Comunal", emoji: "🏢" },
    { name: "Trans. público cercano", emoji: "🚍" },
    { name: "Vigilancia 24/7", emoji: "👮" },
    { name: "Zona residencial", emoji: "🏘️" },
    { name: "Zonas verdes", emoji: "🌿" }
  ],
  destacadoUbicacion: "Ubicado en San Patricio, zona residencial exclusiva con fácil acceso a transporte público, parques y zonas comerciales.",

  // 6. Mapa
  mapa: {
    urlEmbed: "https://www.google.com/maps?q=San+Patricio,+Bogota,+Colombia&output=embed",
    titulo: "Ubicación del inmueble en San Patricio"
  },

  // 7. Descripción Final
  descripcionFinal: {
    titulo: "💖 Descubre la elegancia en este apartamento",
    texto: `
    <div class="roi-item">
        <p>🏡 Descubre la elegancia y comodidad en este impresionante apartamento de 243 m² en San Patricio.
        Con <strong>4 habitaciones</strong>, cada una con su propio baño, estudio, terraza, balcón y vista exterior, este apartamento es una verdadera joya.</p>
        <p>Además, la alcoba principal cuenta con un <strong>walking closet y baño privado con tina</strong>.
        Con un depósito y 3 parqueaderos, este apartamento es una excelente opción. ¡Contáctanos para visitarlo y vivir el estilo de vida exclusivo de San Patricio!</p>
        <div style="margin-top: 30px; text-align: center;">
            <a href="analisis.html" class="btn-analisis">
               📋 VER MÁS DETALLES
            </a>
        </div>
    </div>`
  },

  // 8. Multimedia
  multimedia: {
    videoUrl: "assets/recorrido.mp4", 
    videoThumbnail: "", 
    imagesCount: 51, 
    imagePrefix: "assets/",
    imageExtension: ".jpg",
    imagesList: [
      "assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.png", "assets/7.jpg", "assets/9.jpg", "assets/10.jpg",
      "assets/11.jpg", "assets/12.jpg", "assets/13.jpg", "assets/14.jpg", "assets/15.jpg", "assets/16.jpg", "assets/17.jpg", "assets/18.png", "assets/19.jpg", "assets/20.jpg",
      "assets/21.png", "assets/22.jpg", "assets/23.jpg", "assets/24.jpg", "assets/25.jpg", "assets/26.jpg", "assets/27.jpg", "assets/28.jpg", "assets/29.jpg", "assets/30.jpg",
      "assets/31.jpg", "assets/32.jpg", "assets/33.jpg", "assets/34.jpg", "assets/35.jpg", "assets/36.png", "assets/37.jpg", "assets/38.png", "assets/39.png", "assets/40.jpg",
      "assets/41.png", "assets/42.jpg", "assets/43.jpg", "assets/44.jpg", "assets/45.jpg", "assets/46.jpg", "assets/47.jpg", "assets/48.png", "assets/49.jpg", "assets/50.jpg",
      "assets/51.jpg", "assets/52.jpg"
    ]
  },

  // 9. Botón Compartir
  share: {
    whatsappText: `🏢 *APARTAMENTO EN VENTA - SAN PATRICIO, BOGOTÁ*

📍 Ubicación: San Patricio (Cra 18 # 102)
💲 Precio de Venta: $2.000.000.000
💰 Valor Administración: $1.700.000 (Sin incremento 2026)
📐 Área Construida: 243 m²
🛌 Habitaciones: 5
🛁 Baños: 5
🚗 Garajes: 3
🏢 Estrato: 6
🏗️ Año: 2012
✨ Estado: Usado

✅ *Características Destacadas:*

🔥 Terraza, Balcón, Estudio, Chimenea.
🌳 Zona exclusiva y residencial.
💪 Amenidades: Salón Comunal, Gimnasio cercano, Parques.

*🔗 Ver Ficha Completa:*
https://apto-san-patricio-bog.netlify.app/`
  }
};
