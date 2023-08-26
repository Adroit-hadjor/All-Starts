import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import  * as prismic  from '@prismicio/client';
import { client, handleLinkResolver } from './config/prismicConfig.js';
import express from 'express';

config();

const app = express();
const PORT = process.env.PORT || 3000;

// If you later want to use __dirname with ES6 modules, uncomment the following:
const __filename = fileURLToPath(import.meta.url);
 const __dirname = dirname(__filename);

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
  res.locals.ctx = {
    prismic,
  };
  //console.log('res and ctx',res.locals.ctx)
  next();
});

app.get('/', async (req, res) => {
  const document = await client.getSingle('home');
  res.render('pages/home', { document });
});

app.get('/about', async(req, res) => {
  const about = await client.getSingle('about');
  //const meta = await client.getSingle('meta');
  console.log('document',about.data.body)
  about.data.gallery.forEach(element => {
    console.log('elememnt',element)
  });
  res.render('pages/about', { about });
});

app.get('/aboutit', (req, res) => {
  res.render('pages/about');
});

app.get('/detail/:id', (req, res) => {
  res.render('pages/detail');
});

app.get('/collections', (req, res) => {
  res.render('pages/collections');
});

app.get('/', (req, res) => {
  res.render('template');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
