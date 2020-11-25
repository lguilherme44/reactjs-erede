import React, { useContext, useEffect, useState } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import noImage from '../../images/no-image.png';

import { CartContext } from '../../context/cart';

export default function CardProducts(props) {
  const { data } = props;
  const [dataProducts, setDataProducts] = useState();

  useEffect(() => {
    setDataProducts(data);
  }, []);

  const { addCart } = useContext(CartContext);
  return (
    <>
      <div>
        <>
          <Card.Group>
            {data.map((item) => (
              <Card>
                <Image src={noImage} wrapped ui={false} size='mini' />
                <Card.Content key={item.id}>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Meta>R$ {item.value}, 00</Card.Meta>
                  <Card.Description>{item.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>
                  <Button onClick={() => addCart(dataProducts)}>
                    <Icon name='user' />
                    Adicionar
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </>
      </div>
    </>
  );
}
