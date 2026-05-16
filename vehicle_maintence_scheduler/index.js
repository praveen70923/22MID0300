const axios = require("axios");
const knapsack = require("./scheduler");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmF2ZWVua3VtYXIuZzIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkzMjI2NSwiaWF0IjoxNzc4OTMxMzY1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTYyZGEwM2UtODEzZS00N2JkLWI0ZjItNGIyZmZhYjY0ZjE5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJhdmVlbiBrdW1hciBnIiwic3ViIjoiMmYxOWUyZGQtOTRjMS00MTFkLTk4MDQtOTBkMjY5MWYyMDk0In0sImVtYWlsIjoicHJhdmVlbmt1bWFyLmcyMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoicHJhdmVlbiBrdW1hciBnIiwicm9sbE5vIjoiMjJtaWQwMzAwIiwiYWNjZXNzQ29kZSI6IlNmRnVXZyIsImNsaWVudElEIjoiMmYxOWUyZGQtOTRjMS00MTFkLTk4MDQtOTBkMjY5MWYyMDk0IiwiY2xpZW50U2VjcmV0IjoiTkZjZGtkWHFXS3BYdXRZYiJ9.Xxmq_TQ8Fft41rwKGD47hO3blWv-dpyah0BLppH6rFE";

async function runScheduler() {

    try {

        const depotsResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/depots",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const vehiclesResponse = await axios.get(
            "http://4.224.186.213/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const depots = depotsResponse.data.depots;
        const vehicles = vehiclesResponse.data.vehicles;

        for (const depot of depots) {

            const result = knapsack(
                vehicles,
                depot.MechanicHours
            );

            console.log({
                depotId: depot.ID,
                maxImpact: result
            });
        }

    } catch (error) {
        console.log(error.message);
    }
}

runScheduler();