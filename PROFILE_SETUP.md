# Cara Upload Sebagai GitHub Profile

Folder ini sudah disiapkan sebagai repository GitHub Profile.

## 1. Ganti Placeholder

Buka `README.md`, lalu ganti semua:

```text
YOUR_GITHUB_USERNAME
```

dengan username GitHub kamu.

Jika perlu, ganti juga:

```text
Hera Developer
hello@example.com
https://linkedin.com/in/example
```

## 2. Buat Repository Di GitHub

Buat repository baru dengan nama yang sama persis seperti username GitHub kamu.

Contoh:

```text
username GitHub: heradev
nama repository: heradev
```

Pastikan repository dibuat sebagai `Public`.

## 3. Upload Dari Terminal

Jalankan perintah ini dari folder `github-profile`:

```bash
git init
git add .
git commit -m "Create GitHub profile README"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.git
git push -u origin main
```

Setelah berhasil, README ini akan muncul di halaman profil GitHub kamu.
