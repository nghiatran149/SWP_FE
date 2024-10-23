import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { paymentService } from '../../services/paymentService';



export default function Booking() {
    const uid = useSelector((state) => state.USER.uid);
    const name = useSelector(((state) => state.USER.username))
    const email = useSelector(((state) => state.USER.email))
    const phoneNumber = useSelector(((state) => state.USER.phoneNumber))
    console.log("phone", phoneNumber);
    
    const address = useSelector(((state) => state.USER.address))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () => {
        let data =
        {
            orderCode: 10000,
            buyerName: name,
            buyerEmail: email,
            buyerPhone: phoneNumber,
            buyerAddress: address,
            cancelUrl: 'http://localhost:5173/paymentSuccess',
            returnUrl: 'http://localhost:5173/paymentFail',

        }
        paymentService.createPayment(data).then((res) => {
            console.log("res", res.data);

        }).catch((err) => {
            console.log("1", err);

        })

    }
    return (
        <div>
            <Button onClick={handleClick}>Nhấn vào đây để thanh toán</Button>
        </div>
    )
}



