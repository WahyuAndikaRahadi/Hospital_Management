import express from "express";
import PegawaiController from "../controllers/PegawaiController.js";
import AntriController from "../controllers/AntriController.js";
import PasienController from "../controllers/PasienController.js";
import PoliController from "../controllers/PoliController.js";
import DokterController from "../controllers/DokterController.js";
import PembayaranController from "../controllers/PembayaranController.js";
import ReservasiController from "../controllers/ReservasiController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("dashboard/index");
})

// Pegawai Routes
router.get("/pegawai", PegawaiController.index);
router.get("/pegawai/create", PegawaiController.create);
router.post("/pegawai/store", PegawaiController.store);
router.get("/pegawai/edit/:id", PegawaiController.edit);
router.post("/pegawai/update/:id", PegawaiController.update);
router.get("/pegawai/delete/:id", PegawaiController.delete);

// Antri Routes
router.get("/antri", AntriController.index);
router.get("/antri/create", AntriController.create);
router.post("/antri/store", AntriController.store);
router.get("/antri/edit/:id", AntriController.edit);
router.post("/antri/update/:id", AntriController.update);
router.get("/antri/delete/:id", AntriController.delete);

// Pasien Routes
router.get("/pasien", PasienController.index);
router.get("/pasien/create", PasienController.create);
router.post("/pasien/store", PasienController.store);
router.get("/pasien/edit/:id", PasienController.edit);
router.post("/pasien/update/:id", PasienController.update);
router.get("/pasien/delete/:id", PasienController.delete);

// Poli Routes
router.get("/poli", PoliController.index);
router.get("/poli/create", PoliController.create);
router.post("/poli/store", PoliController.store);
router.get("/poli/edit/:id", PoliController.edit);
router.post("/poli/update/:id", PoliController.update);
router.get("/poli/delete/:id", PoliController.delete);

// Dokter Routes
router.get("/dokter", DokterController.index);
router.get("/dokter/create", DokterController.create);
router.post("/dokter/store", DokterController.store);
router.get("/dokter/edit/:id", DokterController.edit);
router.post("/dokter/update/:id", DokterController.update);
router.get("/dokter/delete/:id", DokterController.delete);

// Pembayaran Routes
router.get("/pembayaran", PembayaranController.index);
router.get("/pembayaran/create", PembayaranController.create);
router.post("/pembayaran/store", PembayaranController.store);
router.get("/pembayaran/edit/:id", PembayaranController.edit);
router.post("/pembayaran/update/:id", PembayaranController.update);
router.get("/pembayaran/delete/:id", PembayaranController.delete);

// Reservasi Routes
router.get("/reservasi", ReservasiController.index);
router.get("/reservasi/create", ReservasiController.create);
router.post("/reservasi/store", ReservasiController.store);
router.get("/reservasi/edit/:id", ReservasiController.edit);
router.post("/reservasi/update/:id", ReservasiController.update);
router.get("/reservasi/delete/:id", ReservasiController.delete);

export default router;