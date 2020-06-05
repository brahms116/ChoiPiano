import Head from 'next/head'
import { ReactNode } from 'react'
import Navigation from '../components/Navigation'
import {motion} from 'framer-motion'

type layoutProps = {
    children:ReactNode
}

const Layout = (props:layoutProps)=>{
    return(
        <div>
            <Head>
                <title>Choi Piano</title>
                <link rel="preload" href="https://fonts.googleapis.com/css2?family=Raleway:300;400;500;900&display=swap" as="style"></link>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;900&display=swap');
                </style>
            </Head>
            <Navigation/>

            <main>{props.children}</main>
        </div>
    )
}

export default Layout