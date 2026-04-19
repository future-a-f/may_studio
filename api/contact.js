// api/contact.js
const nodemailer = require('nodemailer');
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  await transporter.sendMail({ from: email, to: 'hello@elaravoss.com', subject: `New inquiry from ${name}`, text: message });
  res.json({ ok: true });
});