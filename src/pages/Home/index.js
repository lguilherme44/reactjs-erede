import React from 'react';

// components
import Layout from '../../components/Layout';

export default function Home() {
  return (
    <>
      <Layout form={false} card={true} checkout={false} />
    </>
  );
}
