const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { fname, sname, email, phone, grade, description } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "aleksandarsergiev6@gmail.com",
            pass: "prkjjtlizsouyxxh",
        },
    });

    const mailOptions = {
        from: email,
        to: "aleksandarsergiev6@gmail.com",
        subject: "Ново записване за час",
        text: `
            Име: ${fname} ${sname}
            Имейл: ${email}
            Телефон: ${phone}
            Клас: ${grade}
            Описание: ${description}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).send("Изпратено успешно!");
    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).send("Грешка при изпращане.");
    }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
