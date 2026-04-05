// ═══════════════════════════════════════════════════════════════════
//  NOPLIN DIGITAL — Google Sheets Contact Form Handler
//  Paste this in: script.google.com → New Project
//  Deploy as: Web App → Execute as Me → Anyone can access
// ═══════════════════════════════════════════════════════════════════

// ⚙️ CONFIGURATION — Update these before deploying
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE"; // From the Sheet URL
const SHEET_NAME = "Inquiries";
const ADMIN_EMAIL = "hello@noplindigital.com";
const SITE_NAME = "Noplin Digital";
const SITE_URL = "https://noplindigital.com";

// ─── Brand Colors (Noplin Digital) ───────────────────────────────
const amber = "#06B6D4";
const NAVY = "#0D0D2B";
const amber_BG = "#ECFEFF";
const amber_MID = "#0E7490";

// ═══════════════════════════════════════════════════════════════════
//  MAIN HANDLER — receives POST from /api/contact
// ═══════════════════════════════════════════════════════════════════
function doPost(e) {
  try {
    let data;

    // Support both JSON body and FormData
    if (e.postData && e.postData.type === "application/json") {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error("No data received");
    }

    const fullName = data.fullName || data.name || "—";
    const email = data.email || "—";
    const company = data.company || "—";
    const phone = data.phone || "—";
    const service = data.service || "—";
    const message = data.message || "—";

    // ── 1. Write to Google Sheet ──────────────────────────────────
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) throw new Error(`Sheet "${SHEET_NAME}" not found`);

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Timestamp",
        "Full Name",
        "Email",
        "Company",
        "Phone",
        "Service Requested",
        "Brief / Message",
        "Status",
      ];
      sheet.appendRow(headers);

      // Style header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground(NAVY);
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(11);
      sheet.setFrozenRows(1);

      // Set column widths
      sheet.setColumnWidth(1, 160);
      sheet.setColumnWidth(2, 160);
      sheet.setColumnWidth(3, 220);
      sheet.setColumnWidth(4, 160);
      sheet.setColumnWidth(5, 140);
      sheet.setColumnWidth(6, 220);
      sheet.setColumnWidth(7, 360);
      sheet.setColumnWidth(8, 110);
    }

    const timestamp = new Date();
    const rowData = [
      timestamp,
      fullName,
      email,
      company,
      phone,
      service,
      message,
      "New",
    ];
    sheet.appendRow(rowData);

    // Style the new data row with amber highlight on Status cell
    const newRow = sheet.getLastRow();
    const statusCell = sheet.getRange(newRow, 8);
    statusCell.setBackground(amber_BG);
    statusCell.setFontColor(amber_MID);
    statusCell.setFontWeight("bold");

    // Zebra stripe for readability
    if (newRow % 2 === 0) {
      sheet.getRange(newRow, 1, 1, 7).setBackground("#F0FDFE");
    }

    // ── 2. Send emails ────────────────────────────────────────────
    sendConfirmationEmail(fullName, email, company, service, message);
    sendAdminNotification(fullName, email, company, phone, service, message);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Inquiry received!" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    Logger.log("doPost error: " + err.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.toString() }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ═══════════════════════════════════════════════════════════════════
