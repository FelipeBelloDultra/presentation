import React from 'react';
import { Route as ReactDOMRoute } from 'react-router-dom';

import Layout from '../layout';

const Route = ({ component: Component, ...rest }) => {
  return (
    <>
      <ReactDOMRoute
        {...rest}
        render={(matchProps) => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    </>
  );
};

export default Route;
