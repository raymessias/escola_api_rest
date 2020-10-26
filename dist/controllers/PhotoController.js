"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('filefield');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const fotoAluno = {
          aluno_id,
          originalname,
          filename,
        };

        const photo = await _Photo2.default.create(fotoAluno);

        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

exports. default = new PhotoController();
