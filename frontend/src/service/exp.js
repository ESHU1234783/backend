const URL = "http://localhost:4000/api";

const experience = async (resumeid,formData) => {
    try {
        const response = await fetch(`${URL}/experience/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        return await response.json();
        navigate("/resume-builder/education");

    } catch (err) {
        console.log(err);
    }
};

export default experience