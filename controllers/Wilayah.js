import Wilayah from "../models/Wilayah.js";

const authCtrl = {
  getAll: async (req, res) => {
    try {
      const wilayah = await Wilayah.find().lean();
      if (wilayah) {
        res.status(200).json({
          data: wilayah,
          success: 1,
          message: "Query all wilayah successful.",
        });
      } else {
        res.status(400).json({
          success: 0,
          message: "Query all wilayah failed.",
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const { body } = req;

      const newWilayah = await new Wilayah({
        ...body,
      });
      await newWilayah.save();

      if (newWilayah) {
        res.status(200).json({
          data: newWilayah,
          success: 1,
          message: "Wilayah added succesfully",
        });
      } else {
        res.status(400).json({
          success: 0,
          message: "Wilayah added failed",
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { idWilayah } = req.params;
      const { body } = req;
      const updateWilayah = await Wilayah.findByIdAndUpdate(idWilayah, body, {
        new: true,
      });
      res.status(200).json({
        message: "Done update",
        data: updateWilayah,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const { idWilayah } = req.params;
      const OneWilayahQuery = await Wilayah.findById(idWilayah).lean();

      if (OneWilayahQuery) {
        res.status(200).json({
          data: OneWilayahQuery,
          success: 1,
          message: `Succesfully get one Wilayah by ID ${idWilayah}`,
        });
      } else {
        res.status(400).json({
          success: 0,
          message: "Query get one Wilayah failed",
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { idWilayah } = req.params;
      const deleteWilayah = await Wilayah.deleteOne({
        _id: idWilayah,
      });

      if (deleteWilayah) {
        res.status(200).json({
          idWilayah,
          success: 1,
          message: `Wilayah has been deleted with ID ${idWilayah}`,
        });
      } else {
        res.status(400).json({
          err,
          status: 0,
          message: "Error.",
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export default authCtrl;
