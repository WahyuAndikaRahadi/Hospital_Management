import pool from '../config/database.js'

const Pegawai = {
   getAll: async () => {
      const [rows] = await pool.query('SELECT * FROM pegawai');
      return rows;
   },

   create: async (data) => {
      const { id_pegawai, nama_pegawai, status_pegawai, gaji } = data;
      await pool.query(
         'INSERT INTO pegawai (id_pegawai, nama_pegawai, status_pegawai, gaji) VALUES (?, ?, ?, ?)', 
         [id_pegawai, nama_pegawai, status_pegawai, gaji]
      );
   },

   delete: async (id) => {
      await pool.query('DELETE FROM pegawai WHERE id_pegawai = ?', [id]);
   },

   update: async (id, data) => {
      const { nama_pegawai, status_pegawai, gaji } = data;
      await pool.query(
         'UPDATE pegawai SET nama_pegawai = ?, status_pegawai = ?, gaji = ? WHERE id_pegawai = ?', 
         [nama_pegawai, status_pegawai, gaji, id]
      );
   },

   find: async (id) => {
      const [row] = await pool.query('SELECT * FROM pegawai WHERE id_pegawai = ?', [id]);
      return row[0];
   }
};

export default Pegawai;
