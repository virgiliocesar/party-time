const mongoose = require("mongoose");

async function main(options) {
    try {
        
        await mongoose.connect(
          "mongodb+srv://virgilio:8y7Sjy2cIArA1S0j@cluster0.pbho3gt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("DB connection bem sucedida");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main