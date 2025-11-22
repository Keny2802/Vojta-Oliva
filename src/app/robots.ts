import {
    MetadataRoute
} from "next";

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["#footer"]
        }
    };
};

export default robots;