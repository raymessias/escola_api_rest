"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  index(req, res) {
    res.status(200).json({
      OK: true,
    });
  }
}

exports. default = new HomeController();
