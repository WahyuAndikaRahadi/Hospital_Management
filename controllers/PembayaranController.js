import Antri from "../models/Antri.js";
import Pembayaran from "../models/Pembayaran.js";

const PembayaranController = {
  index: async (req, res) => {
    const pembayaran = await Pembayaran.getAll();
    res.render("pembayaran/index", { pembayaran });
  },

  create: async (req, res) => {
    res.render("pembayaran/create", {antri : await Antri.getAll()});
  },

  store: async (req, res) => {
    const { id_pembayaran, no_antrian, tipe_pembayaran, nama_instansi } = req.body;
    await Pembayaran.create({ id_pembayaran, no_antrian, tipe_pembayaran, nama_instansi });

    res.redirect("/pembayaran"); // Redirect ke daftar pembayaran
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Pembayaran.delete(id);
    res.redirect("/pembayaran"); // Redirect ke daftar pembayaran setelah hapus
  },

  edit: async (req, res) => {
    const pembayaran = await Pembayaran.find(req.params.id);
    res.render("pembayaran/edit", { pembayaran, antri : await Antri.getAll() });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { no_antrian, tipe_pembayaran, nama_instansi } = req.body;

    await Pembayaran.update(id, { no_antrian, tipe_pembayaran, nama_instansi });

    res.redirect("/pembayaran"); // Redirect ke daftar pembayaran setelah update
  },
};

export default PembayaranController;
