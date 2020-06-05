import {AppProps} from 'next/app' 
import '../styles/styles.css'
import {AnimatePresence} from 'framer-motion'

const App= ({Component, pageProps, router}:AppProps)=>{
    return (
            <Component {...pageProps} key={router.route }/>
    )

}

export default App