//  EMAIL 1 — Confirmation to the client
// ═══════════════════════════════════════════════════════════════════
function sendConfirmationEmail(fullName, email, company, service, message) {
  const subject = `We've received your inquiry — ${SITE_NAME}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Inquiry Received</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f4f4f5;
    color: #18181b;
    line-height: 1.7;
  }
  .wrapper {
    max-width: 600px;
    margin: 32px auto;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-top: 4px solid ${amber};
  }
  .header {
    background-color: ${NAVY};
    padding: 36px 40px;
    text-align: center;
  }
  .logo-text {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.5px;
  }
  .logo-dot {
    color: ${amber};
  }
  .tagline {
    font-size: 12px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 6px;
  }
  .body {
    padding: 40px;
  }
  .greeting {
    font-size: 20px;
    font-weight: 700;
    color: #09090b;
    margin-bottom: 16px;
  }
  .text {
    font-size: 15px;
    color: #52525b;
    margin-bottom: 14px;
    line-height: 1.8;
  }
  .summary-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 4px solid ${amber};
    padding: 20px 24px;
    margin: 28px 0;
    border-radius: 0 4px 4px 0;
  }
  .summary-box h3 {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${amber_MID};
    margin-bottom: 14px;
  }
  .summary-row {
    display: flex;
    padding: 7px 0;
    border-bottom: 1px solid #e4e4e7;
    font-size: 14px;
  }
  .summary-row:last-child { border-bottom: none; }
  .summary-label {
    width: 120px;
    font-weight: 600;
    color: #3f3f46;
    flex-shrink: 0;
  }
  .summary-value { color: #52525b; }
  .message-block {
    background: #f4f4f5;
    border-left: 3px solid ${amber};
    padding: 16px 20px;
    margin: 20px 0;
    font-size: 14px;
    color: #52525b;
    line-height: 1.8;
    white-space: pre-wrap;
  }
  .cta-section {
    text-align: center;
    margin: 32px 0 8px;
  }
  .cta-btn {
    display: inline-block;
    background-color: ${amber};
    color: #ffffff !important;
    text-decoration: none;
    padding: 14px 36px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .divider {
    border: none;
    border-top: 1px solid #e4e4e7;
    margin: 28px 0;
  }
  .footer {
    background-color: ${NAVY};
    padding: 28px 40px;
    text-align: center;
  }
  .footer-name {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 4px;
  }
  .footer-role {
    font-size: 12px;
    color: ${amber};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin-bottom: 18px;
  }
  .footer-note {
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    line-height: 1.7;
  }
</style>
</head>
<body>
<div class="wrapper">

  <div class="header">
    <div class="logo-text">NOPLIN<span class="logo-dot">.</span></div>
    <div class="tagline">Digital Agency</div>
  </div>

  <div class="body">
    <p class="greeting">Hi ${fullName},</p>

    <p class="text">
      Thank you for reaching out to <strong>Noplin Digital</strong>. We've received your inquiry and one of our team members will get back to you <strong>within 2 business hours</strong>.
    </p>

    <div class="summary-box">
      <h3>Your Inquiry Summary</h3>
      <div class="summary-row">
        <span class="summary-label">Name</span>
        <span class="summary-value">${fullName}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Company</span>
        <span class="summary-value">${company}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Service</span>
        <span class="summary-value">${service}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Your Brief</span>
        <span class="summary-value" style="white-space:pre-wrap;">${message}</span>
      </div>
    </div>

    <p class="text">While you wait, feel free to explore our work and services:</p>

    <div class="cta-section">
      <a href="${SITE_URL}" class="cta-btn">Visit Our Website</a>
    </div>

    <hr class="divider" />

    <p class="text" style="font-size:13px; color:#71717a;">
      If you have any immediate questions, reply to this email or reach us at
      <a href="mailto:${ADMIN_EMAIL}" style="color:${amber};">${ADMIN_EMAIL}</a>.
    </p>
  </div>

  <div class="footer">
    <div class="footer-name">The Noplin Digital Team</div>
    <div class="footer-role">Strategy · Design · Development</div>
    <div class="footer-note">
      This is an automated confirmation. Please do not reply directly to this email.<br/>
      © ${new Date().getFullYear()} Noplin Digital. All rights reserved.
    </div>
  </div>

</div>
</body>
</html>`;

  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      htmlBody: html,
      name: SITE_NAME,
      replyTo: ADMIN_EMAIL,
    });
  } catch (err) {
    Logger.log("Confirmation email error: " + err.toString());
  }
}

