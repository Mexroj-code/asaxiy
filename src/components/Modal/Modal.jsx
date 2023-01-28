import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import {ImDropbox} from 'react-icons/im'
export default function Example({Icon}) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div onClick={() => setLgShow(true)}>{Icon}</div>
      <Modal 
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body' style={{width:"2000px" }}>
            <div className='left-modal'>
                <h2>Kirish yoki shaxsiy kabinet yaratish</h2>
                <div></div>
                <span className='span'>Telefon</span>
                <form action="">
                    <input type="text" placeholder='+998(_)__-_-_' />
                </form>
                <br/>
                <button className='button-modal'>
                <h5 className='h5'>
                    FAOLLASHTIRISH KODINI OLING
                </h5>
                </button>
            </div>
            <div className='right-modal'>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                   <h5>Endi bozorga borishga hojat 
                      <br/> yo'q</h5>
               </div>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                   <h5>Tez yetkazib berish</h5>
                   
               </div>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                   <h5>Siz uchun qulayliklar</h5>
               </div>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                   <h5>Bo'lib to'lash</h5>
               </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}