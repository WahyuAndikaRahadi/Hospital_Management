import pool from "../config/database.js";

const Pasien = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM pasien");
    return rows;
  },

  create: async (data) => {
    const { no_rm, ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung } = data;
    await pool.query(
      "INSERT INTO pasien (no_rm, ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [no_rm, ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung]
    );
  },

  delete: async (id) => {
    await pool.query("DELETE FROM pasien WHERE no_rm = ?", [id]);
  },

  update: async (id, data) => {
    const { ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung } = data;
    await pool.query(
      "UPDATE pasien SET ktp = ?, nama_pasien = ?, tgl_lahir = ?, alamat = ?, tinggi = ?, berat = ?, ibu_kandung = ? WHERE no_rm = ?",
      [ktp, nama_pasien, tgl_lahir, alamat, tinggi, berat, ibu_kandung, id]
    );
  },

  find: async (id) => {
    const [row] = await pool.query("SELECT * FROM pasien WHERE no_rm = ?", [id]);
    return row[0];
  },
};

export default Pasien;
