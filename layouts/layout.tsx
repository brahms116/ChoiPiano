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
                <title>Choi Piano</title>s
            </Head>
            <Navigation/>

            <main>{props.children}</main>
        </div>
    )
}

export default Layout