import {AppProps} from 'next/app' 
import '../styles/styles.css'


const App= ({Component, pageProps, router}:AppProps)=>{
    return (
            <Component {...pageProps} key={router.route }/>
    )

}

export default App