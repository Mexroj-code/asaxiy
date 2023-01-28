import React from 'react'
import "./Futer.css"

export default function Futer() {
  return (
    <div className='futer-container'>
        <div className='futer-top'>
        <div className='futer'>       
            <img className='img' src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
            <h5>Endi bozorga borishga hojat yo'yaratish</h5>
            <br />
            <span className='span'>Sizda qulay narxlar va uyga <br />
            yetkazib berish mavjud</span>
        </div>

        <div className='futer'>
            <img  className='img'src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
            <h5>Tez yetkazib berish</h5>
            <span className='span'>Bizning xizmatimiz sizni <br />ajablantiradi</span>
        </div>

        <div  className='futer'>
            <img className='img' src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
            <h5>Siz uchun qulaylik</h5>
            <span className='span'>
                Nosozlik yuzaga kelganda <br />tez rasmiylashtiring va <br /> qaytarish kafolati
            </span>
        </div>

        <div className='futer'>
            <img className='img'  src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
            <h5>Bo'lib to'lash</h5>
            <span className='span'>
                3,6,9 va 12 oy davomida <br/> oldindan to'lovsiz
            </span>
        </div>
        </div>
        <br />

<div className='left'>
<h3>Ma'lumotlar</h3>
    <br />
    <span className='span1'>
        Muddatli to'lov shartlari <br /> <br />
        Muddatli to'lov asosida sotib olishning umumiy <br />
        qoidalari <br /><br />
        Buyurtma qanday beriladi? <br /><br />
        Ommaviy oferta (Foydalanuvchi bo'limi) <br /><br />
        Tovarlarni yetkazib berish va to'lov turlari <br /><br />
        Buyurtmani bekor qilish va tovarlarni qaytarish <br /><br />
        Biz haqimizda
    </span>
</div>

<div className='center'>
    <h3>Biz bilan aloqa</h3>
    <span className='span1'>

    </span>
</div>
<div className='right'></div>
    </div>
  )
}