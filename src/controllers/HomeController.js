class HomeController {
  index(req, res) {
    res.status(200).json({
      OK: true,
    });
  }
}

export default new HomeController();
