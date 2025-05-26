const apiUrl = "http://devapp.bonusmoney.pro/mobileapp/getAllCompanies";
const token = "123";

const fetchData = async (offset, limit) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "TOKEN": token
            },
            body: JSON.stringify({
                offset: offset,
                limit: limit
            })
        });

        if (!response.ok) {
            let errorData = {};
            try {
                errorData = await response.json();
            } catch (jsonError) {
                console.error("Error parsing JSON from response:", jsonError);
            }
            
            const error = new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
            error.response = response;
            error.errorData = errorData; 
            throw error;
        }

        const data = await response.json();
        // console.log("Data:", data);
        return data;
    } catch (error) {
        throw error
        // console.error("Error fetching data:", error);
    }
}

export default fetchData;