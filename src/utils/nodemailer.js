// nodemailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail", // or configure host/port manually
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

export const sendContactMail = async ({
  name,
  email,
  message,
  phone,
  secondaryPhone,
}) => {
  const mailOptions = {
    from: `Team Vintage Realty "${name}" <${email}>`,
    to: process.env.NODEMAILER_RECEIVER_EMAIL,
    subject: "Team Vintage Realty Contact Form Submission",
    cc: ["sujaymastern@gmail.com", "visupriya.udt@gmail.com"],
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${
        secondaryPhone
          ? `<p><strong>Secondary Phone:</strong> ${secondaryPhone}</p>`
          : ``
      }
    `,
  };

  return transporter.sendMail(mailOptions); // returns a promise
};
const Clients = {
  SATTVA_VASANTA_SKYE: {
    name: "Sattva Vasant Skye",
    user: process.env.SATTVA_VASANTA_NODE_MAILER_EMAIL,
    pass: process.env.SATTVA_VASANTA_NODE_MAILER_PASSWORD,
    ccMail: process.env.SATTVA_VASANTA_CC_EMAILS
      ? JSON.parse(process.env.SATTVA_VASANTA_CC_EMAILS)
      : [],
    receiverEmail: process.env.SATTVA_VASANTA_RECEIVER_EMAIL,
    displayEmail: "projects@sattva-vasantaskye.com",
  },
  SATTVA_LAVITA: {
    name: "Sattva Lavita",
    user: process.env.SATTVA_VASANTA_NODE_MAILER_EMAIL,
    pass: process.env.SATTVA_VASANTA_NODE_MAILER_PASSWORD,
    ccMail: process.env.SATTVA_VASANTA_CC_EMAILS
      ? JSON.parse(process.env.SATTVA_VASANTA_CC_EMAILS)
      : [],
    receiverEmail: process.env.SATTVA_VASANTA_RECEIVER_EMAIL,
    displayEmail: "projects@sattva-lavita.com",
  },
  SATTVA_PARK_CUBIX: {
    name: "Sattva Park Cubix",
    user: process.env.SATTVA_VASANTA_NODE_MAILER_EMAIL,
    pass: process.env.SATTVA_VASANTA_NODE_MAILER_PASSWORD,
    ccMail: process.env.SATTVA_VASANTA_CC_EMAILS
      ? JSON.parse(process.env.SATTVA_VASANTA_CC_EMAILS)
      : [],
    receiverEmail: process.env.SATTVA_VASANTA_RECEIVER_EMAIL,
    displayEmail: "projects@sattva-park-cubix.com",
  },
  VAJRAM_VIVERA: {
    name: "Vajram Vivera Groups",
    user: process.env.SATTVA_VASANTA_NODE_MAILER_EMAIL,
    pass: process.env.SATTVA_VASANTA_NODE_MAILER_PASSWORD,
    ccMail: process.env.SATTVA_VASANTA_CC_EMAILS
      ? JSON.parse(process.env.SATTVA_VASANTA_CC_EMAILS)
      : [],
    receiverEmail: process.env.SATTVA_VASANTA_RECEIVER_EMAIL,
    displayEmail: "projects@vajramviveragroups.com",
  },
  TEAM_VINTAGE_REALTY: {
    name: "Team Vintage Realty",
    user: process.env.SATTVA_VASANTA_NODE_MAILER_EMAIL,
    pass: process.env.SATTVA_VASANTA_NODE_MAILER_PASSWORD,
    ccMail: process.env.SATTVA_VASANTA_CC_EMAILS
      ? JSON.parse(process.env.SATTVA_VASANTA_CC_EMAILS)
      : [],
    receiverEmail: process.env.SATTVA_VASANTA_RECEIVER_EMAIL,
    displayEmail: "projects@team-vintage-realty.com",
  },
};
export const sendClientContactMail = async ({
  name,
  email,
  message,
  phone,
  project,
  secondaryPhone,
}) => {
  let currentClient = Clients[project];
  if (!currentClient) {
    currentClient = Clients["TEAM_VINTAGE_REALTY"];
  }
  const transporter = nodemailer.createTransport({
    service: "gmail", // or configure host/port manually
    auth: {
      user: currentClient.user,
      pass: currentClient.pass,
    },
  });
  const mailOptions = {
    from: `${currentClient.name} "${name}" <${currentClient.displayEmail}>`,
    to: currentClient.receiverEmail,
    subject: `${currentClient.name} Contact Form Submission`,
    cc: currentClient.ccMail,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${
        secondaryPhone
          ? `<p><strong>Secondary Phone:</strong> ${secondaryPhone}</p>`
          : ``
      }
    `,
  };

  return transporter.sendMail(mailOptions); // returns a promise
};
