import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("DB Connected");
        console.log("Database Name:", mongoose.connection.name);

    } catch (error) {

        console.error("Database Connection Failed");
        console.error(error.message);

        process.exit(1);

    }

};

export default connectDB;