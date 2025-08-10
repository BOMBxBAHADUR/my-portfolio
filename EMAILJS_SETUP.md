# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. **Copy your Service ID** (format: `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your template with these variables:
   ```
   To: {{to_name}}
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   Message: {{message}}
   Reply-To: {{reply_to}}
   ```
4. **Copy your Template ID** (format: `template_xxxxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. **Copy your Public Key** (format: `user_xxxxxxx`)

## Step 5: Update Configuration ✅ COMPLETED
Your EmailJS configuration has been updated with your actual credentials:
- **Public Key**: D9UAEzgII2nawhGT8
- **Service ID**: service_zcb0hyje  
- **Template ID**: template_4gizjgb

The configuration file `src/config/emailjs.js` is now ready to use!

## Step 6: Test Your Setup
1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email to confirm it's working

## Troubleshooting
- **Email not sending**: Check your browser console for errors
- **Service not found**: Verify your Service ID is correct
- **Template not found**: Verify your Template ID is correct
- **Authentication failed**: Re-authenticate your email service

## Security Notes
- Your Public Key is safe to expose in client-side code
- Service ID and Template ID are also safe for client-side use
- EmailJS handles the email sending server-side

## Free Tier Limits
- 200 emails per month
- 2 email services
- 5 email templates
- Perfect for portfolio websites! 