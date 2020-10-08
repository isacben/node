const { static } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const { getPageInfo } = require('./middleware/pageMiddleware');

// express app
const app = express();

// middelware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// register view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://admin:admin@cluster0.xtjky.mongodb.net/abbertodb?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/dashboard', requireAuth, getPageInfo, (req, res) => {
    res.render('admin/index');
});

app.use(authRoutes);
app.use(pageRoutes);