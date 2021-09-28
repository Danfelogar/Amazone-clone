// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")('sk_test_51JeD9mKfCS3MzAQ5WopFwZh9PnF9AsFPj94iJTSkjkdQRB9QA3FQ9XmDNasq4mDIYyoZOLHAPdM2PZPavfXMMKFw00UqRkxONL')

// // API

// // - App config
// const app = express();
// // - Middlewares
// app.use(cors({origin: true}));
// app.use(express.json());

// // - API routes
// app.get('/', (request, response) => response.status(200).send('hello world1'))

// // app.get('/qazi', (request, response) => response.status(200).send('WHATS UP QAZI'))

// app.post('/payments/create', async (request, response) => {
//     const total = request.query.total;

//     console.log('Payment Request Recieved BOOM!!! for this amount >>>', total)

//     const paymentIntent = await stripe.paymentIntent.create({
//         amount: total, // subunits of the currency
//         currency: "usd",
//     });

//     //Ok- Created
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });
// // - Listen command
//     exports.api = functions.https.onRequest(app)

// // Example point
// //http://localhost:5001/clone-496d8/us-central1/api