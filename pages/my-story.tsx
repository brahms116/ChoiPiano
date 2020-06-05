import Layout from '../layouts/layout'
import Colors from '../styles/styles'
import Data from '../data'
import Profile from '../media/youtubeprofile.png'
import Arrow from '../media/arrow.png'
import Link from 'next/link'
const Bio = ()=>{
    return(
        <Layout>
            <section className="page">
                <h1 className="title">My Story</h1>
                <div className="contentWrapper">
                    <h2 className="subtitle">pianist</h2>
                    <div className="paragraphs">
                        <p className="bioContent">{Data.para1}</p>
                        <p className="bioContent">{Data.para2}</p>
                        <p className="bioContent">{Data.para3}</p>
                    </div>
                </div>                
                <div className="youtube">
                    <a href="https://www.youtube.com/watch?v=lf4Pqwsnq7k" rel="noopener" target="_blank">
                        <img src={Profile} alt="" className="profile"/>
                        <span className="actionText">Watch me play</span>
                        <img src={Arrow} alt="" className="arrow"/>
                    </a>
                </div>
            </section>
            <section className="footer">
                <h3 className="calltoAction">
                    Send Me A Message!
                </h3>
                <Link href="/contacts"><button className="footerButton hover">contact me</button></Link>
                <div className="linkGroup">
                    <a className="hover" href="https://www.youtube.com/channel/UCq4GaONJPH1qPpSjiVKTluw" rel="noopener" target="_blank">YouTube</a>
                    <a className="hover" href="">Facebook</a>
                </div>
            </section>
            <style jsx>{`
                .page{
                    margin-left:1.25rem;
                    margin-top:${117/16}rem;
                }
                .title{
                    font-weight:400;
                    font-size:5rem;
                    color:${Colors.primary};
                    margin-bottom:${86/16}rem;
                    text-transform:uppercase;
                }
                
                .paragraphs{
                    margin-left:2.3rem;
                    font-weight:300;
                    font-size:${18/16}rem;
                    color:${Colors.primary};
                    margin-right:${22/16}rem;
                    line-height:1.8rem;
                }
                .bioContent{
                    margin-bottom:1.5rem;
                }
                .contentWrapper{
                    position:relative;
                }
                .subtitle{                    
                    letter-spacing:2.8em;
                    position:absolute;
                    font-weight:900;
                    font-size:${18/16}rem;
                    color:${Colors.primary};
                    text-transform:uppercase;
                    transform: translateX(-50%) rotate(-90deg) translateX(-37%) translateY(50%);
                    justify-self:flex-end;

                }
                .youtube{
                    margin-bottom:${100/16}rem;
                }
                .youtube a{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    text-decoration:none;
                }
                .profile{
                    height:${265/16}rem;
                    margin-bottom:${30/16}rem;
                }
                .actionText{
                    text-transform:uppercase;
                    color:${Colors.primary};
                    font-weight:500;
                    font-size:0.875rem;
                    letter-spacing:0.34em;
                }
                .arrow{
                    height:${9/16}rem;
                    margin-top:0.5rem;
                }
                .footer{
                    background:${Colors.primary};
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
                .calltoAction{
                    font-size:2rem;
                    color:white;
                    font-weight:300;
                    margin-top: ${50/16}rem;
                    margin-bottom:${42/16}rem;
                    text-align:center;
                    text-transform:uppercase;
                }
                .footerButton{
                    background:${Colors.accent};
                    font-family:inherit;
                    font-weight:500;
                    font-size:0.875rem;
                    border:none;
                    color:white;
                    text-transform:uppercase;
                    padding:${18/16}rem 2rem;
                    letter-spacing:0.1em;
                    border-radius:2px;
                    margin-bottom:${54/16}rem;
                }
                .linkGroup{
                    display:flex;
                    justify-content:center;
                    margin-bottom:${55/16}rem;
                }
                .linkGroup a{
                    text-decoration:none;
                    color:white;
                    font-weight:400;
                    font-size:0.875rem;
                    letter-spacing:0.1em;
                    text-transform:uppercase;
                    padding: 0 0.875rem;
                }
                .hover{}
                
                @media(min-width:799px){
                    .hover{
                        animate:transform 0.5s;
                        cursor:pointer;
                    }
                    .hover:hover{
                        transform: translateY(-5%);
    
                    }
                    .hover:active{
                        transform: translateY(0%);    
                    }
                    
                    .page{
                        margin-left:${281/16}rem;
                    }
                    .paragraphs{
                        max-width:${431/16}rem;
                        margin-left:0;
                    }
                    .youtube{
                        display:flex;
                        justify-content:flex-end;
                        margin-right:${189/16}rem;
                    }
                    .title{
                        font-size:${112/16}rem;
                    }
                    .calltoAction{
                        margin-top:${91/16}rem;
                    }
                    .subtitle{
                        bottom:0;
                        transform: translateX(-50%) rotate(-90deg) translateX(50%) translateY(-135%);
                    }
                }
            `}</style>
        </Layout>
    )
}

export default Bio