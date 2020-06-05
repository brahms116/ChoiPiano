import Layout from '../layouts/layout'
import profile from '../media/profile.png'
import Link from 'next/link'
import Colors from '../styles/styles'

export default function Home() {
  return (
    <Layout>
      <section className="page">        
        <img className="profile" src={profile}/>
        <div className="text">       
          <h1 className="title">Samuel Choi</h1>
          <h2 className="subtitle">Pianist</h2>          
          <h3 className="descrip sd">Pianist: LMUS A, Bch of Music</h3>
          <h3 className="descrip ld">LMUS A, Bch of Music</h3>
          <Link href="/bio">
            <div className="bioButton">my story</div>
          </Link>
        </div> 
      </section>
      <style jsx>{`
        .page{
          display:flex;
          flex-direction:column;
          align-items:center;
          color:${Colors.primary};
        }
        .text{
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .profile{
          height:${258/16}rem;
          margin-top:${93/16}rem;
        }
        .title{
          font-size:2rem;
          font-weight:400;
          text-transform:uppercase;
          margin-top:${38/16}rem;
        }
        .subtitle{
          font-weight:300;
          display:none;
        }
        .descrip{
          font-weight:300;
          margin-top:1rem;
          font-size:0.8rem;
        }
        .bioButton{
          font-size:0.75rem;
          margin-top:${32/16}rem;
          text-transform: uppercase;
          padding: ${10/16}rem ${29/16}rem;
          border: 1px ${Colors.primary} solid;
          margin-bottom:5rem;
          transition: transform 0.2s;
          cursor:pointer;
          font-weight:500;
          border-radius:2px;
        }
        .bioButton:hover{
          color:white;
          border:none;
          background:${Colors.primary};
          transform:translateY(-5%);
        }
        .bioButton:active{
          transform:translateY(0);
        }
        .ld{
          display:none
        }

        @media(min-width:800px){
          .page{
            flex-direction:row-reverse;
            justify-content:center;
            align-items:center;
            margin-top:${78/16}rem;
          }
          .text{
            margin-right:${35/16}rem;
            align-items:flex-end;
          }
          .profile{
            margin-top:0;
            height:${363/16}rem;
          }
          .title{
            margin-top:0;
            font-size:2rem;
            font-weight:400;
          }
          .descrip{
            margin-top:0.5rem;
          }
          .bioButton{
            margin:0;
            margin-top:${28/16}rem;
          }
        }


        @media(min-width:1296px){
          .page{
            display:block;
            margin-top:0;
          }
          .text{
            display:flex;
            position:absolute;
            top:${46000/876}%;
            left:${76000/1440}%;
            align-items:flex-start;
          }
          .sd{
            display:none;
          }
          .ld{
            display:block;
          }
          .subtitle{
            display:block;
            font-size:${28/16}rem;
            
          }
          .profile{
            position:absolute;
            height:${484/16}rem;
            top:${13700/876}%;
            left:${21000/1440}%;
            
          }
          .title{
            width:${260/16}rem;
            font-size:${60/16}rem;
            margin-bottom:1.2rem;
            

          }
          .descrip{
            font-size:1rem;
            
          }
          .bioButton{
            position:relative;
            left:${402/16}rem;
            display:inline;
            wdith:auto;
            border:none;
            color:white;
            background:${Colors.primary};
            padding: ${14/16}rem ${29/16}rem;
          }
        }

      `}</style>
    </Layout>
  )
}
