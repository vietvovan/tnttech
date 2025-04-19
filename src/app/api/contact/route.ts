import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin bắt buộc' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `[tnttech.info] Thông tin người dùng "${name}"`,
      text: `
        Tên: ${name}
        Email: ${email}
        Số điện thoại: ${phone || 'Không có'}
        Nội dung: ${message}
      `,
      html: `
        <h2>Thông tin của người dùng "${name}" được gửi từ trang web tnttech.info</h2>
        <p><strong>Tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Số điện thoại:</strong> ${phone || 'Không có'}</p>
        <p><strong>Nội dung:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Gửi tin nhắn thành công!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lỗi khi gửi email:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi gửi tin nhắn' },
      { status: 500 }
    );
  }
} 