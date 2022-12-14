import doctor from "../models/doctorsinup.js";
import { createError } from "../utils/error.js";

export const doctorlogin = async (req, res, next) => {
    try {
        const user = await doctor.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "user not found"))

        if (req.body.password == user.password) {
            const { password, ...OtherDetails } = user._doc;
            res.status(200).json({ ...OtherDetails });
        } else {
            next(createError(400, "wrong password or username"))
        }

    }
    catch (err) {
        next(err);
    }
}

