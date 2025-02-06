import Pegawai from "../models/Pegawai.js";
import Poli from "../models/Poli.js";

const PoliController = {
  index: async (req, res) => {
    const poli = await Poli.getAll();
    res.render("poli/index", { poli });
  },

  create: async (req, res) => {
    res.render("poli/create", {pegawai : await Pegawai.getAll()});
  },

  store: async (req, res) => {
    const { id_pegawai, nama_poli } = req.body;
    await Poli.create({ id_pegawai, nama_poli });

    res.redirect("/poli"); // Redirect ke daftar poli
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Poli.delete(id);
    res.redirect("/poli"); // Redirect ke daftar poli setelah hapus
  },

  edit: async (req, res) => {
    const poli = await Poli.find(req.params.id);
    res.render("poli/edit", { poli });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { id_pegawai, nama_poli } = req.body;

    await Poli.update(id, { id_pegawai, nama_poli });

    res.redirect("/poli"); // Redirect ke daftar poli setelah update
  },
};

export default PoliController;
