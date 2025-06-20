import multer from 'multer'
import path from 'path'

// 📁 Configuration du stockage pour les fichiers uploadés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/') // 📁 Dossier de destination
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase() // 🔍 Extension en minuscule
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext
    cb(null, uniqueName) // 🏷️ Nom unique
  }
})

// 🛡️ Vérifie que seuls certains formats sont acceptés
const fileFilter = function (req, file, cb) {
  const allowed = ['.png', '.jpg', '.jpeg', '.webp']
  const ext = path.extname(file.originalname).toLowerCase()
  if (allowed.includes(ext)) {
    cb(null, true) // ✅ Format accepté
  } else {
    cb(new Error('❌ Seuls les fichiers image (.png, .jpg, .jpeg, .webp) sont autorisés'))
  }
}

// ✅ Middleware Multer complet
const upload = multer({
  storage,
  fileFilter
})

export default upload
