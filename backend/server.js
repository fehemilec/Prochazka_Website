require("dotenv").config();
const express = require("express");
const cors = require("cors")

const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const stripe = require("stripe")(process.env.S_KEY);

const nodemailer = require('nodemailer')

connectDB();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});


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
          pass:'FhBa169B'
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
      `<h3>Info</h3>
      <ul>
      <li>Name: ${ema.name}</li>

      <h3>Amount Paid: ${cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2)}</h3>
      <p></p>

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));