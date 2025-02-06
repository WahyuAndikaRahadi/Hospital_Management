import pool from "../config/database.js";

const Dokter = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM dokter");
    return rows;
  },

  create: async (data) => {
    const { id_pegawai, id_poli, nama_dokter, status_dokter } = data;
    await pool.query(
      "INSERT INTO dokter (id_pegawai, id_poli, nama_dokter, status_dokter) VALUES (?, ?, ?, ?)",
      [id_pegawai, id_poli, nama_dokter, status_dokter]
    );
  },

  delete: async (id) => {
    await pool.query("DELETE FROM dokter WHERE id_dokter = ?", [id]);
  },

  update: async (id, data) => {
    const { id_pegawai, id_poli, nama_dokter, status_dokter } = data;
    await pool.query(
      "UPDATE dokter SET id_pegawai = ?, id_poli = ?, nama_dokter = ?, status_dokter = ? WHERE id_dokter = ?",
      [id_pegawai, id_poli, nama_dokter, status_dokter, id]
    );
  },

  find: async (id) => {
    const [row] = await pool.query("SELECT * FROM dokter WHERE id_dokter = ?", [id]);
    return row[0];
  },
};

export default Dokter;
