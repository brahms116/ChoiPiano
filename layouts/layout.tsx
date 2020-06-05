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
                return "My Story:Samuel Choi Piano"
            case "/contacts":
                return "Contacts:Samuel Choi Piano"
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
                <meta content="width=device-width, initial-scale=1" name="viewport" />
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