const router = require('express').Router();
const { Campus } = require('../../db/models');

module.exports = router;

// GET /api/campus => serve all campuses
router.get('/', async (req, res, next) => {
  try { res.json(await Campus.findAll()); }
  catch (err) { next(); }
});

// GET /api/campus/:id => serve campus by id
router.get('/:id', async (req, res, next) => {
  try { res.json(await Campus.findById(req.params.id)); }
  catch (err) { next(); }
});

// POST /api/campus
router.post('/', async (req, res, next) => {
  try { res.json(await Campus.create(req.body)); }
  catch (err) { next(); }
});

// PUT /api/campus/:id => update campus by id
router.put('/:id', async (req, res, next) => {
  let campus;

  try {
    campus = await Campus.findById(req.params.id);
  }
  catch (err) { next(); }

  campus.update(req.body);
  res.status(202).json(campus);
});

// DELETE /api/campus/:id => delete campus by id
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;

  try { await Campus.destroy({ where: { id }}); }
  catch (err) { next(); }

  res.status(204).end();
});
