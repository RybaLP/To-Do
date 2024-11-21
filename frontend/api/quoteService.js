import axios from "axios";

export const fetchQuote = async () => {
    try{
        const response = await axios.get('http://localhost:5000/quote');
        return response.data;     
    }
    catch(error){
        console.error("Error fetching Quoute: ", error);
    }
}

