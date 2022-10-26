const mongoose = require('mongoose');


 async function connect()
{
    try{
        await mongoose.connect('mongodb://localhost/hung_vu_db');
        console.log('Connect successfully!!!');
    }
    catch(error)
    {
        console.log('Connect unsuccessfully!!!');

    }
}

module.exports={connect};

