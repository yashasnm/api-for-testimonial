const express = require("express");
const upload= require("../middleware/multer")
const { addTestimonial,deleteTestimonial,getTestimonial,updateTestimonialbyquery,uploadimg } = require("../controller/Testimonial");
const router = express.Router();
router.route("/add-testimonial").post(addTestimonial);
router.route("/uploadimg/:id").put(upload,uploadimg);
router.route("/get-testimonial").get(getTestimonial);
router.route("/update-byquery").put(updateTestimonialbyquery);
router.route("/delete-testimonial").delete(deleteTestimonial);

module.exports = router;
