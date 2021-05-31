'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert("Socmeds", [
      {
        "nama_aplikasi": "tiktok",
        "keterangan": "aplikasi platform sosial video pendek yang didukung dengan musik",
        "jumlah_pengguna": 10000,
        "pendiri": "Mark Zuckerberg",
        "tanggal_didirikan": "1 September 2016",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "nama_aplikasi": "facebook",
        "keterangan": "aplikasi layanan jejaring sosial",
        "jumlah_pengguna": 20000,
        "pendiri": "Zhang Yiming",
        "tanggal_didirikan": "4 Februari 2004",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "nama_aplikasi": "instagram",
        "keterangan": "aplikasi berbagi foto dan video",
        "jumlah_pengguna": 30000,
        "pendiri": "Kevin Systrom",
        "tanggal_didirikan": "6 Oktober 2010",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "nama_aplikasi": "whatsapp",
        "keterangan": "aplikasi messaging",
        "jumlah_pengguna": 10000,
        "pendiri": "Jan Koum",
        "tanggal_didirikan": "3 Mei 2009",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "nama_aplikasi": "twitter",
        "keterangan": "aplikasi jejaring sosial micro-blogging",
        "jumlah_pengguna": 50000,
        "pendiri": "Jack Dorsey",
        "tanggal_didirikan": "15 Juli 2006",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Socmeds", null, {})
  }
};
