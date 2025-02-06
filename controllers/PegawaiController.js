import Pegawai from "../models/Pegawai.js";

const PegawaiController = {
  index: async (req, res) => {
    const pegawai = await Pegawai.getAll();
    res.render("pegawai/index", { pegawai });
  },

  create: (req, res) => {
    res.render("pegawai/create");
  },

  store: async (req, res) => {
    const { id_pegawai, nama_pegawai, status_pegawai, gaji } = req.body;

    await Pegawai.create({ id_pegawai, nama_pegawai, status_pegawai, gaji });

    res.redirect("/pegawai"); // Redirect ke daftar pegawai setelah tambah data
  },

  delete: async (req, res) => {
    const id = req.params.id;

    await Pegawai.delete(id);

    res.redirect('/pegawai'); // Redirect ke daftar pegawai setelah hapus data
  },

  edit: async (req, res) => {
    const pegawai = await Pegawai.find(req.params.id);
    res.render("pegawai/edit", { pegawai });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { nama_pegawai, status_pegawai, gaji } = req.body;
    
    await Pegawai.update(id, { nama_pegawai, status_pegawai, gaji });

    res.redirect("/pegawai"); // Redirect ke daftar pegawai setelah update
  },
};

export default PegawaiController;
