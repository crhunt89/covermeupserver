const router = require('express').Router();
const Upload = require('../db').import('../models/upload');
const validateSession = require('../middleware/validate-session');

router.get('/info', (req, res) => {
  Upload.findAll()
  .then(upload => res.status(200).json(upload))
        .catch(err => res.status(500).json({
            error: err
        }))
})
router.get('/:artist', (req, res) => {
  Upload.findOne({
    where: {
      artist: req.params.artist
    }
  })
  .then(upload => res.status(200).json(upload))
  .catch(err => res.status(500).json({error: err}))
})
router.get('/:contest', (req, res) => {
  Upload.findOne({
    where: {
      nameOfContest: req.params.contest
    }
  })
  .then(upload => res.status(200).json(upload))
  .catch(err => res.status(500).json({error:err}))
})
router.post('/upload', validateSession, (req, res) => {
    const uploadVideo = {
      artist: req.body.artist,
      nameOfContest: req.body.nameOfContest,
      video: req.body.video
    }
    Upload.create(uploadVideo)
    .then(upload => res.status(200).json(upload))
    .catch(err => res.status(500).json({error: err}))
})
router.delete('/:id', (req, res) => {
  Upload.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(upload => res.status(200).json(upload))
  .catch(err => res.status(500).json({
    error: err
  }))
})
router.put('/:id', (req, res) => {
  upload.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(upload => res.status(200).json(upload))
  .catch(err => res.status(500).json({
    error: err
  }))
})
module.exports = router;