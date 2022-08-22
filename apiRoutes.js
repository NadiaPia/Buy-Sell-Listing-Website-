module.exports = function(router, database) {

  router.get('/favorites', (req, res) => {
    database.getIsSold(false)
      .then(favorites => res.send({ favorites }))
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });
};
