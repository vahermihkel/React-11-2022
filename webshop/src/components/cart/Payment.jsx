

// rafce
const Payment = (props) => {
  const pay = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const paymentData = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": props.sum,
      "order_reference": Math.random() * 9999999,
      "nonce": "a9b7f7e79fsdfsd" + Math.random() * 9999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://react-11-2022.web.app"
      };

    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    };

    fetch(paymentUrl, {
      "method": "POST",
      "body": JSON.stringify(paymentData),
      "headers": paymentHeaders
    }).then(res => res.json())
        .then(json => window.location.href = json.payment_link);
  }

  return (
    <button onClick={pay}>Maksma</button>
  )
}

export default Payment