import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Container } from 'react-bootstrap'; import "../css-components/style3.css";

export default function Paypal(props) {
  return (
    <Container fluid>
      <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: props.total,
                  },
                },
              ],
            });
          }}
        />;
      </PayPalScriptProvider>

    </Container>
  );
}
Paypal.defaultProps ={
  total: '0'
  }