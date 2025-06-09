import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faStar, faBriefcase, faCircle, faBullseye } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStar, faBriefcase, faCircle, faBullseye);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
} 