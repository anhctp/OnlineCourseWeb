const express = require("express");
const instructorController = require("../controllers/InstructorController");
const {
  isAlreadyLogin,
  isAuth,
  isInstructor,
} = require("../middleware/Authentication");
const router = express.Router();

router.post("/teaching", instructorController.createInstructor);

router.get(
  "/instructor/info/:instructorId",
  instructorController.getInstructorInfo
);

router.get(
  "/instructor/info/study/:courseId",
  instructorController.getInstructorInfoInStudying
);

router.get(
  "/courseof/:instructorId",
  instructorController.getCoursesOfInstructor
);

router.get(
  "/revenue-report/:instructorID",
  instructorController.getRevenueReport
);
module.exports = router;
