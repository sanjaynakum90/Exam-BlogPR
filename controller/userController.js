import HttpError from "../middleware/HttpError.js";
import User from "../model/User.js";

const register = async (req, res, next) => {
    try {
        const { name, email, password, phone, role } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return next(new HttpError("Email is already registered", 409));
        }

        const newUser = new User({ name, email, phone, password, role });

        await newUser.save();

        const token = await newUser.generateAuthToken();

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser,
            token,
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findByCredentials(email, password);

        // console.log("user", user);

        if (!user) {
            return next(new HttpError("user not login", 400));
        }

        const token = await user.generateAuthToken();

        res
            .status(200)
            .json({ success: true, message: "login successful", user, token });
    } catch (error) {
        next(new HttpError(error.message));
    }
};

const authLogin = async (req, res, next) => {
    try {
        const user = req.user;

        if (!user) {
            return next(new HttpError("user not found", 404));
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        next(new HttpError(error.message));
    }
};

const logOut = async (req, res, next) => {
    try {
        req.user.tokens = req.user.tokens.filter((t) => {
            return t.token != req.token;
        });

        await req.user.save();

        res.status(200).json({ success: true, message: "user logOut successful" });
    } catch (error) {
        next(new HttpError(error.message));
    }
};

const logOutAll = async (req, res, next) => {
    try {
        req.user.tokens = [];

        await req.user.save();

        res
            .status(200)
            .json({ success: true, message: "user logOut form all device" });
    } catch (error) {
        next(new HttpError(error.message));
    }
};

const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return next(
                new HttpError({ success: true, message: "no user data found" }),
            );
        }

        res.status(200).json({
            success: true,
            message: "all user data found",
            length: users.length,
            users,
        });
    } catch (error) {
        next(new HttpError(error.message));
    }
};

const update = async (req, res, next) => {
    try {
        const targetUser = req.params.id || req.user._id;

        const user = await User.findById(targetUser);

        if (!user) {
            return next(new HttpError("user not found", 404));
        }

        const update = Object.keys(req.body);

        let allowedFields = ["name", "password", "phone"];

        if (req.user.role === "admin") {
            allowedFields = [...allowedFields, "role", "isVerified"];
        }

        const isValid = update.every((field) => allowedFields.includes(field));

        if (!isValid) {
            return next(new HttpError("only allowed field can be updated", 404));
        }

        if (
            !req.user.role === "admin" &&
            !req.user._id.toString() !== user._id.toString()
        ) {
            return next(new HttpError("unauthorized error", 401));
        }

        update.forEach((u) => (user[u] = req.body[u]));

        await user.save();

        res.status(200).json({
            success: true,
            message: "user data updated successfully",
            user,
        });
    } catch (error) {
        next(new HttpError(error.message));
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return next(new HttpError("requested user not found", 404));
        }

        await User.deleteOne(user);

        res.status(200).
            json({ success: true, message: "user deleted successfully" });
    } catch (error) {
        next(new HttpError(error.message));
    }
};

export default {
    register,
    loginUser,
    authLogin,
    logOut,
    logOutAll,
    getAllUser,
    update,
    deleteUser,
};
