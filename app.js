const express = require("express");
const axios = require("axios").default;
const client = require("@mailchimp/mailchimp_marketing");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("static"));
app.use(express.static("public"))

const API_KEY = "6e06c865b3b051975d623a5d75563d25-us5";
const AUDIENCE_ID = "7b0e8ad053";
const API_URL = `https://us5.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", async (req, res) => {
    const data = {
        email_address: req.body.email,
        email_type: "html",
        status: "subscribed",
        merge_fields: {
            FNAME: req.body.fName,
            LNAME: req.body.lName,
        },
    };

    try {
        const response = await axios.post(API_URL, data, {
            auth: {
                username: "Divyansh",
                password: API_KEY,
            },
        });

        if (response.status === 200) {
            res.sendFile(`${__dirname}/success.html`);
        }
    } catch (error) {
        console.log(error);
        res.sendFile(`${__dirname}/faliure.html`);
    }
});

app.listen(3000, () => {
    console.log("Live @3k");
});
//API KEY
// 6e06c865b3b051975d623a5d75563d25-us5

//List Id
//7b0e8ad053