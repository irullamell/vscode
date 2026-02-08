const { spawn } = require('child_process');

// Konfigurasi
const PORT = 8000;
const HOST = '0.0.0.0'; // 0.0.0.0 agar bisa diakses dari network lain (atau localhost)
const AUTH = 'none';    // 'none' = tanpa password. Ubah ke 'password' jika ingin aman.

console.log('===================================================');
console.log('  MEMULAI VS CODE WEB (via code-server)');
console.log(`  Target: http://localhost:${PORT}`);
console.log('  Mohon tunggu sebentar saat inisialisasi...');
console.log('===================================================\n');

// Perintah untuk menjalankan npx code-server
const args = [
    'code-server',
    '--bind-addr', `${HOST}:${PORT}`,
    '--auth', AUTH,
    '.' // Membuka direktori saat ini
];

// Menjalankan proses
const vsCode = spawn('npx', args, {
    stdio: 'inherit', // Menampilkan log langsung ke terminal
    shell: true       // Diperlukan untuk kompatibilitas Windows/Linux
});

vsCode.on('error', (err) => {
    console.error('Gagal menjalankan proses:', err);
});

vsCode.on('close', (code) => {
    console.log(`VS Code Web berhenti dengan kode: ${code}`);
});
