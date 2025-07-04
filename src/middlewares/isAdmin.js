export function isAdmin(req, res, next) {
  if (req.session.role === 'admin') {
    return next();
  }else {
  res.redirect('/login');
  return res.status(403).send('Accès interdit : admin uniquement.') }
}
