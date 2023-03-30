import sendEmail from "../../app/lib/email";

const CONFIG = require("config");
const TO_EMAIL = CONFIG.get("to_email");

export default function handler(request, response) {
    const body = request.body;

    sendEmail({
        from: `${body.from}`,
        to: `${TO_EMAIL}`,
        subject: `${body.subject}`,
        html: `${body.html}`,
    });
    
    return response.status(200).json({ body });
}