import express from 'express';

const app = express();

const data = [
    "String 1",
    "String 2",
    "String 3",
    "String 4"
];

app.get('/search', (req, res) => {
    try {
        if (!req.query.keyword) {
            return res.status(404).send([]);
        }
        const filteredList = data.filter((item) =>
            item.toLowerCase().includes(req.query.keyword)
        );
        if(filteredList){
            return res.status(200).send(filteredList);
        }else{
            return res.status(404).send([]);
        }
    } catch (error) {

    }
})

app.listen(3000, () => {
    console.log('App is running')
});

// 1. If keywords are not present should throw 404 
// 2. If keywords are presents and if keyword not present in our list should throw 404
// 3. If keywords are presents and exists in our data should send the filtered list 


// 1. get inform of megha

// GET : http://localhost:3000/api/user/:id


// 1. get inform based on condition 

// POST : http://localhost:3000/api/city/:cityId
// REQUEST Body : {
//     "income_range_start":1200000,
//     "income_range_end":1900000
// }