// ═══════════════════════════════════════════════════════════════════
//  EMAIL 2 — Admin notification (to you)
// ═══════════════════════════════════════════════════════════════════
function sendAdminNotification(
  fullName,
  email,
  company,
  phone,
  service,
  message,
) {
  const subject = `🔔 New Inquiry: ${fullName} — ${service}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    background: #f4f4f5;
    color: #18181b;
    line-height: 1.7;
  }
  .wrapper {
    max-width: 600px;
    margin: 32px auto;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-top: 4px solid ${amber};
  }
  .header {
    background: ${NAVY};
    padding: 24px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo { font-size: 18px; font-weight: 700; color: #fff; }
  .logo span { color: ${amber}; }
  .badge {
    background: ${amber};
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .alert-bar {
    background: ${amber_BG};
    border-bottom: 1px solid #a5f3fc;
    padding: 14px 40px;
    font-size: 14px;
    color: ${amber_MID};
    font-weight: 600;
  }
  .body { padding: 36px 40px; }
  .section-title {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${amber_MID};
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${amber_BG};
  }
  .info-grid {
    margin-bottom: 28px;
  }
  .info-row {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #f4f4f5;
    font-size: 14px;
  }
  .info-row:last-child { border-bottom: none; }
  .info-label {
    width: 130px;
    font-weight: 600;
    color: #3f3f46;
    flex-shrink: 0;
  }
  .info-value { color: #18181b; }
  .message-block {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 4px solid ${amber};
    padding: 20px 24px;
    font-size: 14px;
    color: #3f3f46;
    line-height: 1.8;
    white-space: pre-wrap;
    margin-bottom: 28px;
    border-radius: 0 4px 4px 0;
  }
  .action-row {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }
  .btn-primary {
    display: inline-block;
    background: ${amber};
    color: #ffffff !important;
    text-decoration: none;
    padding: 13px 28px;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .btn-secondary {
    display: inline-block;
    background: transparent;
    border: 2px solid ${amber};
    color: ${amber_MID} !important;
    text-decoration: none;
    padding: 11px 28px;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .meta-bar {
    background: #f4f4f5;
    padding: 14px 40px;
    font-size: 12px;
    color: #71717a;
    border-top: 1px solid #e4e4e7;
  }
  .footer {
    background: ${NAVY};
    padding: 20px 40px;
    text-align: center;
    font-size: 11px;
    color: rgba(255,255,255,0.35);
  }
</style>
</head>
<body>
<div class="wrapper">

  <div class="header">
    <div class="logo">NOPLIN<span>.</span></div>
    <div class="badge">New Lead</div>
  </div>

  <div class="alert-bar">
    📬 &nbsp;New inquiry submitted via noplindigital.com
  </div>

  <div class="body">

    <p class="section-title">Contact Details</p>
    <div class="info-grid">
      <div class="info-row">
        <span class="info-label">Full Name</span>
        <span class="info-value"><strong>${fullName}</strong></span>
      </div>
      <div class="info-row">
        <span class="info-label">Email</span>
        <span class="info-value"><a href="mailto:${email}" style="color:${amber};">${email}</a></span>
      </div>
      <div class="info-row">
        <span class="info-label">Company</span>
        <span class="info-value">${company}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Phone / WhatsApp</span>
        <span class="info-value"><a href="tel:${phone}" style="color:${amber};">${phone}</a></span>
      </div>
      <div class="info-row">
        <span class="info-label">Service Requested</span>
        <span class="info-value" style="color:${amber_MID}; font-weight:600;">${service}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Submitted At</span>
        <span class="info-value">${new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" })} (WAT)</span>
      </div>
    </div>

    <p class="section-title">Project Brief</p>
    <div class="message-block">${message}</div>

    <div class="action-row">
      <a href="mailto:${email}?subject=Re: Your Noplin Digital Inquiry" class="btn-primary">Reply to ${fullName}</a>
      <a href="https://wa.me/${phone.replace(/\D/g, "")}" class="btn-secondary">WhatsApp</a>
    </div>

  </div>

  <div class="meta-bar">
    Submitted via the contact form at <a href="${SITE_URL}" style="color:${amber};">${SITE_URL}</a>
  </div>

  <div class="footer">
    © ${new Date().getFullYear()} Noplin Digital — Internal Notification. Do not forward.
  </div>

</div>
</body>
</html>`;

  try {
    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: subject,
      htmlBody: html,
      name: `${SITE_NAME} Form`,
    });
  } catch (err) {
    Logger.log("Admin notification error: " + err.toString());
  }
}

// ═══════════════════════════════════════════════════════════════════
//  GET handler — health check (optional)
// ═══════════════════════════════════════════════════════════════════
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "Noplin Digital contact handler is live." }),
  ).setMimeType(ContentService.MimeType.JSON);
}
