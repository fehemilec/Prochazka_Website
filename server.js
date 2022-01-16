require("dotenv").config({path: "./config.env"});

const express = require("express");
const cors = require("cors")

const productRoutes = require("./backend/routes/productRoutes");
const connectDB = require("./backend/config/db");
const stripe = require("stripe")(process.env.S_KEY);

const nodemailer = require('nodemailer')
const path = require('path')


connectDB();

const app = express();

app.use(express.json());
app.use(cors());




//SENDING EMAIL
app.post('/api/forma', (req,res) => {


  const {ema, cartItems} = req.body;
  console.log(ema.email)

  //console.log("PRICE PAID MAIL", cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2));

  let smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      port:465,
      auth:{
          user:'fehemifemo@gmail.com',
          pass: process.env.EK
      },
      tls: {
          rejectUnauthorized: false
      }
  });

  let mailOptions = {
      from:"fehemifemo@gmail.com",
      to:ema.email,
      subject:"New order",
      html:
      `<h1>Thanks for shopping with us</h1>
      <p>Hi ${ema.name},</p>
      <p>We have finished processing your order.</p>
      
      <table>
      <thead>
      <tr>
      <td><strong>Product</strong></td>
      <td><strong>Quantity</strong></td>
      <td><strong align="right">Price</strong></td>
      </thead>
      <tbody>
      ${cartItems
        .map(
          (item) => `
        <tr>
        <td>${item.name}</td>
        <td align="center">${item.qty}</td>
        <td align="right"> $${item.price.toFixed(2)}</td>
        </tr>
      `
        )
        .join('\n')}
      </tbody>
      <tfoot>
      <tr>
      <td colspan="2">Items Price:</td>
      <td align="right"> €${cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2)}</td>
      </tr>
      <tr>
      <td colspan="2">Tax Price:</td>
      <td align="right"> €</td>
      </tr>
      <tr>
      <td colspan="2">Shipping Price:</td>
      <td align="right"> €</td>
      </tr>
      <tr>
      <td colspan="2"><strong>Total Price:</strong></td>
      <td align="right"><strong> €</strong></td>
      </tr>
      
      </table>

      `
  };

  smtpTransport.sendMail(mailOptions,(error, response)=> {

      if(error){
          return console.log(error)
      }
      else{

          console.log("Mail sent")
      }


  })

  smtpTransport.close();
})


app.use("/api/products", productRoutes);

//Pay

app.post("/payment_card", (req,res) => {

  const {cartItems, token, cart} = req.body;
  //console.log("PRODUCT ", product);
  console.log("PRICE", cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2));

  //const idempotencyKey = uuid()

 
  return stripe.customers.create({

      email: token.email,
      source: token.id
  }).then(customer => {

      stripe.charges.create({

          amount: cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2) * 100,
          currency: 'eur',
          customer: customer.id,
          receipt_email: token.email,
          shipping:{
              name: cart.shippingAddress.fullName_ship,
              address:{
                  country: cart.shippingAddress.country_ship,
                  city: cart.shippingAddress.city_ship,
                  postal_code: cart.shippingAddress.postalCode_ship
              }
          }
      })
  })
  .then(result => res.status(200).json(result))
  .catch(err => console.log(err))
})

//SERVE IF IN PRODUCTION

if(process.env.NODE_ENV === 'production'){

  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>{

    res.sendFile(path.resolve(__dirname, 'frontend','build', 'index.html'));


  })
}else{
  app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));