import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import api from '../../services/api';

export default function Content(props) {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      const { data } = await api.get('products');

      if (data) {
        setDataProduct(data.data);
      }
    }

    loadProduct();
  }, []);

  const Formulario = props.form;
  const Card = props.card;
  const Checkout = props.checkout;
  return (
    <Container text style={{ marginTop: '7em' }}>
      {Formulario ? <Formulario /> : ''}
      {Card ? <Card data={dataProduct} /> : ''}
      {Checkout ? <Checkout /> : ''}
    </Container>
  );
}
