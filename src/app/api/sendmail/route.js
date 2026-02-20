/** @format */

import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
	try {
		const { name, email, phone, subject, message } = await req.json();

		console.log("📩 Incoming mail:", {
			name,
			email,
			phone,
			subject,
			message,
		});

		// ตรวจ env ก่อน
		if (!process.env.BREVO_USER || !process.env.BREVO_PASS) {
			console.error("❌ Missing Brevo env variables");
			return Response.json({ success: false, error: "Missing SMTP credentials" }, { status: 500 });
		}

		const transporter = nodemailer.createTransport({
			host: "smtp-relay.brevo.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.BREVO_USER,
				pass: process.env.BREVO_PASS,
			},
		});

		// ทดสอบ connection ก่อนส่ง
		await transporter.verify();
		console.log("✅ SMTP Connected");

		await transporter.sendMail({
			from: `"Website Contact" <amnad2205@gmail.com>`,
			to: "amnad2205@gmail.com", // เปลี่ยนเป็นเมลที่ต้องการรับ
			replyTo: email,
			subject: `New Contact Message - ${subject || "General Inquiry"}`,
			html: `
        <h2>📩 มีข้อความใหม่จากเว็บไซต์</h2>

        <p><b>ชื่อ:</b> ${name}</p>
        <p><b>อีเมล:</b> ${email}</p>
        <p><b>เบอร์โทร:</b> ${phone || "-"}</p>
        <p><b>หัวข้อ:</b> ${subject || "-"}</p>

        <hr/>

        <p><b>ข้อความ:</b></p>
        <p>${message}</p>

        <br/>
        <small>Sent from Website Contact Form</small>
      `,
		});

		console.log("✅ Email sent successfully");

		return Response.json({ success: true });
	} catch (err) {
		console.error("❌ SENDMAIL ERROR:", err);

		return Response.json(
			{
				success: false,
				error: err.message || "Send mail failed",
			},
			{ status: 500 },
		);
	}
}
