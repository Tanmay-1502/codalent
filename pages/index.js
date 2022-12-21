import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import pic from "../public/sm.png"
import logo from "../public/Logo.png"
import cam from "../public/Camera.png"
import sha from "../public/Shadow.png"
import mb from "../public/mpr.png"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{position: 'relative',   //desktop
      width: '1440px',
      height: '1096px',
      background: '#FFFFFF'}}>
        <div style={{boxSizing: 'border-box',  //dropdown

position: 'absolute',
width: '1440px',
height: '80px',
left: '0px',
top: '0px',
// borderBottomWidth:1,
// borderBottomColor:'#F2F4F7',
// borderBottomStyle:'solid'

/* Gray/100 */

borderBottom: '1px solid #F2F4F7',
}}>
    <div style={{display: 'flex',    //header
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
padding: '0px',
position: 'absolute',
height: '80px',
left: '0px',
right: '0px',
top: '0px'
}}>
      <div style={{display: 'flex',   //container
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
// paddinRight: 32,
// paddingLeft: 32,
padding: '0px 32px',
width: '1280px',
height: '44px',
flex:'none',
order:0,
flexGrow:0,
}}>
       <text style={{width: '118px',height:'24px',color: '#7F56D9', fontFamily: 'Inter', fontStyle: 'normal',  //text
          fontWeight:600, fontSize:'24px', lineHeight:'24px', 
          flex:'none', order:0, flexGrow:0

}} >Pied Piper</text>
       <div style={{display: 'flex',    //content
flexDirection: 'row',
alignItems: 'center',
padding: '0px',
gap: '40px',
width: '298px',
height: '24px',
flex: 'none',
order: 1,
flexGrow: 0}}>
       <div style={{display: 'flex',   // navigation
flexDirection: 'row',
alignItems: 'center',
padding: '0px',
gap: '32px',

width: '298px',
height: '24px',


/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0
}}>

         <button style={{display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding: '0px',
gap: '8px',

width: '46px',
height: '24px',


/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0
}}>
 
  <text style={{width: '46px',
height: '24px',

/* Text md/Medium */

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 500,
fontSize: '16px',
lineHeight: '24px',
/* identical to box height, or 150% */


/* Gray/500 */

color: '#667085',


/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0}}>
    Home
  </text>

 
         
         </button>
        
         <button style={{display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding: '0px',
gap: '8px',

width: '69px',
height: '24px',


/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0}}>
 
  <text style={{width: '46px',
height: '24px',

/* Text md/Medium */

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 500,
fontSize: '16px',
lineHeight: '24px',
/* identical to box height, or 150% */


/* Gray/500 */

color: '#667085',


/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0
}}>
    Products
  </text>

 
         
         </button>
         <button style={{display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding: '0px',
gap: '8px',

width: '53px',
height: '24px',


/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0
}}>
 
  <text style={{width: '46px',
height: '24px',

/* Text md/Medium */

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 500,
fontSize: '16px',
lineHeight: '24px',
/* identical to box height, or 150% */


/* Gray/500 */

color: '#667085',


/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0
}}>
    Pricing
  </text>

 
         
         </button>
         <button style={{display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding: '0px',
gap: '8px',

width: '34px',
height: '24px',


/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0
}}>
 
  <text style={{width: '46px',
height: '24px',

/* Text md/Medium */

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 500,
fontSize: '16px',
lineHeight: '24px',
/* identical to box height, or 150% */


/* Gray/500 */

color: '#667085',


/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0
}}>
    Blog
  </text>

 
         
         </button>
      </div>
       </div>
       <div style={{                     //navigation action
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px',
        gap: '12px',
        
        width: '189px',
        height: '44px',
        
        
        /* Inside auto layout */
        
        flex: 'none',
        order: 2,
        flexGrow: 0
       }}>
        <button style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding:'10px 18px',
          gap: '8px',
          
          width: '83px',
          height: '44px',
          
          borderRadius: '8px',
          
          /* Inside auto layout */
          
          flex: 'none',
          order: 0,
          flexGrow: 0
        }}>
          <text style={{width: '47px',
height: '24px',

/* Text md/Medium */

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 500,
fontSize: '16px',
lineHeight: '24px',
/* identical to box height, or 150% */


/* Gray/500 */

color: '#667085',


/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0
}}>
          Login
          </text>
         
        </button>
        <button style={{boxSizing: 'border-box',

/* Auto layout */

display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding:'10px 18px',
gap: '8px',

width: '94px',
height: '44px',

/* Primary/600 */
borderStyle:'solid',
borderWidth:1,
borderColor: '#7F56D9',
background: '#7F56D9',

/* Primary/600 */

// border: 1px solid #7F56D9;
/* Shadow/xs */

boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
borderRadius: 8,

/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0}}>
          <text style={{
            width: '58px',
            height: '24px',
            
            /* Text md/Medium */
            
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            /* identical to box height, or 150% */
            
            
            /* Base/White */
            
            color: 'white',
            
            
            /* Inside auto layout */
            
            flex: 'none',
            order: 1,
            flexGrow: 0
          }}>
          SignUp
          </text>
            
          </button>
       </div>
       
       
      </div>
    </div>
    </div>
    
    <div  style={{display: 'flex',   //section
      flexDirection: 'column',
      alignItems: 'center',
      padding:'96px 0px',
      gap: '64px',
      
      position: 'absolute',
      width: '1440px',
      height: '968px',
      left: 'calc(50% - 1440px/2)',
      top: '80px'
      }}>
    
    <div className=" border-none" style={{display: 'flex',  //container1
flexDirection: 'column',
alignItems: 'center',
padding:'0px 32px',
gap: '32px',

width: '1280px',
height: '264px',


flex: 'none',
order: 0,
flexGrow: 0}}>
      <div className=" border-none" style={{display: 'flex',   //content
flexDirection: 'column',
alignItems: 'center',
padding: '0px',
gap: '48px',

width: '1216px',
height: '264px',


/* Inside auto layout */

flex: 'none',
order: 0,
alignSelf: 'stretch',
flexGrow: 0}} >

