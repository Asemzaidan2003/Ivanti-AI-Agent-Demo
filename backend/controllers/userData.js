import dotenv from 'dotenv'
dotenv.config()
const Ivanti_API = process.env.Ivanti_API
export const getUser = async (req, res) => {
    try {
        const response = await fetch(`${Ivanti_API}/Employees?$filter=PrimaryEmail eq 'asem.z@tjdeed.com'`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "rest_api_key=5507776A54E940A7B9CE263781F3757B"
            }
        });

        const data = await response.json();
        return res.status(200).json(data);

    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}