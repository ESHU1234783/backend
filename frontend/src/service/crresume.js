const URL = "http://localhost:4000/api";

const createProfile = async (formData) => {
    try {
        const response = await fetch(`${URL}/createresume`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        return await response.json();
        

    } catch (err) {
        console.log(err);
    }
};

export default createProfile