const router = require("express").Router();
const GalleryCtrl = require("../controller/galleryCtrl");

router.post("/gallery", GalleryCtrl.addPhoto);
router.get("/gallery", GalleryCtrl.getPhotos);
router.delete("/gallery/:id", GalleryCtrl.deletePhoto);
router.put("/gallery/:id", GalleryCtrl.updatePhoto);
router.get("/search", GalleryCtrl.searchPhoto);


module.exports = router;