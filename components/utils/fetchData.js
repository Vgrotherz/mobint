const apiUrl = "http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesLong";
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
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        // console.log("Data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default fetchData;