import pool from "../config/database.js";

const Poli = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM poli");
    return rows;
  },

  create: async (data) => {
    const { id_pegawai, nama_poli } = data;
    await pool.query(
      "INSERT INTO poli (id_pegawai, nama_poli) VALUES (?, ?)",
      [id_pegawai, nama_poli]
    );
  },

  delete: async (id) => {
    await pool.query("DELETE FROM poli WHERE id_poli = ?", [id]);
  },

  update: async (id, data) => {
    const { id_pegawai, nama_poli } = data;
    await pool.query(
      "UPDATE poli SET id_pegawai = ?, nama_poli = ? WHERE id_poli = ?",
      [id_pegawai, nama_poli, id]
    );
  },

  find: async (id) => {
    const [row] = await pool.query("SELECT * FROM poli WHERE id_poli = ?", [id]);
    return row[0];
  },
};

export default Poli;
