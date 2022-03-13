import React from 'react'

const MyContext = React.createContext({
    items: [{ id: "movie1", 
            image: 'https://w.namu.la/s/7a291e435bea8c73f7334aa2780f3943af9693ac2c7d6b9d3949262adfca46f517cf34a4e2cf04b6a8d1009f443b328f1cf179bda337dd600a1b8100afea26835709c403a4a3912d4b2f046bee81eeedeedb31cae2965552afa3b5c4c65214cd3073dac1f34d9656b09b57070781f39e',
            name: "Avengers: Endgame", 
            age: "12세", date: "2022-03-11", 
            runningtime: "181m", 
            seat: "F13"}],
});

export default MyContext
