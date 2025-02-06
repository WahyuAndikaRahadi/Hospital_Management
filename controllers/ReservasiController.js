import Reservasi from "../models/Reservasi.js";
import Poli from "../models/Poli.js";
import Dokter from "../models/Dokter.js";
import Pasien from "../models/Pasien.js";
import Antri from "../models/Antri.js";


const ReservasiController = {
  index: async (req, res) => {
    const reservasi = await Reservasi.getAll();
    res.render("reservasi/index", { reservasi });
  },

  create: async(req, res) => {
    res.render("reservasi/create", { poli: await Poli.getAll(), dokter: await Dokter.getAll(), pasien: await Pasien.getAll(), antri: await Antri.getAll() } );
  },

  store: async (req, res) => {
    const { no_rm, id_poli, id_dokter, no_antrian } = req.body;
    await Reservasi.create({ no_rm, id_poli, id_dokter, no_antrian });

    res.redirect("/reservasi"); // Redirect ke daftar reservasi
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Reservasi.delete(id);
    res.redirect("/reservasi"); // Redirect setelah penghapusan
  },

  edit: async (req, res) => {
    const reservasi = await Reservasi.find(req.params.id);
    res.render("reservasi/edit", { reservasi });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { no_rm, id_poli, id_dokter, no_antrian } = req.body;

    await Reservasi.update(id, { no_rm, id_poli, id_dokter, no_antrian });

    res.redirect("/reservasi"); // Redirect setelah update
  },
};

export default ReservasiController;
