const router = require("express").Router();

router.get("/health", (_req, res) => {
  throw new Error("NOOOO");
  res.status(200).json({ message: "Success!" });
});

router.get("/", (req, res) => console.log("eheljel"));

module.exports = router;
