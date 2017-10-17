const router = require('express').Router();
const { Student } = require('../../db/models');

module.exports = router;

// GET /api/student => serve all studentes
router.get('/', async (req, res, next) => {
  try { res.json(await Student.findAll()); }
  catch (err) { next(); }
});

// GET /api/student/:id => serve student by id
router.get('/:id', async (req, res, next) => {
  try { res.json(await Student.findById(req.params.id)); }
  catch (err) { next(); }
});

// POST /api/student
router.post('/', async (req, res, next) => {
  try { res.json(await Student.create(req.body)); }
  catch (err) { next(); }
});

// PUT /api/student/:id => update student by id
router.put('/:id', async (req, res, next) => {
  let student;

  try {
    student = await Student.findById(req.params.id);
  }
  catch (err) { next(); }

  student.update(req.body);
  res.sendStatus(202);
});

// DELETE /api/student/:id => delete student by id
router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;

  try { await Student.destroy({ where: { id }}); }
  catch (err) { next(); }

  res.status(204).end();
});
