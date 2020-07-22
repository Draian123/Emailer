// production keys here
// module.exports = {
//   googleClientID:
//     '922800946154-i23nr88tuldladsdgg8oak4g52gm11rp.apps.googleusercontent.com',
//   googleClientSecret: 'I3id_rC5wAu2eJN8NI9Vtb8H',
//   mongoURI:
//     'mongodb+srv://Draian123:kAg9HUesPSH3hQg7@cluster0.tcurp.mongodb.net/emailer?retryWrites=true&w=majority',
//   cookieKey: 'dshfhdfhinsjntdsetsgcvjadasfhdsgfsdghj',
// };

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};
