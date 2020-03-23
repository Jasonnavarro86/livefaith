import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_o9rLBmx59DDSPqlPfo2WmmNC00jMVD0dyG';

    const onToken = token => {
        console.log( token );
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Live Faith"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            stripeKey={ publishableKey }
            token={onToken}
        />
    )
};

export default StripeCheckoutButton;