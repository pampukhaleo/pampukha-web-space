// supabase/functions/send-telegram/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
    })
  }

  const body = await req.json()
  const { name, email, phone, message } = body
  const token = Deno.env.get("TELEGRAM_BOT_TOKEN")
  const chatId = "227325402"

  if (!token) {
    return new Response(JSON.stringify({ error: "Missing Telegram Token" }), { status: 500 })
  }

  const text = `
🆕 *Нова заявка з сайту Leonforge*:

👤 *Ім'я:* ${name}
📧 *Email:* ${email}
📱 *Телефон:* ${phone || "Не вказано"}
📝 *Повідомлення:*
${message}
  `

  const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  })

  if (!telegramRes.ok) {
    const errorData = await telegramRes.json().catch(() => ({}))
    return new Response(JSON.stringify({ error: errorData.description || "Telegram failed" }), {
      status: 500,
    })
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 })
})
