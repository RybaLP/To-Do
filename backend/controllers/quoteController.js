import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getQuoute = async (req,res) => {
    const category = "success";
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`
    try{
        const response = await axios.get(apiUrl, {
            headers: {
                'X-Api-Key' : process.env.QUOUTE_API_KEY
            }
        })
        res.json(response.data);
    } 
    catch (error){
        console.error(error);
        res.status(500).json({error: "Failed to fetch Quoute"});
    }
}

