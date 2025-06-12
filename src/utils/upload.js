import multer from 'multer';
import path from 'path';

// 📁 Dossier de destination des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  }
});

// ✅ Middleware prêt à accepter tous les fichiers
const upload = multer({ storage });

export default upload;
