import Antri from "../models/Antri.js";

const AntriController = {
  index: async (req, res) => {
    const antri = await Antri.getAll();
    res.render("antri/index", { antri });
  },

  create: (req, res) => {
    res.render("antri/create");
  },

  store: async (req, res) => {
    const { no_antrian, tanggal, hari, jam } = req.body;
    await Antri.create({ no_antrian, tanggal, hari, jam });

    res.redirect("/antri"); // Redirect ke daftar antrian
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Antri.delete(id);
    res.redirect("/antri"); // Redirect ke daftar antrian setelah hapus
  },

  edit: async (req, res) => {
    const antri = await Antri.find(req.params.id);
    res.render("antri/edit", { antri });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { tanggal, hari, jam } = req.body;

    await Antri.update(id, { tanggal, hari, jam });

    res.redirect("/antri"); // Redirect ke daftar antrian setelah update
  },
};

export default AntriController;
