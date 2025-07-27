import express from 'express';
import http from 'node:http';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // <-- ここを先に書く
const server = http.createServer(app);
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'login'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'yasumadayoooooooooooharusameeeeeee',
    resave: false,
    saveUninitialized: true
}));

//ログイン
// 読み込み時ちぇっく
app.use((req, res, next) => {
    if (req.cookies.massiropass !== 'ok' && !req.path.includes('login')) {
        return res.redirect('/login');
    } else {
        next();
    }
});

app.get('/manga/:page', (req, res) => {
    const filePath = path.join(__dirname, 'manga', `${req.params.page}.html`);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('ページが見つかりません');
        }
    });
});

//ログイン済み？
app.get('/login/if', async (req, res) => {
    if (req.cookies.massiropass !== 'ok') {
        res.render('login', { error: 'ログインしていません。もう一度ログインして下さい' })
    } else {
        return res.redirect('/');
    }
});

// ログインページ
app.get('/login', (req, res) => {
    res.render('login', { error: null }); 
});


// パスワード確認
app.post('/login', (req, res) => {
    const password = req.body.password;
    if (password === 'makkuro') {
        res.cookie('massiropass', 'ok', { maxAge: 5 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.redirect("/");
    } else {
        if (password === 'ohana') {
            return res.redirect('https://ohuaxiehui.webnode.jp');
        } else {
            res.render('login', { error: 'パスワードが間違っています。もう一度お試しください。' });
        }
    }
});

//ログアウト
app.post('/logout', (req, res) => {
    res.cookie('massiropass', 'false', { maxAge: 0, httpOnly: true });
    return res.redirect('/login');
});

//cookie
function parseCookies(request) {
    const list = {};
    const cookieHeader = request.headers.cookie;

    if (cookieHeader) {
        cookieHeader.split(';').forEach(cookie => {
            let parts = cookie.split('=');
            list[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }

    return list;
}

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/top', file: '/manga/top.html' },
  { path: '/hot', file: '/manga/hot.html' },
  { path: '/favorite', file: '/manga/favorite.html' }
]

app.get('/redirect', (req, res) => {
  const subp = req.query.p;
  const id= req.query.id;
  if (id) {
    res.redirect(`/${subp}/${id}`);
  } else {
    res.redirect(`/${subp}`);
  }
});

server.on('listening', () => {
  console.log(`Running at http://localhost:${PORT}`);
});

server.listen({
  port: PORT,
});
