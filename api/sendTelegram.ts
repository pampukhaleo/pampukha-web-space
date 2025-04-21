
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, email, phone, message } = req.body
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = '227325402'

  const text = `
🆕 *Нова заявка з сайту Leonforge*:

👤 *Ім'я:* ${name}
📧 *Email:* ${email}
📱 *Телефон:* ${phone}
📝 *Повідомлення:*
${message}
  `

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    })

    if (!telegramRes.ok) throw new Error("Telegram API failed")

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Telegram send error:', err)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
