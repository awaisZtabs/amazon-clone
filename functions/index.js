const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JwRyJA6HGnPCEGPENzsLYGTVPc1AjbmCV1AHNcDS0EPU6g0eUvcNCLkNyg0oZXKtb7APFmQ0TsUxuAyyPJkeZ0Y00Z57AZwJZ');

/* app config */

const app = express();

// middleware
app.use(cors({origin: true}))
app.use(express.json());


// api routes
app.get("/asd", (request, response)=>response.status(200).send("hello-world"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment request recieved", total);
     const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
  
     response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
// http://localhost:5001/clone-dd9c1/us-central1/api