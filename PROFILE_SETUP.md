# Cara Upload Sebagai Website Statis / GitHub Pages

Folder ini sudah disiapkan sebagai versi statis dari halaman publik portfolio.

File utama:

- `index.html`
- `assets/css/styles.css`
- `assets/js/app.js`
- `assets/logo.svg`

## 1. Edit Data Statis

Buka `assets/js/app.js`, lalu ganti data pada bagian:

```text
profile
techGroups
projects
tutorials
```

Di sana kamu bisa mengganti nama, email, link sosial media, daftar skill, proyek, tutorial, dan gambar.

## 2. Buka Lokal

Untuk preview cepat, buka file ini di browser:

```text
index.html
```

## 3. Upload Ke GitHub Pages

Buat repository baru di GitHub, lalu push isi folder ini.

Jalankan dari folder `github-profile`:

```bash
git add .
git commit -m "Convert portfolio to static public site"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/NAMA_REPOSITORY.git
git push -u origin main
```

Buka repository GitHub:

```text
Settings > Pages > Build and deployment > Deploy from a branch
```

Pilih branch `main` dan folder `/root`.

## Catatan

Ini hanya halaman publik statis. Fitur admin, database, login, CKEditor, dan form email Laravel tidak ikut dibawa.

Form contact di versi ini hanya menampilkan pesan lokal. Sambungkan ke layanan seperti Formspree, Netlify Forms, atau endpoint backend jika ingin benar-benar mengirim email.
