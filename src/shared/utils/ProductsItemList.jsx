// Lista antigua con datos estaticos
const products = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    category: "Audio",
    price: 299.99,
    desc: "Experimenta un sonido envolvente con estos auriculares inalámbricos, diseñados para ofrecer comodidad y una calidad de audio excepcional, ideales para amantes de la música y profesionales.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARkAwcfQ1DQ3u2p5o35_TLC9h8l2UVcW8YyURdpjoFp9N_c-hmyd8gWzp4YZxEaYgkDSXv6zFyOa7uCqe0hHXtBVPlKKG7x5ezIBMLbep9Wd0qAxXEwleRosif6MefsNElxFqOZLpvdxJcBIjl_1R5UNcPUb7kh9lAS7ix6SFwC57O2g3-RBBEiY8RpVEsbpcPxblRymCt7QunuFixGZ-nWhyadu2XLm8qcwx1rO-_t4QIG2xMB728klgMAasWh3fY0sgn5tqj4Gw",
  },
  {
    id: 2,
    name: "Smartwatch with Health Tracking",
    category: "Wearables",
    price: 199.99,
    desc: "Mantente en forma con este smartwatch que monitorea tu ritmo cardíaco, pasos y calidad del sueño, combinando tecnología y estilo para tu vida diaria.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJMAYO7PzbWgqzJXsNSdZFN6dRtazKhwv6aN0Bg-p7UC19ErFfEMrjenMYLUOH_0HwZ8sWik1jNXLC8XkRaWYQuPH8DXwU8qjrNHa25jolSkb5lizrhlKqjCIzIjs-x3nOoYTKkTao9K58PCpoCiQy2WookUAN5NTgLNu4LKAZB32CQc28nKF8YM_S4YKwyrR8MQU0aRhbcTdIbUKHL4MUAiGKoXHB4r42eOTit-knGCW7K-bvvjUcWV3WWc5nlvL8eSRYr2Us3fY",
  },
  {
    id: 3,
    name: "Ultra-Thin Laptop with High Performance",
    category: "Laptops",
    price: 1299.99,
    desc: "Portátil ultra delgado con alto rendimiento, diseñado para profesionales que necesitan velocidad y portabilidad en tareas exigentes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCn8In6vCyTt0gpW_SEPwIyEGXJxfOhKscxtpvAIabJD5aRx6ddxNrRWkouW7ILcBAdAlceWvMbpIOegniM_r65qrf7F50qFpu1wL7PYeUU12UPwdTYxnUjAbL6GVOyvvFfj3AX7jiuNbC7LoGCauSIViEwvdvqukjwmiicDO15bu00jZBaWdaQ__uk9ujUWEZ35WnUEpgpJV-q2TasBNP00fd6Os7VbT-vyABEUo3xBNk7KB49WgGmggdsscIZl4RxXj4mDl_zN-Q",
  },
  {
    id: 4,
    name: "Ergonomic Wireless Mouse",
    category: "Mouse",
    price: 59.99,
    desc: "Ratón inalámbrico ergonómico con seguimiento de precisión y batería de larga duración, ideal para uso prolongado sin molestias.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClTGZwPqQxDNPKOpqbPKgg3Jtx0jcdq7jerTaptF_vhnQaMfOxcDcIn2tGnS4Up1CL_DKg1JPA1DDbuMGpOSCcrDmUYiofPsxg2KqfkekBcf2JVOVB791Pte7j9tb1Oqtf_aNqDg7VqIYRB1yVhVJQj7KWJor51IjtR1_7lMZIbDdq6-jgeL6aM4UdR_eHlTN5g-l-DL5R4V09bwalQTGeAAzJMVOsc2aMxsk_-SMQjCdr_yzLzIZjLd8LGBy9FiY0SOWeJwMBlkE",
  },
  {
    id: 5,
    name: "Mechanical Keyboard with Customizable Keys",
    category: "Keyboards",
    price: 149.99,
    desc: "Teclado mecánico con retroiluminación RGB personalizable y teclas programables para una experiencia de escritura única y precisa.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChc9DW3P8MeP7-HScH6wGsF8yHopzFcG_jtXOFODCPRWl0VbGJLZShpT7KotzgVclalmfS6ifITfRxBa5gjsVOXlFkZJGrkwXgEeFdZvFUVDDDOxrsQZ0lisfGlsXiaMp_b5lZgSWpGT21J0CaPYCVP-wi8yXp-9udpRZqhFyWhagNk29u5a7kgw1vw2i-IG7RpbdZWlP047R6Sh3NG9ouE4FSZzVPmrtN9Fa9S7jKk6x0qII1GoM6sh-7HppDgLm0oiFkv1wuEAY",
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 79.99,
    desc: "Altavoz Bluetooth portátil y compacto que ofrece un sonido potente y claridad nítida, fácil de emparejar con tus dispositivos favoritos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkXvOpHweb3fke1Kb0inaPgIe3ViSmTM76NMt6vQICvx7CLpncur43U7RlDdVrK-Ey0ZVqFlA8IesnWzbn_QO746I9W5Ik6-2PoODeXsIFA6M5tiAhR7RFNnE9aUmU811BDvhPIiiHU6yBh8C3JF_2NpXu3aTMnYRNNyYxhcKq5QunMuSZuVW_YIPsL-Pzf283ubzK9Qyakf3ApIU7FesFPmyAZr6teKAR4Pnd8Blx6xxrdKu1OXSYCY6nv_EHk04hOsdRR6ilW5A",
  },
  {
    id: 7,
    name: "High Fidelity Studio Headphones",
    category: "Audio",
    price: 349.99,
    desc: "Auriculares de alta fidelidad para estudio, que ofrecen un audio equilibrado y claro, ideales para profesionales del sonido.",
    image:
      "https://mezeaudio.com/cdn/shop/files/Meze-Audio-105-AER-headphone-01.webp?v=1727248860&width=1500",
  },
  {
    id: 8,
    name: "Compact Wireless Earbuds",
    category: "Audio",
    price: 129.99,
    desc: "Auriculares inalámbricos compactos y ligeros, con un sonido nítido y excelente autonomía para acompañarte todo el día.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA84heyvlwoTmQy3oI6BhvXm2ARvUNphT64jojG_jPUY51bk4m6jI58p-nI43oHxDvCKeQoWer7xt3jZYdgOP5IVK6_JF4smCYg3GO7aYJbUVFSA9XZiunCsgmyDk6PmGVzQH9BiXPV3W5PupWV7gnsHRslgbuCWDQcX9YcVhRYFtdiDHAiDtENFKVmjUtcvGrkTfiu3mW8_OT0unApeCwAmtwypSZJEhYjLBnFgVYxMX2JdGhF3zZrI2SaQPpsJNZFAALNX0QkvgY",
  },
  {
    id: 9,
    name: "Bluetooth Soundbar",
    category: "Audio",
    price: 219.99,
    desc: "Barra de sonido Bluetooth que mejora cualquier sistema multimedia con audio potente y conectividad fácil.",
    image:
      "https://jvctv.com.au/cdn/shop/files/JVC_TH-N322B_1.png?v=1706681437",
  },
  {
    id: 10,
    name: "Noise-Isolating Over-Ear Headphones",
    category: "Audio",
    price: 279.99,
    desc: "Auriculares circumaurales con aislamiento de ruido avanzado para una experiencia auditiva inmersiva y sin distracciones.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 11,
    name: "Wireless Gaming Headset",
    category: "Audio",
    price: 199.99,
    desc: "Auriculares gamer inalámbricos con sonido envolvente y micrófono ajustable para comunicación clara en juegos.",
    image:
      "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Gaming-Headsets/VIRTUOSO%20MAX/gallery/carbon/VIRTUOSO_MAX_WIRELESS_CRBN_01.webp",
  },
  {
    id: 12,
    name: "Smart Speaker with Voice Control",
    category: "Audio",
    price: 149.99,
    desc: "Altavoz inteligente con control por voz que permite reproducir música, controlar tu hogar inteligente y más.",
    image:
      "https://crdms.images.consumerreports.org/f_auto,w_1200/prod/products/cr/models/401596-smart-speakers-marshall-uxbridge-voice-10014110.png",
  },
  {
    id: 13,
    name: "Noise-Canceling In-Ear Monitors",
    category: "Audio",
    price: 189.99,
    desc: "Monitores intraaurales con cancelación activa de ruido para música y llamadas con calidad profesional.",
    image:
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 14,
    name: "Multimedia Bluetooth Speaker",
    category: "Audio",
    price: 99.99,
    desc: "Altavoz multifuncional Bluetooth que ofrece sonido claro para música, películas y llamadas manos libres.",
    image:
      "https://www.jbl.es/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa268cae4/JBL_IRX108BT_ProductPhoto_AngleLeft_Clipped_1605x1605.png?sw=680&sh=680",
  },
  {
    id: 15,
    name: "Wireless Audio Transmitter",
    category: "Audio",
    price: 129.99,
    desc: "Transmisor de audio inalámbrico para conectar dispositivos de forma rápida y estable, con calidad de sonido cristalina.",
    image:
      "https://cannonsound.com.au/cdn/shop/products/klark-teknik-dw-20t-24-ghz-wireless-stereo-transmitter-for-high-performance-stereo-audio-broadcasting-21493046.png?v=1565418211",
  },
  {
    id: 27,
    name: "Ergonomic Wired Mouse",
    category: "Mouse",
    price: 39.99,
    desc: "Ratón ergonómico con cable, diseñado para máxima comodidad y precisión en el trabajo diario.",
    image:
      "https://cdn.shopify.com/s/files/1/0493/7636/2660/products/A7851011-Anker_Ergonomic_Optical_USB_Wired_Vertical_Mouse.png?v=1672734093",
  },
  {
    id: 28,
    name: "Gaming RGB Mouse",
    category: "Mouse",
    price: 79.99,
    desc: "Ratón gamer con iluminación RGB personalizable y alta precisión óptica para partidas intensas.",
    image:
      "https://logg.api.cygnus.market/static/logg/Global/Mouse_Gamer_Razer_Deathadder_Essential_6400dpi_5_Botones_Ergon_mico_LED_Blanco/6df8d94fde2645a7b8482aa973f3d680.webp",
  },
  {
    id: 29,
    name: "Wireless Vertical Mouse",
    category: "Mouse",
    price: 69.99,
    desc: "Ratón vertical inalámbrico que reduce la tensión muscular y mejora la postura durante largas sesiones de trabajo.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFWErvLPweb3axA2VcaAh5Ld3PBx7mLeA3b2ILwyFs4XPDSTNm8Bm4xGlvCIR17D9Vpnz3FdjhvS4hukvWR74CUx_qfujWYbkNGrTPfR3_Iwq_yDDZj_WHpAqGew3HUeXxEjfhwWTTZcO3cqCf1MSFwk2mHzXPcF5JWZeLLCy1RTyXyR2j-fX47S0TuAH5XANvNezHGTsdgdrzsENyAl7kPWFJVJs0EdvU0QXCvTPkt27nupEiJYDQ6JVyVbJugTaIXAl8vIYzRXE",
  },
  {
    id: 30,
    name: "Silent Click Mouse",
    category: "Mouse",
    price: 49.99,
    desc: "Ratón silencioso con clics suaves, ideal para ambientes de trabajo que requieren concentración y menos ruido.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmipFFMvfQAufshX1TRYjzztDwemw790_LAOniiSBMLkAXBXKOhOZelFrcd-k3EUvSQQgmVUtX0A7cpYahYsgF9XmdITe0M8JRLZinhB_toTawH5JyMPdjz8PI2aLznzGCAC1Jnt8imrR42u9dzxWrOqJQKWmffyU0RsqGV6xWPj-my1eym49DE_tDfj_mpWIBHAvG_jkQzLag81AL-iXp9zf5MJ8NQWGWiewml58DyfFAhj7eNLcLGOZwJK5KmNCY92hTI6h0iuc",
  },
  {
    id: 31,
    name: "Compact Mechanical Keyboard",
    category: "Keyboards",
    price: 99.99,
    desc: "Teclado mecánico compacto para facilitar la portabilidad sin perder la experiencia de mecanografía premium.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 32,
    name: "Wireless Bluetooth Keyboard",
    category: "Keyboards",
    price: 129.99,
    desc: "Teclado inalámbrico Bluetooth que ofrece conexión estable y una experiencia cómoda para largos periodos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwDz8wPFuH-C6Haz7s7PMcOW81QcMxku_TQWNgFP9CtaZbLHd9gIpWF5Doiun1surd59hlcPCYyDlHwzMLfu7kX3WEpC9HiKmVNLXJpmilixXSWN4ADSRuxiZ6wBGx11tbEnjXO4jfbqG_vvH2vSpswYEchWjA4SFVCDIkFAzDJPZiKysNCIfs7fi64JyoIXx9mVVss67i8O9OxMsVGIBqskKwn3uDob2LSSb4FXZq4pRkdiz7CYakmaP2MBuVzlHmfMWwFi0p960",
  },
  {
    id: 33,
    name: "RGB Backlit Keyboard",
    category: "Keyboards",
    price: 149.99,
    desc: "Teclado con retroiluminación RGB que permite personalizar colores y efectos para destacar tu setup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrFCNaPru7-UrD0C6-L8nUV7PpFa7ugrSFkmJqtGMHgfXWHZLGipKhVJaB2rJvVXrJJw-A_N3P6c2xUPaMiBCp4GKWla38663qoMNbsAq3Wql86BqsALER4cBCy4ILzp63PJWZENHTX6UmvlHXhym7E0yteoCslNJYZDeUppiVSLRagAh6IdDXNOLjruiBh-416N57cnqNQnjSVOVVQ3GmeIrVcaNpmmSO5BnxYEIRa3JSuqjmR3C_8RaOrm4lLgYKRkEqN7KHiks",
  },
  {
    id: 34,
    name: "Ergonomic Split Keyboard",
    category: "Keyboards",
    price: 179.99,
    desc: "Teclado dividido ergonómico para reducir fatiga y mejorar postura, ideal para usuarios intensivos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlsVxYH-5Jnk8VOp5_Ot3QW8lqSXCC9yfVZgAHP7NUCzd6ml2MpaTaX9HgSfVTFdfh1Z2UfdKmXQ9wY7Z6-rLH7U3B51bwz7cAmJw2rXipLacrgRaLW9QVTGr_U6iOYWILCbOcOWy2HwGieQ33UiB_RCZdMlXH1rAkDvVtxI1clrUEFLiHL-Tk-K8X1t31LqMjXEHH--032Lm_nH3S-OpPBGG_niVeVXfut6hZvJqYHIMgGoJ9Ua5iKhF-i9Sbm2KOuVHZHAxZjcE",
  },
  {
    id: 35,
    name: "Laptop Pro 16",
    category: "Laptops",
    price: 1200.0,
    desc: "Potente laptop de 16 pulgadas con rendimiento superior para trabajo profesional y diseño multimedia. Gran autonomía y pantalla de alta resolución.",
    shortDesc: "Powerful Performance",
    image: "images/unnamed(2).png",
  },
  {
    id: 36,
    name: "Wireless Headphones X50",
    category: "Audio",
    price: 179.99,
    desc: "Auriculares inalámbricos X50 con sonido envolvente y cancelación activa de ruido para una experiencia auditiva premium sin cables.",
    shortDesc: "Inmersive Sound",
    image: "images/unnamed(3).png",
  },
  {
    id: 37,
    name: "Smartwatch Series 7",
    category: "Wearables",
    price: 249.99,
    desc: "Smartwatch Series 7 con funciones avanzadas de monitoreo de salud, seguimiento de actividad y notificaciones inteligentes en tu muñeca.",
    shortDesc: "Advanced tracking",
    image: "images/unnamed(4).png",
  },
  {
    id: 38,
    name: "Portable Speaker SoundWave",
    category: "Audio",
    price: 89.99,
    desc: "Altavoz portátil SoundWave compacto y potente, ideal para música en cualquier lugar con conectividad Bluetooth estable.",
    shortDesc: "Compact power",
    image: "../unnamed(5).png",
  },  {
    id: 40,
    name: "AeroDrone Pro",
    category: "Drones",
    price: 999.0,
    desc: "Drone profesional con cámara 4K y control inteligente, ideal para capturar vistas aéreas impresionantes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0SuEuZlVu6whRgcPHIvSjTXee4NuXGsKADMPTmxUuRGmHDS6jrHNfFBHUjVyyJlg9Jl0MR7ty1aBA1HWKNWJQugAO6sDZOm3IvSOZ5SnyLquiAHyLmRutX_yeBz9iu3c8ugxYWgXj7shrMzJ4EXWPFtgA7AttLG4bwixw8Zle-Ga3mVmBpZ2CDH14DC32kVmlJJwncrZtyLMY-HF-88KR0xAUiYlV7WKE9-ozWIluemF8vRiJmfk2V79tp4qx1KzUaarJgupeJwE",
  },
  {
    id: 41,
    name: "Lumina Smart Lamp",
    category: "Smart Home",
    price: 89.99,
    desc: "Lámpara inteligente con múltiples colores y control por app, perfecta para ambientar cualquier habitación.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRXgL0SzDh_gzsURmyA_H-olprxl_MZytK6YZDGtl-dFV_wxmSJLDwGrNPA03a_sLielmY_4WsFAZH_ubCtbFAn3vObGKuqXYmT8de2Jp_l36FhUv0lErAU2F6_Jo1QR5v-MaS2vpeZOfoYvinJ7VldsrQEk98t142FP6OESpGifGWTo2Opj-2zQQZ5TkeqB4fNxqvD3RWMv2WXxvg9tpb9WjNbE5u3u5D1TkQZUKE3h5jsdHZNBYBNxYQ6sOKZFl7a0imr5edQV4",
  },
  {
    id: 42,
    name: "AudioBliss Headphones",
    category: "Audio",
    price: 249.0,
    desc: "Auriculares de alta fidelidad con cancelación de ruido activa, diseñados para una experiencia musical envolvente.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQwsjmV9fjJtHwhzDTtLLntY1cTOEicog-1LSa5xLbod_GwLJkYdwwYC_cPzD-FY8W9WPwJNVCY1I1BQzhHUmR2X3Xmjop4qb5zxYk_L19DVPYVhdMZdsLN7xpLEYZnq_K_IG4CtH00LhNRuwShbgr5a_w7uNWVObQ-Y35DD_CZpvW6BZKjybwj5xiO1p1eRm1HVEsxkqKMfqqwuKZM4fKvPGSNuNGp4hDPiqjI4y3s_BbJnXj2u5KUDt_QQLal1J-CxyVFVuNZ8",
  },
  {
    id: 43,
    name: "VoltPack Go",
    category: "Power Banks",
    price: 59.99,
    desc: "Batería portátil con carga rápida y gran capacidad, perfecta para viajes o uso diario fuera de casa.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzE36pWJaewbWtuMmQual3mRPk302N6_4hHmzn_iYeXpbsaim0x9FQIH3p9KDNnif4WrXLcSxu4i6vl4OGnBHIbvRkMyPAMPD6PkSqqZ-6Os7TGVjHv17GU4KU_jDnutejqZrLQ6ZKJcZcqa7eMK17VmHTX8ublcq2JvgByQT3VdtL9L3lKvcmkXoZa5Onjmbaq5Rocpe6C1RlgJn5guRGjv8tn0P_duGkyun6cJd1_yeT3-t-mbf3m05wcknr9Y5-rwT1UDGym70",
  },
  {
    id: 44,
    name: "CrystalView 4K Monitor",
    category: "Monitors",
    price: 499.0,
    desc: "Monitor 4K con colores vibrantes y alta tasa de refresco, ideal para diseño, edición y gaming.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDspCPVksr7za5QqTapUsQsjKkO93h22B-FNQZKFDNaZxA4PudVIzN--H7uqcRFfAejC5Jvxkcufiz2_dkcxFiyRGfgcVwkaUvgw1zUzqT6Lm5vYssucht40YT3jyOg8_rIL8gao8rLja_CNaJc2DHlYgrEnNH1dL9dFtPOVlpQAT600zRXofXwabkz-Wcjli8L2ztczJhSgehz10BgU93-xqkM9dFxluX2EBLOYbZZKDYmSVfGFnN1eQY7qHFOFxPL3HZGEMTRGXs",
  },
  {
    id: 45,
    name: "ErgoGlide Mouse",
    category: "Mouse",
    price: 79.99,
    desc: "Ratón ergonómico con deslizamiento suave y botones personalizables, diseñado para largas jornadas de trabajo.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe27YaI6pbGKQ6v25l9vTvq9GZn7k3vOwSr1hqbj92Nuei_M9rmMKJs80ECxaCrNfqkX9LFbwyCn6FsiHoCba_f-wMJHC2dXsi9qDHwL_SNFQE-sOkK4p3uiaQrYPO3gJsuitxqAaK74UyCEUbkufHYhhFrFh0m1Y8fFYWU-YKG8x7pQut1fReq7WokG1y8hCMmfR73tCkOSRqBpj7uD6lgzU3yBlPMKeT_51jFU9tlPtQXFhjN3C4p3W3W1L-s75WnvuuJ7ktz7U",
  },
  {
    id: 46,
    name: "ChromaType Keyboard",
    category: "Keyboards",
    price: 149.0,
    desc: "Teclado mecánico RGB con teclas táctiles y personalización completa, ideal para gamers y creadores.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA11z_iZFWx5mJIABWE5C6Q7_Ejx5c-3rLcTvp2gplNyYmHB6cJLcxq_I5sT-_QX3GkDZxv3mitrzIduwsKVyrQUNn_w-gC0WcHzFKnUVLCA7StuoI9Sup4LX2Hq4w1GmeUizM6Nf50QUiu9atN1HanpDxcZvWM03ParOwgNrXlqBZzMhtPlyHulYZlekWWiRNdCbtmlZmKGWXuv_Q0FY8YRtWSIoWLDTyKenelFiUjDgDw32F5GsLhJVjNjvWcsLnGPNFpfLlVnfY",
  },
  {
    id: 47,
    name: "ChronoWatch 2",
    category: "Wearables",
    price: 329.0,
    desc: "Smartwatch avanzado con seguimiento de salud, notificaciones y diseño elegante para cualquier ocasión.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7d4bCDBZBYO98_pU2-qgBte_mtzz6igNkZTUKSBbkK4OclOSmrtDDa3RtpDCgKcwuRkAdihwSzhqLrpPkBCkthf3h0DP5yRXpOoAktx85V-f7f32bM8LIQSVmYPyf8r_ihay-MM0LO1HNa4sMc68eB-W31MdXI5tSlRaxkLTWM4fQ4NSwzmMrvupd6hhLkGUJEwy3kVu1dI3iIDInBwS3r_E0cB7UXGv-p1ChPElUL0MFS2QBIN0_BpBmwAIJI2uE8LiaR8ZT-vQ",
  },
  {
    id: 48,
    name: "ConnectMax Router",
    category: "Networking",
    price: 199.0,
    desc: "Router de alta velocidad con cobertura amplia y seguridad avanzada para toda la casa o la oficina.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDncfW2TSjbw79DyE3i2nXYc8XvNgdmJyo0eUIrEvS64MTkM08pkJZ7dJf0zxoa05xzSc-r-XsAV9zYVQ3-Im7ozg1XZuIbc_GnJ_eIL8V2Yh2_Uy8fnN8Vap2CBdTSbV70JYq6GeHvRkuF18AZiwDAw7M4gYG95zYB98gCq2DBZwcV9m8Ft5owb1Mqow6ZLCdOa24InSHcMNMzktvbVAuS8h6n8AEpDieOr28MDwDlC8ACYTFqTKz0LA91MWq9jApyevd1iJnIQ3E"
  }
  ];

export default products;
