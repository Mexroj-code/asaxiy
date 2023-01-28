import React,{useState} from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose,MdOutlineSmartToy } from "react-icons/md";
import { Link } from "react-router-dom";
import {FiSmartphone} from "react-icons/fi"
import {TfiWindow} from "react-icons/tfi"
import {AiOutlineDesktop,AiOutlineCar} from "react-icons/ai"
import {IoGameControllerOutline,IoFootball,IoShirtOutline} from "react-icons/io5"
import {CgSmartHomeRefrigerator} from "react-icons/cg"
import {SlScreenDesktop} from "react-icons/sl"
import {BiDish} from "react-icons/bi"
import {GiWindow,GiToyMallet,GiHairStrands} from "react-icons/gi"
import {HiOutlineBuildingOffice2} from "react-icons/hi2"
import {TbBooks} from "react-icons/tb"
// language
import { useTranslation, } from 'react-i18next';
import {Col,Row} from "react-bootstrap"

const data = [
  {
    id:1,
    name:"Kitoblar",
    icon:<TbBooks size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Badiy adabiyotlar",
        submenu:[
          {
            id:1,
            name:"Barcha Mahsulot"
          },
          {
            id:2,
            name:"Jahon Adabiyotlar"
          },
          {
            id:3,
            name:"O'zbek Adabiyoti"
          }
        ]
      }
    ]
  },
  {
    id:2,
    name:"Telefon va Gadjetlar",
    icon:<FiSmartphone size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Iphone",
        submenu:[
          {
            id:1,
            name:"Android"
          },
          {
            id:2,
            name:"iphone"
          },
          {
            id:3,
            name:"xiome"
          }
        ]
      }
    ],
  },
  {
    id:3,
    name:"Konditsionerlar",
    icon:<TfiWindow size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"kondetsanerlar",
        submenu:[
          {
            id:1,
            name:"artel"
          },
          {
            id:2,
            name:"sony "
          },
          {
            id:3,
            name:"chillachi"
          }
        ]
      }
    ],
  },
  {
    id:4,
    name:"Kompyuter va orgtexnika",
    icon:<AiOutlineDesktop size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"notebooklar ",
        submenu:[
          {
            id:1,
            name:"MacBook M1 M2"
          },
          {
            id:2,
            name:"Lenova legion GTX 1660 Ti "
          },
          {
            id:3,
            name:"Asus Rog strix"
          }
        ]
      }
    ],
  },
  {
    id:5,
    name:"Geymerlar uchun",
    icon:<IoGameControllerOutline size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Quloqchin va Mekrafonlar",
        submenu:[
          {
            id:1,
            name:"HyperX Cloud Alpha Wireless"
          },
          {
            id:2,
            name:"HyperX QuadCast"
          },
          {
            id:3,
            name:"HyperX ROW"
          }
        ]
      }
    ],
  },
  {
    id:6,
    name:"Maishiy texnika",
    icon:<CgSmartHomeRefrigerator size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Maishiy texnika",
        submenu:[
          {
            id:1,
            name:"Gazplita"
          },
          {
            id:2,
            name:"Kiryuvish mishnasi"
          },
          {
            id:3,
            name:"Xaladilnik"
          }
        ]
      }
    ],
  },
  {
    id:7,
    name:"Televizor video va audio",
    icon:<SlScreenDesktop size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Telivezor",
        submenu:[
          {
            id:1,
            name:"Samsung"
          },
          {
            id:2,
            name:"LG"
          },
          {
            id:3,
            name:"Artil"
          }
        ]
      }
    ],
  },
  {
    id:8,
    name:"Idish tovoqlar",
    icon:<BiDish size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"chinni idishlar ",
        submenu:[
          {
            id:1,
            name:" piyola "
          },
          {
            id:2,
            name:"Choynik"
          },
          {
            id:3,
            name:" Likopcha "
          }
        ]
      }
    ],
  },
  {
    id:9,
    name:"Mebel",
    icon:<GiWindow size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Mebillar",
        submenu:[
          {
            id:1,
            name:"Devan"
          },
          {
            id:2,
            name:"krislolar"
          },
          {
            id:3,
            name:"stol-stul"
          }
        ]
      }
    ],
  },
  {
    id:10,
    name:"Sport va dam olish",
    icon:<IoFootball size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"boks va rukapashnik",
        submenu:[
          {
            id:1,
            name:"Boks perchatka"
          },
          {
            id:2,
            name:"Qul benti"
          },
          {
            id:3,
            name:"kapa"
          }
        ]
      }
    ],
  },
  {
    id:11,
    name:"Uy va offis uchun texnika jihozlari",
    icon:<HiOutlineBuildingOffice2 size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Manitor va boshqa narsalar",
        submenu:[
          {
            id:1,
            name:"Manitor"
          },
          {
            id:2,
            name:"Pratsisser"
          },
          {
            id:3,
            name:"Kireslo"
          }
        ]
      }
    ],
  },
  {
    id:12,
    name:"Avtomobillar",
    icon:<AiOutlineCar size={25} style={{marginRight:"10px",}}/>,
    submenu:[
      {
        id:1,
        name:"Chevrolit",
        submenu:[
          {
            id:1,
            name:"Chevrolit kamaro"
          },
          {
            id:2,
            name:"Porsh Makan"
          },
          {
            id:3,
            name:"Bugatti Weron"
          }
        ]
      }
    ],
  },
]
  

function Menu(){
  const [id,setId] = useState(1)
  console.log('id for category',id)
  return(
    <>
      <div className="container-menu">
        <div className="row">
          <div className="left col-3">
            <ul style={{flexDirection:"column"}}>
               {data.map((item)=>{
                 return (
                  <>
                    <div style={{display:"flex",alignItems:"center",justfiyContent:"center",cursor:"pointer"}}>
                      <li onMouseOver={()=>setId(item.id)} className={`${id==item.id && 'hover-category'}`}>  {item.icon}{item.name}</li>
                      </div>
                  </>
                 )
               })}
            </ul>
           </div>
          <div className="right col-9">
            <Row>
              <Col>
              {data[id-1].submenu?.map(item=>{
              return <>
              <h4>{item?.name}</h4>
              <ul>
                {item?.submenu?.map(item=><li>{item?.name}</li>)}
              </ul>
              </>
              })}
              </Col>
            </Row>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default function Navbar() {
  const { t } = useTranslation();
  const [open,setOpen] = useState(false)
  const openToggle=()=>{
    setOpen(!open)
  }
  return (
    <div className='header-navbar'>
        <ul>
            <li onClick={openToggle} style={{display:'flex',alignItems:'center'}}>{open?<MdOutlineClose size={23} style={{marginRight:'10px',color:"#008dff",cursor:'pointer'}}/>:<RxHamburgerMenu className='hamburger-menu' size={23} style={{marginRight:'10px',color:"#008dff",cursor:'pointer',}}/>}<Link to="/">{t('navbar.nav1')}</Link></li>
            <li><Link to='/news'>{t('navbar.nav2')}</Link></li>
            <li><Link to='/newProduct'>{t('navbar.nav3')}</Link></li>
            <li><Link to='/Discounts'>{t('navbar.nav4')}</Link></li>
            <li><Link to='/books'>{t('navbar.nav5')}</Link></li>
            <li><Link to='/telephones'>{t('navbar.nav6')}</Link></li>
            <li><Link to='/tv'>{t('navbar.nav7')}</Link></li>
            <li><Link to='/sports'>{t('navbar.nav8')}</Link></li>
        </ul>
        {open?<Menu/>:""}
        
    </div>
  )
}