import pool from "../config/database.js";

const Reservasi = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM reservasi");
    return rows;
  },

  create: async (data) => {
    const { no_rm, id_poli, id_dokter, no_antrian } = data;
    await pool.query(
      "INSERT INTO reservasi (no_rm, id_poli, id_dokter, no_antrian) VALUES (?, ?, ?, ?)",
      [no_rm, id_poli, id_dokter, no_antrian]
    );
  },

  delete: async (id) => {
    await pool.query("DELETE FROM reservasi WHERE id_reservasi = ?", [id]);
  },

  update: async (id, data) => {
    const { no_rm, id_poli, id_dokter, no_antrian } = data;
    await pool.query(
      "UPDATE reservasi SET no_rm = ?, id_poli = ?, id_dokter = ?, no_antrian = ? WHERE id_reservasi = ?",
      [no_rm, id_poli, id_dokter, no_antrian, id]
    );
  },

  find: async (id) => {
    const [row] = await pool.query("SELECT * FROM reservasi WHERE id_reservasi = ?", [id]);
    return row[0];
  },
};

export default Reservasi;
