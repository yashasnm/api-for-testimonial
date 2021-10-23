const Testimonial = require("../models/Testimonial");
const {uploadFile}=require("../services/s3")
//@desc         add Testimonial
//@route        /api/v1/add-testimonial
//access        public
module.exports.addTestimonial = async (req, res, next) => {
  try {
    const { name, post, Description, Active } = req.body;
    const testimonial = await Testimonial.create({
      name,
      post,
      Description,
      Active,
    });
    if (!testimonial) {
      res.status(201).json({ success: false, msg: "error in uploading" });
    }

    res.status(200).json({ success: true, testimonial });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};



//@desc         upload img
//@route        /api/v1/upload-img
//access        public
module.exports.uploadimg = async (req, res, next) => {
  try {
    let file=req.file
    const _id=req.params.id
    //upload to s3
    const uploadres=await uploadFile(file)
    const {Location,Key} = uploadres
const photo={name:Key,link:Location}
    const testimonial = await Testimonial.findByIdAndUpdate(_id, { $set:  {photo}});
    if (!testimonial) {
      res.status(201).json({ success: false, msg: "error in uploading" });
    }

    return res.status(200).json({ success: true, testimonial});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};


//@desc         updatebyquery Testimonial
//@route        /api/v1/update-testimonial/:id
//access        public
module.exports.updateTestimonialbyquery = async (req, res, next) => {
  try {
     //we can (update all ||update by id ||name ||post) by passing query
     const filter = req.query ? req?.query : {};
    const testimonial = await Testimonial.updateMany(filter, { $set: req.body });
    if (!testimonial) {
      res.status(201).json({ success: false, msg: "error in updating" });
    }

    res.status(200).json({ success: true, testimonial });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};

//@desc         delete Testimonial
//@route        /api/v1/delete-testimonial
//access        public
module.exports.deleteTestimonial = async (req, res, next) => {
  try {
     //we can (update all ||update by id ||name ||post) by passing query
     const filter = req.query ? req?.query : {};
     console.log(filter);
    const testimonial = await Testimonial.deleteMany(filter);
    if (!testimonial) {
      res.status(201).json({ success: false, msg: "error in delete" });
    }

    res
      .status(200)
      .json({
        success: true,
        msg: `successfully deleted testtimonial  `,
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};

//@desc         get Testimonial
//@route        /api/v1/get-testimonial
//access        public
module.exports.getTestimonial = async (req, res, next) => {
  try {
    //we can (find all ||find by id ||name ||post) by passing query
    const filter = req.query ? req?.query : {};
    console.log(filter)
    const testimonial = await Testimonial.find(filter);
    if (!testimonial) {
      res.status(201).json({ success: false, msg: "error in delete" });
    }

    res
      .status(200)
      .json({ success: true, count: testimonial.length, testimonial });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};
