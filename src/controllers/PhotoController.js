class PhotoController {
  async store(req, res) {
    res.status(200).json({
      OK: true,
    });
  }
}

export default new PhotoController();