<div style={{display: 'flex',  //heading and support
flexDirection: 'column',
alignItems: 'center',
padding: '0px',
gap: '24px',

width: '1024px',
height: '156px',


/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0}}>
   <text style={{width: '1024px',   //text1
height: '72px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 600,
fontSize: '60px',
 lineHeight: '72px',
textAlign: 'center',
letterSpacing: '-0.02em',
 color: '#101828',
 flex: 'none',
 order: 0,
 alignSelf: 'stretch',
 flexGrow: 0
}}>
    
   Beautiful analytics to grow faster
  </text>
  
  <text style={{   //supporting text
    width: '768px',
    height: '60px',
    
    /* Text xl/Normal */
    
    fontFamily: "Inter",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '30px',
    /* or 150% */
    
    textAlign: 'center',
    
    /* Gray/500 */
    
    color: '#667085',
    
    
    /* Inside auto layout */
    
    flex: 'none',
    order: 1,
    flexGrow: 0
  }}>  
  Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
  </text>
</div>
      

<div style={{display: 'flex',  //actions
flexDirection: 'row',
alignItems: 'flex-start',
padding: '0px',
gap: '12px',

width: '276px',
height: '60px',




flex: 'none',
order: 1,
flexGrow: 0}}>
     <button style={{boxSizing: 'border-box',

/* Auto layout */

display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding:'16px 28px',
gap: '12px',

width: '143px',
height: '60px',

/* Base/White */

background: '#FFFFFF',
/* Gray/300 */

 border: '1px solid #D0D5DD',
// /* Shadow/xs */

boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
borderRadius: '8px',

/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0,
}}>
    <div style={{width: '24px',
height: '24px',


/* Inside auto layout */

flex: 'none',
order: 0,
flexGrow: 0,}}>
  <div style={{position: 'absolute',
left: '8.33%',
right: '8.33%',
top: '8.33%',
bottom: '8.33%',

/* Gray/700 */

border: '2px solid #344054'}}>

  </div>

        </div>
        <text style={{width: '51px',
height: '28px',

/* Text lg/Medium */

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 500,
fontSize: '18px',
lineHeight: '28px',
/* identical to box height, or 156% */


/* Gray/700 */

color: '#344054',


/* Inside auto layout */

flex: 'none',
order: 1,                                      
flexGrow: 0}}>
          Demo
        </text>
     </button>
     <button style={{boxSizing: 'border-box',

/* Auto layout */

display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding:'16px 28px',
gap: '12px',

width: '121px',
height: '60px',

/* Primary/600 */

background: '#7F56D9',
/* Primary/600 */
borderColor:'#7F56D9',
borderWidth:1,
borderStyle:'solid',
// border: 1px solid #7F56D9;
/* Shadow/xs */

boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
borderRadius: '8px',

/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0
}}>
  <text style={{width: '65px',
height: '28px',

/* Text lg/Medium */

fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: 500,
fontSize: '18px',
lineHeight: '28px',
/* identical to box height, or 156% */


/* Base/White */

color: '#FFFFFF',


/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0}}>
    SignUp
  </text>
   
     </button>

      </div>


      
      </div>
     

    </div>
    
    <div  style={{display: 'flex',  //container2
flexDirection: 'column',
alignItems: 'center',
// paddingRight: 32,
// paddingLeft:32,
padding: '0px 32px',
gap: '32px',

width: '1280px',
height: '448px',
top: '600px',


/* Inside auto layout */

flex: 'none',
order: 1,
flexGrow: 0
}} >   
<div style={{width: '1216px',
height: '448px',


/* Inside auto layout */

flex: 'none',
order: 0,
alignSelf: 'stretch',
flexGrow: 0
}}>
  <div style={{position: 'absolute',
width: '768px',
height: '448.5px',
left: 'calc(50% - 768px/2)',
top: '0px'}}>
  <Image
 // position='absolute'
//   left= '9.95%'
// right= '9.13%'
// top= '3.1%'
// bottom= '10.44%'
left= '0.94%'
  right= '0.92%'
  top= '0%'
  bottom= '0.58%'
src= {pic}
   />
  <Image 
  position= 'absolute'
  left= '47.58%'
  right= '46.91%'
  top= '91.73%'
  bottom= '7%'
  background={logo}
  //src={logo}
  />
  <Image
  position= 'absolute'
  left= '50.1%'
  right= '49.43%'
  top= '1.67%'
  bottom= '97.53%'
  background={cam}
 //src={cam}  
  />
  <Image
  position= 'absolute'
  left= '0.94%'
  right= '0.92%'
  top= '0%'
  bottom= '0.58%'
  //background={mb}
  src={mb}
  />
  <Image
  position= 'absolute'
  left= '-1.67%'
  right= '-0.02%'
  top= '98.69%'
  bottom= '0.22%'
  //background={sha}
  src={sha}
  />



  
  
  </div>
   

  </div>  
   
    
    </div>

    </div>
    

    </div>
    
  )
}
