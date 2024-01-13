//@ts-nocheck

import quotes from "./quotes.json" with {type: "json"};
import * as fs from "fs";

let end = []
let i = 0

Object.keys(quotes).forEach((key) => {
    let list = quotes[key]
    list.forEach((quote) => {
        end.push({...quote, category: key, id: i++})
    })
})

fs.writeFile('newQuotes.json', JSON.stringify(end, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
})