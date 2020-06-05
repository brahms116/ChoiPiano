import Head from 'next/head'
import { ReactNode } from 'react'
import Navigation from '../components/Navigation'
import {motion} from 'framer-motion'

type layoutProps = {
    children:ReactNode
}

const Layout = (props:layoutProps)=>{

    


    return(
        <motion.div initial={{opacity:0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}} 
            transition={{when:"beforeChildren",staggerChildren:0.3}}
        >
            <Head>
                <title>Choi Piano</title>
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