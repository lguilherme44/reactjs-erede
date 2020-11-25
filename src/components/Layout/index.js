import React, { useContext } from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

// logo
import Logo from '../../images/logo.svg';

// link
import { Link } from 'react-router-dom';

// components
import Content from '../Content';
import FormComponent from '../../components/Form';
import CardProducts from '../../components/Card';
import Checkout from '../../components/Checkout';

import { CartContext } from '../../context/cart';

const FixedMenuLayout = (props) => {
  const { cart, totalItems } = useContext(CartContext);

  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src={Logo}
              style={{ margin: '0.5em', height: '100%' }}
            />
          </Menu.Item>

          <Menu.Item link as='a'>
            <Link to='/'>Home</Link>
          </Menu.Item>

          <Menu.Item link as='a'>
            <Link to='/configuration'>Opções</Link>
          </Menu.Item>

          <Menu.Item link as='a'>
            <Link to='/configuration'>{cart.length}</Link>
            <Link to='/configuration'>{totalItems}</Link>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name='Sair' />
          </Menu.Menu>
        </Container>
      </Menu>

      {props.form ? <Content form={FormComponent} /> : <Content />}
      {props.card ? <Content card={CardProducts} /> : <Content />}
      {props.checkout ? <Content checkout={Checkout} /> : <Content />}
    </div>
  );
};

export default FixedMenuLayout;
