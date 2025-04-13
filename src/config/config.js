/**
 * Configuración centralizada para la aplicación
 * Aquí se manejan todas las variables de entorno y configuraciones generales
 */

export const config = {
    // Configuración de EmailJS
    emailjs: {
      serviceId: import.meta.env.VITE_SERVICE_ID,
      templateId: import.meta.env.VITE_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    },
    
    // Imágenes con diferentes tamaños para responsive
    images: {
      profile: {
        default: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto/im6qznktqja2povh4b1p",
        small: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto,w_400/im6qznktqja2povh4b1p",
        medium: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto,w_800/im6qznktqja2povh4b1p"
      },
      projects: {
        calendar: {
          default: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto/whycl0fflapnoxlbcvnl",
          thumbnail: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto,w_600/whycl0fflapnoxlbcvnl"
        },
        railcar: {
          default: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto/wxa8zat3w4woiij4ffeu",
          thumbnail: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto,w_600/wxa8zat3w4woiij4ffeu"
        },
        notes: {
          default: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto/abtcr8lqunllpcu2ku9y",
          thumbnail: "https://res.cloudinary.com/dsbjzd18p/image/upload/f_auto,q_auto,w_600/abtcr8lqunllpcu2ku9y"
        },
        ippt: {
          default: "https://res.cloudinary.com/dsbjzd18p/image/upload/v1744430791/nzqbrycp3b5gto0cf2dx.png",
          thumbnail: "https://res.cloudinary.com/dsbjzd18p/image/upload/v1744430791/nzqbrycp3b5gto0cf2dx.jpg"
        },
        yogalab: {
          default: "https://res.cloudinary.com/dsbjzd18p/image/upload/v1744430791/psl8vhtsb2ugvtkpnzfq.png",
          thumbnail: "https://res.cloudinary.com/dsbjzd18p/image/upload/v1744430791/psl8vhtsb2ugvtkpnzfq.jpg"
        }
      }
    },
    
    // Enlaces de redes sociales
    socialLinks: {
      github: "https://github.com/chill0101",
      linkedin: "https://www.linkedin.com/in/lucasruiz0101/",
      whatsapp: "https://wa.link/lq3sag",
      email: "mailto:lucasruiz0110@gmail.com"
    },
    
    // Animaciones
    animations: {
      loadingDelay: 800,
      typingSpeed: 100,
      homeAnimationDelay: 800
    }
  };