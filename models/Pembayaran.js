import pool from "../config/database.js";

const Pembayaran = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM pembayaran");
    return rows;
  },

  create: async (data) => {
    const { id_pembayaran, no_antrian, tipe_pembayaran, nama_instansi } = data;
    await pool.query(
      "INSERT INTO pembayaran (id_pembayaran, no_antrian, tipe_pembayaran, nama_instansi) VALUES (?, ?, ?, ?)",
      [id_pembayaran, no_antrian, tipe_pembayaran, nama_instansi]
    );
  },

  delete: async (id) => {
    await pool.query("DELETE FROM pembayaran WHERE id_pembayaran = ?", [id]);
  },

  update: async (id, data) => {
    const { no_antrian, tipe_pembayaran, nama_instansi } = data;
    await pool.query(
      "UPDATE pembayaran SET no_antrian = ?, tipe_pembayaran = ?, nama_instansi = ? WHERE id_pembayaran = ?",
      [no_antrian, tipe_pembayaran, nama_instansi, id]
    );
  },

  find: async (id) => {
    const [row] = await pool.query("SELECT * FROM pembayaran WHERE id_pembayaran = ?", [id]);
    return row[0];
  },
};

export default Pembayaran;
