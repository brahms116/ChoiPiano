import Head from 'next/head'
import { ReactNode } from 'react'
import Navigation from '../components/Navigation'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'

type layoutProps = {
    children:ReactNode
}

const Layout = (props:layoutProps)=>{

    const router = useRouter()
    const findTitle = (path:string)=>{
        switch(path){
            case "/":
                return "Samuel Choi Piano"
            case "/my-story":
                return "My Story: Samuel Choi Piano"
            case "/contacts":
                return "Contacts: Samuel Choi Piano"
        }
        return "hello"
    }

    const findMetaDescrip = (path:string)=>{
        switch(path){
            case "/":
                return "Home page for Korean Australian Pianist Samuel Choi, based in Brisbane"
            case "/my-story":
                return "The story and biography of the Korean Australian Pianist Samuel Choi"
            case "/contacts":
                return "A contact page to contact Samuel Choi"
        }
        return "hello"
    }

    return(
        <motion.div initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}} 
            transition={{when:"beforeChildren",staggerChildren:0.3}}
        >
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168770266-1"></script>
                <script>
                    dangerouslySetInnerHtml={{
                        __html:`
                        <!-- Global site tag (gtag.js) - Google Analytics -->
                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168770266-1"></script>
                        <script>
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                        
                          gtag('config', 'UA-168770266-1');
                        </script>
                        
                        `,
                    }}
                </script>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="google-site-verification" content="rk_7sUfqgXR4pl42-4GXNq1BUPPU0o4TJEigBxrcZ8A" />
                <meta name="description" content={findMetaDescrip(router.pathname)}/>
                <title>{findTitle(router.pathname)}</title>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;900&display=swap" rel="stylesheet"></link>
                {/* <style>
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;900&display=swap');
                </style> */}
            </Head>
            <Navigation/>

            <main>{props.children}</main>
        </motion.div>
    )
}

export default Layout