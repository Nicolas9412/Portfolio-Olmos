import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const { name, email, subject, message } = data;
    if (!name.value || !email.value || !subject.value || !message.value) {
      return res.status(400).json({ message: "Bad request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject,
        html: `<p>${message.value}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
