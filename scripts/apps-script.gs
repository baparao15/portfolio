// Paste this into Extensions > Apps Script on the target Google Sheet,
// then deploy as a Web App (Execute as: Me, Who has access: Anyone).
// Copy the deployment URL into VITE_SHEET_ENDPOINT in your .env file.

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message'])
  }

  sheet.appendRow([
    new Date(),
    e.parameter.name,
    e.parameter.email,
    e.parameter.message,
  ])

  return ContentService.createTextOutput('OK')
}
