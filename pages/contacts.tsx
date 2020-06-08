import Layout from '../layouts/layout'
import Colors from '../styles/styles'
import Tick from '../media/tick.png'
import {motion,useAnimation} from 'framer-motion'
import {useState,MouseEvent, ChangeEvent} from 'react'
import wait from '../timer'
const Contacts = ()=>{


    const [emailField,setEmailField] = useState("")
    const [emailError,setEmailError] =useState("")
    const [messageField,setMessageField] = useState("")
    const [messageError,setMessageError] = useState("")

    const updateEmail = (e:ChangeEvent<HTMLInputElement>)=>{
        setEmailField(e.target.value)
        
    }
    const updateMessage = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setMessageField(e.target.value)
    }

    const validate = (email:string,message:string)=>{
        let isValid = true

        if(!email){
            isValid =false
            setEmailError("Email cannot be Blank")
        }
        if(!message){
            isValid=false
            setMessageError("Message cannot be blank")
        }
        
        let regex = /^[a-z0-9_.-]+@[a-z0-9]+[.][a-z0-9]+$/
        if(!regex.test(email)){
            isValid=false
            setEmailError("Please Enter A Valid Email Address")
        }
        return isValid
    }

    const formControl=useAnimation()
    const loaderControl=useAnimation()
    const successControl=useAnimation()

    const handleClick = async(e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if(validate(emailField,messageField)){
            formControl.start({
                opacity:0
            })
            loaderControl.start({
                display:"block",
                opacity:1
            })
            //axios send
            await wait(500)
            await loaderControl.start({
                opacity:0
            })
            await loaderControl.start({
                display:"none"
            })
            await successControl.start({
                display:"block",
                opacity:1
            })
            await wait(1000)
            await successControl.start({
                opacity:0
            })
            await successControl.start({
                display:"none"
            })
            setEmailField("")
            setMessageField("")
            setEmailError("")
            setMessageError("")
            formControl.start({
                opacity:1
            })
        }
        
    }


    return(
        <Layout>
            <section className="page">
                <h1 className="title">CONTACTS</h1>
                <div className="divider sd"/>
                <div className="details">
                    <h3 className="detailLabel">
                        MOBILE:
                    </h3>
                    <p className="detailP">
                        0214 929 856
                    </p>
                    <h3 className="detailLabel margup">
                        EMAIL:
                    </h3>
                    <p className="detailP">
                        samuelchoi@gmail.com
                    </p>
                </div>
                <div className="divider ld"/>
                <form action="" className="contactForm">
                    <motion.div initial={{display:"none",opacity:0}} animate={loaderControl}><div className="loader"></div></motion.div>
                    <motion.div initial={{display:"none",opacity:0}} animate={successControl}>
                        <div className="successBox">
                            <img src={Tick} alt="A success icon"/>
                            <div className="successMessage">message sent</div>
                        </div>
                    </motion.div>
                    <motion.div animate={formControl}>
                        <div className="formArea">
                            <label className="formLabel">Email</label>
                            <input type="email" value={emailField} className={emailError?"textInput inputError":"textInput"} onChange={updateEmail}/>
                            <div className="errorText margBottom">{emailError}</div>
                            <label className="formLabel">Message</label>
                            <textarea className={messageError?"message inputError":"message"} value={messageField} rows={5} onChange={updateMessage}></textarea>
                            <div className="errorText">{messageError}</div>
                            <button onClick={handleClick} className="submitButton" >send</button>
                        </div>
                    </motion.div>
                </form>
            </section>
            <style jsx>{`
                .ld{
                    display:none;
                }
                .page{
                    margin-top:${111/16}rem;
                    display:flex;
                    flex-direction:column;
                    margin-left:${23/16}rem;
                    margin-right:${23/16}rem;
                    padding-bottom:4rem;
                    
                }
                .title{
                    position:absolute;
                    top:${56/16}rem;
                    right:11%;
                    transform:translateX(50%) rotate(90deg) translateX(50%);
                    font-size:${80/16}rem;
                    font-weight:400;
                    color:${Colors.primary};
                    z-index:-1;
                }
                .divider{
                    width:${60/16}rem;
                    height:${2/16}rem;
                    background:${Colors.primary};
                }
                .details{
                    margin-top:${86/16}rem;
                    margin-bottom:${217/16}rem;
                    color:${Colors.primary};
                }
                .detailLabel{
                    font-weight:300;
                    font-size:1rem;
                    margin-bottom:0.5rem;
                }
                .margup{
                    margin-top:1.5rem;
                }
                .detailP{
                    font-size:1rem;
                    font-weight:300;
                }
                .contactForm{                    
                    position:relative;
                    z-index:0;
                    color:${Colors.primary};
                }
                .formArea{
                    
                    
                    display:flex;
                    flex-direction:column;
                }
                .formLabel{
                    font-size:0.75rem;
                    font-weight:500;
                    letter-spacing:0.57em;
                    text-transform:uppercase;
                    margin-bottom:${22/16}rem;
                }
                .textInput{
                    height:${38/16}rem;
                    border:1px ${Colors.inputColor} solid;
                    padding:0 1rem;
                    font-weight:300;
                    font-size:1rem;
                    font-family:'Raleway',sans-serif;
                    margin-bottom:0.5rem;
                    border-radius:0;
                }
                .message{
                    border:1px ${Colors.inputColor} solid;
                    padding:1rem 1rem;
                    font-weight:300;
                    font-size:1rem;
                    font-family:'Raleway',sans-serif;
                    border-radius:0;
                    margin-bottom:0.5rem;
                }
                .textInput:focus, .message:focus{
                    border-color:${Colors.primary};
                }
                .inputError{
                    border-color:${Colors.error};
                }
                .margBottom{
                    margin-bottom:${42/16}rem;
                }
                .errorText{                    
                    font-size:${14/16}rem;
                    color:${Colors.error};
                }
                .submitButton{
                    background:${Colors.primary};
                    color:white;
                    border:none;
                    font-family:inherit;
                    padding: ${13/16}rem;
                    text-transform:uppercase;
                    text-align:center;
                    margin-top:${34/16}rem;
                    transition: tansform 0.2s;
                    cursor:pointer;
                    font-weight:500;
                }
                

                .successBox{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    position:absolute;
                    left:50%;
                    top:50%;
                    transform:translate(-50%,-50%);
                }
                .successMessage{
                    font-size:2rem;
                    text-transform:uppercase;
                    margin-top:${75/16}rem;
                    color:${Colors.success};
                    white-space:nowrap;
                }
                .loader{
                    position:absolute;
                    left:50%;
                    top:50%;
                    border:0.2rem ${Colors.inputColor} solid;
                    border-radius:50%;
                    border-top:0.2rem ${Colors.primary} solid;
                    height:5rem;
                    width:5rem;
                    animation: load 1s linear infinite;
                }
                @keyframes load{
                    0%{transform:translate(-50%,-50%) rotate(0);}
                    100%{transform:translate(-50%,-50%) rotate(360deg);}
                }

                @media(min-width:800px){
                    .submitButton:hover{
                        transform:translateY(-5%);
                    }
                    .submitButton:active{
                        transform:translateY(0%);
                    }
                    .page{
                        margin-left:6%;
                    }
                    .sd{
                        display:none;
                    }
                    .ld{
                        display:block;
                        margin-bottom:${73/16}rem;
                    }
                    .title{
                        transform:none;
                        right:${59/16}rem;
                        top:${370/16}rem;
                        font-size:${112/16}rem;
                    }
                    .details{
                        margin-top:0;
                        margin-bottom:${157/16}rem;
                    }
                    .contactForm{
                        max-width:${537/16}rem;
                    }
                }
                

            `}</style>
        </Layout>
    )
}

export default Contacts