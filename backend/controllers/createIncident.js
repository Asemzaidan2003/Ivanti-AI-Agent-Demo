import dotenv from 'dotenv'
dotenv.config()
const Ivanti_API = process.env.Ivanti_API

export const createIncident = async (req, res) => {
    try {
        const incidentData = req.body; 

        const response = await fetch(`${Ivanti_API}/Incidents`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "rest_api_key=5507776A54E940A7B9CE263781F3757B"
            },
            body: JSON.stringify(incidentData) 
        });

        const data = await response.json();

        return res.status(response.ok ? 201 : response.status).json(data);

    } catch (err) {
        console.error("Error creating incident:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}