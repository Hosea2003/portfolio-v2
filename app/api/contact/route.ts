import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email template with green theme
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0f;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #0b0b0d; border: 2px solid rgba(204, 251, 6, 0.2); border-radius: 16px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 20px; background: linear-gradient(to bottom right, rgba(204, 251, 6, 0.1), rgba(204, 251, 6, 0.05));">
                      <h1 style="margin: 0; color: #CCFB06; font-size: 28px; font-weight: bold;">
                        New Contact Message
                      </h1>
                      <div style="margin-top: 10px; height: 2px; width: 60px; background-color: #CCFB06;"></div>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px 40px;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                              From
                            </p>
                            <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">
                              ${name}
                            </p>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                              Email
                            </p>
                            <p style="margin: 0;">
                              <a href="mailto:${email}" style="color: #CCFB06; text-decoration: none; font-size: 16px;">
                                ${email}
                              </a>
                            </p>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                              Subject
                            </p>
                            <p style="margin: 0; color: #e2e8f0; font-size: 16px;">
                              ${subject}
                            </p>
                          </td>
                        </tr>
                        
                        <tr>
                          <td style="padding-top: 20px; border-top: 1px solid rgba(204, 251, 6, 0.1);">
                            <p style="margin: 0 0 12px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
                              Message
                            </p>
                            <div style="background-color: #1b1b1c; border-radius: 8px; padding: 20px; border-left: 3px solid #CCFB06;">
                              <p style="margin: 0; color: #cbd5e1; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${message}
                              </p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: rgba(204, 251, 6, 0.05); border-top: 1px solid rgba(204, 251, 6, 0.1);">
                      <p style="margin: 0; color: #64748b; font-size: 13px; text-align: center;">
                        This message was sent from your portfolio contact form
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: htmlTemplate,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
