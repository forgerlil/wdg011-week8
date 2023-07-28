import express from 'express';
import multer from 'multer';
import path from 'path';
// import { fileURLToPath } from 'url';
const app = express();
const port = process.env.PORT || 8000;

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static('views'));
app.use(express.static('uploadedImages'));

const storage = multer.diskStorage({
  destination: './uploadedImages',
  filename: (req, file, cb) => {
    const extName = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${+Date.now()}${extName}`);
  },
});

const fileUpload = multer({ storage });

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, './views/index.html'));
  res.send('Something here :3');
});

app.post(
  '/upload-profile-pic',
  fileUpload.single('profile_pic'),
  (req, res, next) => {
    try {
      if (!req.file) throw new Error('No files were uploaded!');
      console.log(req.file);
      res.send(
        `<h2>Here is the picture:</h2><img src="${req.file.filename}" alt="something"/>`
      );
    } catch (error) {
      next(error);
    }
  }
);

app.use((err, req, res, next) => {
  return res.status(500).send(`<h2>${err.message}</h2>`);
});

app.listen(port);
