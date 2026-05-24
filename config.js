/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['94720244485'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'KAVEE_EDITZZ '], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU27KiOBT9l7xqtXJR0KpTNYg3REVBvE31QyABIleTIGKX/96Fp093P8z0nHkLO2Tvtddae38DWU4YNnENht9AQckNctwceV1gMASjMggwBW2AIIdgCLZTVaotI2pRhS53fqDjCNpyTSczdsASCThCIiGBKQnsDTzboCi9hPh/SCg8YEX9q22b0AjmV89JVkJdVMfK3114rpFqvD/M8MFDj9MbeDYZIaEkCydFhFNMYWLiegMJ/Rz8eLa3zou662Lh7inkgPxLsrAKYetexvZhEu5lKXEe/clmIn8O/sWcJZej7Zmr23X2EJUaK33TQ4N94LoPWR0d71LvsD/fYaK+w2ckzDAyEM444fWneW+NJoulmFjKNr2diNmHXS9WKw3zcahdfEm33Vrr2LZ+nbifA36o3U5wKIp7NLLWeZGo9VifRKwS43VZSrviqBwn9n7HTEf7HfiGfngl/j+8m2vsjy1h7h4eIzy/zR9Cy6diRTckdpa5wFtYDau5mkjS9nPwNXc/S6cr187OvdK5KRNpWt0qVo+i3slJ0q617aVSLm/nkvwLPuQl/RPKmTO7Xs69u1pntiFnTq5c1aVcXBENK0v2OpBd3ett+dBDKy+N1YCQ7fwuVq62kHIXDsaPzTy6MSc9jgNvl8YDIsY8DN9eHcW4NhAYCs82oDgkjFPISZ69YpLYBhDdHOxTzF/0AlveVINoZ5hKtOp3nCROk2gFZ0GtOB1FWcfTZX9VqBHtBPIbaIOC5j5mDKM5YTyn9QozBkPMwPDvr22Q4Tt/F64pJwltEBDKuJuVRZJD9KHqxyX0/bzMuFNnvt4cMAXD7q8w5pxkIWt4LDNI/YjcsB5BzsAwgAnDPzvEFCMw5LTEP6dWz9GL+HNvPuo5PdAG6UsQgsAQDGRF7IqyLKu9Ya//F/tSNVlhUXzJMAdtkMHmZ4DKBMYsgqANktc7tS/IsiL3JUEYiGrztIk/fyJuCiDMIUkYGALd2rFkctq2zstlVzudNEfTTE1rWPzo8MMq71IsSZ3JWm9roKNz384XGlnkhbi+hFMUhMkAS/POqT4if1xt/ylJ434unjhlBfJn1zRqMV2yd16wuQio63JodevNzbBHa13dxf40DM/QJDfP5/HA72rdcCysx5FyjnpF7OrhxTt1N7PpZqy9NdUQvhEf/17M3cv43L87u0FYXmWpxb04ONXxzoWqNdsmxCewtAzkOhZu6efW2kIHU+9FEfVpZKrhZn3I7NF0Giy86CKz0NjFiyvR3k38GqLkx/IiL3s12jWfAcGvXfBDpP/S8h1347jus/1bih/L5V8GdOTIrGhplqvP913mjuqtQaCJLid5dDzKi+DI7x1xlUhHTZ2A5/NrGxQJ5EFOUzAELPUaz9C8bPxrZEH+h0q6Zhi6Fk6brhPIuPZrJnYkxYzDtABDQVEGfaEviP3nd6vjSX9JBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: true,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: true,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: true,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: true,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: true,
      nsfw: false,
      detect: false,
      chatbot: true,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
