import Blog from "../model/Blog.js";
import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
    try {
        const { title, content } = req.body;

        const author = req.user._id;

        if (!req.file) {
            return next(new HttpError("Blog image is required", 400));
        }
        const blogImage = req.file.path;

        const blog = new Blog({ title, content, author, blogImage });
        await blog.save();

        await blog.populate("author", "name email");

        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog,
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const getAll = async (req, res, next) => {
    try {
        const blogs = await Blog.find({ isPublished: true })
            .populate("author", "name email")
            .sort({ createdAt: -1 });


        res.status(200).json({
            success: true,
            message: "All blogs fetched successfully",
            length: blogs.length,
            blogs,
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const getOne = async (req, res, next) => {
    try {

        const Id = req.param.id;

        console.log("one",Id);
        

        const blog = await Blog.findById(Id).populate(
            "author",
            "name email",
        );

        if (!blog) {
            return next(new HttpError("Blog not found", 404));
        }

        res.status(200).json({ success: true, blog });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const getMyBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find({ author: req.user._id })
            .populate("author", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Your blogs fetched successfully",
            length: blogs.length,
            blogs,
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const update = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return next(new HttpError("Blog not found", 404));
        }

        const isAuthor = blog.author.toString() === req.user._id.toString();
        const isAdmin = req.user.role === "admin";

        if (!isAuthor && !isAdmin) {
            return next(
                new HttpError("You are not authorized to update this blog", 403),
            );
        }

        const allowedFields = ["title", "content", "isPublished"];
        const updates = Object.keys(req.body);

        const isValid = updates.every((field) => allowedFields.includes(field));
        if (!isValid) {
            return next(new HttpError("Invalid fields in update request", 400));
        }

        updates.forEach((field) => (blog[field] = req.body[field]));

        if (req.file) {
            blog.blogImage = req.file.path;
        }

        await blog.save();
        await blog.populate("author", "name email");

        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog,
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const deleteBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return next(new HttpError("Blog not found", 404));
        }

        const isAuthor = blog.author.toString() === req.user._id.toString();
        const isAdmin = req.user.role === "admin";

        if (!isAuthor && !isAdmin) {
            return next(
                new HttpError("You are not authorized to delete this blog", 403),
            );
        }

        await Blog.deleteOne({ _id: blog._id });

        res
            .status(200)
            .json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};


export default { add, getAll, getOne ,getMyBlogs,update ,deleteBlog };
