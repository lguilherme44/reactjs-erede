import React, { useState, useEffect } from 'react';

// components bootstrap
import { Button } from 'reactstrap';

// api
import api from '../../services/api';

// lib para notificações
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardName, setCardName] = useState('');
  const [valTotal, setValTotal] = useState(0);
  const [orderID, setOrderID] = useState(0);
  const [transactions, setTransactions] = useState([]);

  async function createTrasnsaction(e) {
    e.preventDefault();

    const dados = {
      cardNumber: cardNumber,
      cardCVV: cardCVV,
      cardMonth: cardMonth,
      cardYear: cardYear,
      cardName: cardName,
      valTotal: parseFloat(valTotal),
      orderID: parseInt(orderID),
    };

    const { data } = await api.post('createTransaction', dados);

    data.success === true
      ? toast.success(data.data.returnMessage, { autoClose: 4000 }) &&
        window.location.reload()
      : toast.error(data.data.returnMessage, { autoClose: 4000 });
  }

  async function cancelTrasnsaction() {
    const data = api.get('createTransaction', {});
  }

  async function showTrasnsaction() {
    const data = api.get('createTransaction', {});
  }

  useEffect(() => {
    async function loadTransactions() {
      const { data } = await api.get('allTransactions');

      if (data.success === true) {
        setTransactions(data.data);
      }
    }

    loadTransactions();
  }, []);
  return (
    <>
      <form onSubmit={createTrasnsaction}>
        <div class='form-row'>
          <div className='col-7'>
            <label htmlFor='cardName'>Nome Impresso no Cartão</label>
            <input
              id='cardName'
              type='text'
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className='form-control'
              required
            />
          </div>

          <div className='col-3'>
            <label htmlFor='cardNumber'>Número do Cartão</label>
            <input
              id='cardNumber'
              type='text'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className='form-control'
              required
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='col-3'>
            <label htmlFor='cardCVV'>CVV</label>
            <input
              id='cardCVV'
              type='text'
              value={cardCVV}
              onChange={(e) => setCardCVV(e.target.value)}
              className='form-control'
              required
            />
          </div>

          <div className='col-3'>
            <label htmlFor='cardMonth'>Mês</label>
            <input
              id='cardMonth'
              type='text'
              value={cardMonth}
              onChange={(e) => setCardMonth(e.target.value)}
              className='form-control'
              required
            />
          </div>

          <div className='col-3'>
            <label htmlFor='cardYear'>Ano</label>
            <input
              id='cardYear'
              type='text'
              value={cardYear}
              onChange={(e) => setCardYear(e.target.value)}
              className='form-control'
              required
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='col-2'>
            <label htmlFor='valTotal'>Total Pedido</label>
            <input
              id='valTotal'
              type='number'
              value={valTotal}
              onChange={(e) => setValTotal(e.target.value)}
              className='form-control'
              required
            />
          </div>

          <div className='col-2'>
            <label htmlFor='orderID'>Número do Pedido</label>
            <input
              id='orderID'
              type='number'
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
              className='form-control'
              required
            />
          </div>
        </div>

        <Button className='btn btn-secondary mt-3' type='submit'>
          Enviar
        </Button>
      </form>

      <table className='table'>
        <thead>
          <tr>
            <th>TID</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr>
              <td>{transaction.tid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
