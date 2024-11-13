const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Menggunakan middleware CORS
app.use(cors());

// Data JSON yang akan dikirimkan
const data = {
    suhuMax: 36,
    suhuMin: 25,
    suhuRata: 28.5,
    kelembapan: 60,  // Menambahkan data kelembapan
    kekeruhan: 12,  // Menambahkan data kekeruhan
    ph: 6.5,        // Menambahkan data pH
    nilai_suhu_max_humid_max_min: [
        { idx: 162, suhu: 36, kelembaban: 27, kecerahan: 25, timestamp: "2018-09-18 07:23:49" },
        { idx: 205, suhu: 35, kelembaban: 27, kecerahan: 25, timestamp: "2019-05-12 09:14:14" }
    ],
    month_year_max: [
        { month_year: "9-2018" },
        { month_year: "5-2019" }
    ]
};

// Endpoint untuk mengirimkan data JSON
app.get('/data', (req, res) => {
    res.json(data);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
