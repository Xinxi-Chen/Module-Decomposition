import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const quotes = [
    { author: "Imran", quote: "Ubuntu is life." },
    { author: "Eliza", quote: "Arch Linux is for the brave." }
];

app.get('/', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

app.post('/', (req, res) => {
    const newQuote = req.body;
    quotes.push(newQuote);
    res.status(201).json(newQuote);
});

app.listen(3000, () => console.log('Backend running at http://127.0.0.1:3000'));