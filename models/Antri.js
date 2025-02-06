import pool from "../config/database.js";

const Antri = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM antri");
    return rows;
  },

  create: async (data) => {
    const { no_antrian, tanggal, hari, jam } = data;
    await pool.query(
      "INSERT INTO antri (no_antrian, tanggal, hari, jam) VALUES (?, ?, ?, ?)",
      [no_antrian, tanggal, hari, jam]
    );
  },

  delete: async (id) => {
    await pool.query("DELETE FROM antri WHERE no_antrian = ?", [id]);
  },

  update: async (id, data) => {
    const { tanggal, hari, jam } = data;
    await pool.query(
      "UPDATE antri SET tanggal = ?, hari = ?, jam = ? WHERE no_antrian = ?",
      [tanggal, hari, jam, id]
    );
  },

  find: async (id) => {
    const [row] = await pool.query("SELECT * FROM antri WHERE no_antrian =?", [
      id,
    ]);
    return row[0];
  },
};

export default Antri;
