import '../styles/main.sass'
// Poder importar directamente sass es gracias a Next y su built-in sass que se configura en next.config

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
