import * as  properties from "../env";


const cloudinary = require("cloudinary").v2;



const generateSignature = async (_req, res) => {

    var timestamp = Math.round(new Date().getTime() / 1000);
    console.log("Timestamp: ",timestamp);

    const signature = cloudinary.utils.api_sign_request(
        {
            timestamp: timestamp,
            // eager:"w_400,c_pad|w_260,h_200,c_crop",
            // public_id:"sample_image",
        },
        properties.CLOUDINARY_SECRET

    )

    res.statusCode = 200;
    res.json({ signature, timestamp});
};

export default generateSignature;