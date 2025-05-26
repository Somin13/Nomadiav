import bcrypt from 'bcryptjs';

const password = 'Ziane';

bcrypt.hash(password, 10).then((hash) => {
  console.log('Mot de passe hashé :', hash);
});
