import Pasien from "../models/Pasien.js";

const PasienController = {
  index: async (req, res) => {
    const pasien = await Pasien.getAll();
    res.render("pasien/index", { pasien });
  },

  create: (req, res) => {
    res.render("pasien/create");
  },

  store: async (req, res) => {
    const { no_rm, ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung } = req.body;
    await Pasien.create({ no_rm, ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung });

    res.redirect("/pasien"); // Redirect ke daftar pasien
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Pasien.delete(id);
    res.redirect("/pasien"); // Redirect ke daftar pasien setelah hapus
  },

  edit: async (req, res) => {
    const pasien = await Pasien.find(req.params.id);
    res.render("pasien/edit", { pasien });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung } = req.body;

    await Pasien.update(id, { ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung });

    res.redirect("/pasien"); // Redirect ke daftar pasien setelah update
  },
};

export default PasienController;
