import Dokter from "../models/Dokter.js";

const DokterController = {
  index: async (req, res) => {
    const dokter = await Dokter.getAll();
    res.render("dokter/index", { dokter });
  },

  create: (req, res) => {
    res.render("dokter/create");
  },

  store: async (req, res) => {
    const { id_pegawai, id_poli, nama_dokter, status_dokter } = req.body;
    await Dokter.create({ id_pegawai, id_poli, nama_dokter, status_dokter });

    res.redirect("/dokter"); // Redirect ke daftar dokter
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Dokter.delete(id);
    res.redirect("/dokter"); // Redirect ke daftar dokter setelah hapus
  },

  edit: async (req, res) => {
    const dokter = await Dokter.find(req.params.id);
    res.render("dokter/edit", { dokter });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { id_pegawai, id_poli, nama_dokter, status_dokter } = req.body;

    await Dokter.update(id, { id_pegawai, id_poli, nama_dokter, status_dokter });

    res.redirect("/dokter"); // Redirect ke daftar dokter setelah update
  },
};

export default DokterController;
