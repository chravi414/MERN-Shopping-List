const express = require("express");
const router = express.Router();

const ItemModel = require("./../../models/Item");

// @route GET api/items
// @desc Get all Items

router.get("/", (req, res) => {
  ItemModel.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new ItemModel({
    name: req.body.name,
  });
  newItem
    .save()
    .then((item) => {
      res.json(item);
      console.log("Item created Successfully");
    })
    .catch((err) => {
      res.status(500).json("Error in creating item");
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  ItemModel.findById(id)
    .then((item) => {
      item.remove().then(() => {
        res.json({
          success: true,
        });
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
      });
    });
});

module.exports = router;
