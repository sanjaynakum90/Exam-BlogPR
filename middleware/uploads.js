import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        const isVideo = file.mimetype.startsWith("video");

        return {
            folder: "eCommerce_products",
            resource_type: "auto",
            format: isVideo ? undefined : "webp",
            allowed_formats: [
                "jpg",
                "jpeg",
                "png",
                "webp",
                "mp4",
                "mkv",
            ],
            transformation: isVideo
                ? []
                : [
                    { width: 1000, height: 1000, crop: "limit" },
                    { quality: "auto" },
                    { fetch_format: "auto" },
                ],
        };
    },
});

const uploads = multer({
    storage,
    limits: { fileSize: 50 * 1024 * 1024 },
});

export default uploads;