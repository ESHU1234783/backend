
import usermodel from "../models/usermodel.js"
//controller function is exported to route.js
export const createresume = async (req, res) => {
    try {
        const create = await usermodel.create(req.body);
        res.status(201).json({
            message: "Data passed",
            data: create
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }

}
//experience api function, this will block if user enters without any fields before moving to next page

export const experience = async (req, res) => {
    try {
        const exp = await usermodel.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    experience: {
                        company: req.body.company,
                        role: req.body.role,
                        start: req.body.start,
                        end: req.body.end,
                        accomplishment: req.body.accomplishment
                    }
                },
                experienceCompleted: true
            },
            {
                new: true
            }
        );

        res.status(200).json({
            message: "successful",
            data: exp
        });

        console.log(exp);
        console.log(req.params.id);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Went wrong",
            error: err.message
        });
    }
};