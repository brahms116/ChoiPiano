import {useRouter} from 'next/router'
import Colors from '../styles/styles'
import burgerMenu from '../media/burgerMenu.png'
import closeMenu from '../media/closeMenu.png'
import Link from 'next/link'
import {useState} from 'react'
import {motion, useAnimation} from  'framer-motion'

const Navigation = ()=>{
    const router = useRouter()
    const path = router.pathname
    const [menuState,setMenuState] = useState(false)

    const menuControl = useAnimation()
    const iconControl = useAnimation()

    const iconSwap = async(menu:boolean)=>{
        await iconControl.start({
            opacity:0
        })            
        setMenuState(!menu)
        await iconControl.start({
            opacity:1
        })

    }

    const handleClick = async()=>{
        iconSwap(menuState)
        if(!menuState){
            await menuControl.start({
                display:"flex",
                x:"100vw"                
            })
            
            await menuControl.start({
                x:0,
            })
        }
        else{
            await menuControl.start({
                x:"100vw",
                
            })
            await menuControl.start({
                display:"none"
            })
            
        }
    }

    return(
        <div className="main">
            <div className='mobileNav'>                
                    <div className='mobileNavBar' onClick={handleClick}>
                        <span className='logo'>CHOI PIANO</span>
                        <motion.div animate={iconControl}>
                            <img className='burgerMenu'src={menuState? closeMenu:burgerMenu} alt="menu icon for navigation"/>
                        </motion.div>
                    </div>
                <motion.div 
                    style={{height:"100%",background:"white"}} 
                    initial={{x:"100vw", display:"none"}} 
                    animate={menuControl}
                    transition={{type:"tween"}}
                >
                    <div className='mobileNavMenu'>
                        <nav className='navItems'>
                            <Link href="/" >
                                <a><div className={path=='/'?'current linkTitle':'linkTitle'}>Home</div></a>
                            </Link>
                            <Link href="/my-story">
                                <a><div className={path=='/my-story'?'current linkTitle':'linkTitle'}>Bio</div></a>
                            </Link>
                            <Link href="">
                                <a href="https://www.youtube.com/channel/UCq4GaONJPH1qPpSjiVKTluw" rel="noopener" target="_blank"><div className="linkTitle">YouTube</div></a>
                            </Link>
                            <Link href="">
                                <a><div className="linkTitle">Facebook</div></a>
                            </Link>
                            <Link href="/contacts">
                                <a><div className="linkTitle contactMe">Contact Me</div></a>
                            </Link>
                        </nav>
                    </div>
                </motion.div>                
            </div>
            
            
            <div className="navBar">
                <span className="logo">CHOI PIANO</span>
                <nav className='navItems'>
                    <Link href="/contacts">
                        <a><div className="linkTitle contactMe">Contact Me</div></a>
                    </Link>
                    <Link href="/" >
                        <a><div className={path=='/'?'current linkTitle':'linkTitle'}>Home</div></a>
                    </Link>
                    <Link href="/my-story">
                        <a><div className={path=='/my-story'?'current linkTitle':'linkTitle'}>Bio</div></a>
                    </Link>
                    <Link href="">
                        <a href="https://www.youtube.com/channel/UCq4GaONJPH1qPpSjiVKTluw" rel="noopener" target="_blank"><div className="linkTitle">YouTube</div></a>
                    </Link>
                    <Link href="">
                        <a><div className="linkTitle">Facebook</div></a>
                    </Link>
                </nav>
            </div>
            
            


            <style jsx>{`
                
                .main{
                    font-weight:400;
                }
                .mobileNav{
                    width:100vw;
                    position:fixed;
                    z-index:2;
                    top:0;
                    display:flex;
                    flex-direction:column;
                }
                .mobileNavBar{
                    height:${55/16}rem;
                    background:${Colors.navBar};
                    width:100vw;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    box-sizing:border-box;
                    padding: 0 1rem;
                }
                .mobileNavMenu{
                    position:relative;
                    
                    background:${Colors.navBar};
                    min-height:100vh;
                    width:100%;
                    text-align:right;
                    
                    
                }
                .navItems{
                    width:100%;
                    margin-top:10vh;
                    box-sizing:border-box;                                     
                    display:flex;
                    flex-direction:column;
                    text-transform:uppercase;
                }
                

                .linkTitle{
                    margin-right:9.8vw;   
                }
                .navItems a{
                    text-decoration:none;
                    color:${Colors.primary};
                    font-size:0.875rem;
                    letter-spacing:0.1em;
                    padding:${22/16}rem 0;
                }
                .navItems .current{
                    border-bottom:1px ${Colors.primary} solid;
                    display:inline;
                    padding-bottom:0.5rem;
                    padding-left:0.4rem;
                    
                }
                .navItems .contactMe{
                    color:${Colors.accent}
                }
                .logo{
                    color:${Colors.primary};
                    font-size:0.875rem;
                    letter-spacing:0.1em;
                }
                .burgerMenu{
                    height:${11/16}rem;
                }
                .navBar{
                    display:none
                }


                @media(min-width:800px){
                    .mobileNav{
                        display:none;
                    }
                    .navBar{
                        display:flex;
                        width:100vw;
                        justify-content:space-between;
                        align-items:center;
                        box-sizing:border-box;
                        padding:0 1.85rem;
                        margin-top:2rem;
                    }
                    .navItems{
                        width:auto;
                        flex-direction:row;
                        margin-top:0;
                        align-items:center;
                    }

                    .navItems a{
                        padding:0;
                    }
                    .navItems a{
                        transition: transform 0.2s;
                    }
                    .navItems a:hover{
                        transform:translateY(-5%);
                    }
                    .navItems a:active{
                        transform:translateY(0);
                    }
                    .navItems .current{
                        padding-left:0;
                    }
                    .linkTitle{
                        margin:0 0.9rem;;
                    }
                    .contactMe{
                        padding:0.5rem 1.9rem;
                        border:1px ${Colors.accent} solid;
                    }
                }
    
            `}</style>
        </div>
    )
}

export default Navigation