import {AppProps} from 'next/app' 
import '../styles/styles.css'
import {AnimatePresence} from 'framer-motion'

const App= ({Component, pageProps, router}:AppProps)=>{
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route }/>
        </AnimatePresence>
    )

}

export default App