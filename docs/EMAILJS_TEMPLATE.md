# EmailJS Template Setup

Create an EmailJS email service, then create a template with these settings.

## Template settings

- **To email:** `your_gmail_address`
- **From name:** `{{from_name}}`
- **Reply to:** `{{reply_to}}`
- **Subject:** `{{subject}}`

## Email body

Copy this into the EmailJS template body:

```text
New portfolio enquiry

Name: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}
```

## Connect it to the app

Copy `.env.example` to `.env` and replace the placeholders with the values from the EmailJS dashboard:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

Restart Vite after changing `.env`. The browser only uses the EmailJS public key; do not add a private API key to this file or any client-side code.