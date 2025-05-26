import multer from 'multer';
import path from 'path';

// Configuration du stockage des images uploadées
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

// Export du middleware multer prêt à l’emploi
const upload = multer({ storage });

export default upload;
