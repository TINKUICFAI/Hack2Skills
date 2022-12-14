const env = require("dotenv")
  .config({ path: __dirname + "/../.env" })
  .parsed

module.exports = {
  TWILIO_ACCOUNT_SID: env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: env.TWILIO_AUTH_TOKEN,
  TWILIO_API_KEY: env.TWILIO_API_KEY,
  TWILIO_API_SECRET: env.TWILIO_API_SECRET,
  TWILIO_CHAT_SERVICE_SID: env.TWILIO_CHAT_SERVICE_SID,
  TWILIO_NOTIFICATION_SERVICE_SID: env.TWILIO_NOTIFICATION_SERVICE_SID,
  TWILIO_NOTIFY_SERVICE_SID: env.TWILIO_NOTIFY_SERVICE_SID,
  TWILIO_SYNC_SERVICE_SID: env.TWILIO_SYNC_SERVICE_SID || 'default',
  virgil: {
    appId: env.APP_ID,
    appKey: env.APP_KEY,
    appKeyId: env.APP_KEY_ID
  }
}
