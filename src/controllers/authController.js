import prisma from '../config/prisma.js';
import { hashPassword, comparePassword } from '../utils/hash.js';

// Affiche la page d’inscription
export function renderSignup(req, res) {
  res.render('auth/signup');
}

// Affiche la page de connexion
export function renderLogin(req, res) {
  res.render('auth/login');
}

// Gère l’inscription
export async function handleSignup(req, res) {
  console.log('DEBUG SESSION handleSignup:', req.session);

  const { nom, prenom, email, password, confirmPassword } = req.body;

  if (!nom || !prenom || !email || !password || !confirmPassword) {
    req.flash('error', 'Tous les champs sont obligatoires.');
    return res.redirect('/signup');
  }

  if (password !== confirmPassword) {
    req.flash('error', 'Les mots de passe ne correspondent pas.');
    return res.redirect('/signup');
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    req.flash('error', 'Un utilisateur avec cet email existe déjà.');
    return res.redirect('/signup');
  }

  const hashed = await hashPassword(password);

  await prisma.user.create({
    data: {
      nom,
      prenom,
      email,
      password: hashed,
      role: 'user'
    }
  });

  req.flash('success', 'Inscription réussie ! Connectez-vous.');
  res.redirect('/login');
}

<<<<<<< Updated upstream
=======
// Gère la connexion
>>>>>>> Stashed changes
export async function handleLogin(req, res) {
  console.log('DEBUG SESSION handleLogin:', req.session);

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
<<<<<<< Updated upstream
    return res.status(401).send('Utilisateur introuvable.');
=======
    req.flash('error', 'Utilisateur introuvable.');
    return res.redirect('/login');
  }

  if (user.isBanned) {
    req.flash('error', 'Votre compte a été banni.');
    return res.redirect('/login');
>>>>>>> Stashed changes
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
<<<<<<< Updated upstream
    return res.status(401).send('Mot de passe incorrect.');
=======
    req.flash('error', 'Mot de passe incorrect.');
    return res.redirect('/login');
>>>>>>> Stashed changes
  }

  req.session.user = user;
  req.session.role = user.role;

  //  Redirection vers /dashAdm
  if (user.role === 'admin') {
<<<<<<< Updated upstream

  res.redirect('/dashAdm');

} else {


  res.redirect('/userBoard');

  
}

}

// Déconnecte l'utilisateur en détruisant la session
=======
    req.flash('success', 'Bienvenue admin !');
    return res.redirect('/dashAdm');
  } else {
    req.flash('success', 'Connexion réussie !');
    return res.redirect('/userBoard');
  }
}

// Déconnexion
>>>>>>> Stashed changes
export function logoutUser(req, res) {
  req.session.destroy(err => {
    if (err) {
      console.error('❌ Erreur de déconnexion :', err);
      return res.redirect('/');
    }
    res.redirect('/login');
  });
}
