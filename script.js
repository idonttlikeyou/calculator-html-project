/*Kalkulator Dasar*/

function kuadratkan_x() {
  let x=
  document.getElementById("angka_x").value;
  document.getElementById("hasil").textContent = x * x;
}

function kuadratkan_y() {
  let y=
  document.getElementById("angka_y").value;
  document.getElementById("hasil").textContent = y * y;
}

function akarkan_x() {
  let x=
  Number(document.getElementById("angka_x").value);
  document.getElementById("hasil").textContent = Math.sqrt(x);
}

function akarkan_y() {
  let y=
  document.getElementById("angka_y").value;
  document.getElementById("hasil").textContent = Math.sqrt(y);
}

function tambahkan_x_y() {
  let x=
  Number(document.getElementById("angka_x").value);
  let y=
  Number(document.getElementById("angka_y").value);
  document.getElementById("hasil").textContent = x + y;
}

function kurangi_x_y() {
  let x=
  Number(document.getElementById("angka_x").value);
  let y=
  Number(document.getElementById("angka_y").value);
  document.getElementById("hasil").textContent = x - y;
}

function kalikan_x_y() {
  let x=
  Number(document.getElementById("angka_x").value);
  let y=
  Number(document.getElementById("angka_y").value);
  document.getElementById("hasil").textContent = x * y;
}

function bagi_x_y() {
  let x=
  Number(document.getElementById("angka_x").value);
  let y=
  Number(document.getElementById("angka_y").value);
  document.getElementById("hasil").textContent = x / y;
}

/*Kalkulator suhu*/

function ubahkecelsiussementara() {
  let inputsuhu=
  Number(document.querySelector('input[name="inputsuhu"]').value);
  let celsiussementara;
  if 
  (document.getElementById("celsius").checked) { celsiussementara = inputsuhu }
  else if
  (document.getElementById("fahrenheit").checked) { celsiussementara = ((inputsuhu - 32) *5/9) }
  else if
  (document.getElementById("kelvin").checked) { celsiussementara = inputsuhu - 273 }
  else if
  (document.getElementById("reamur").checked) { celsiussementara = inputsuhu * 5/4 }
  else {
    return "Silahkan Masukkan Satuan Suhu!";
    }
    return celsiussementara;
}

function ubahkecelsius() {
  let c = ubahkecelsiussementara();
  if (typeof c === "string") {
    document.getElementById("hasilkalksuhu").textContent = c;
    
         } else {
           document.getElementById("hasilkalksuhu").textContent = (c * 1).toFixed(2) + " °C";
         }
}

function ubahkefahrenheit() {
  let c = ubahkecelsiussementara();
  if (typeof c === "string") {
    document.getElementById("hasilkalksuhu").textContent = c;
  } else {
    document.getElementById("hasilkalksuhu").textContent = (c * 9/5 + 32).toFixed(2) + " °F";
  }
}
function ubahkekelvin() {
  let c = ubahkecelsiussementara();
  if (typeof c === "string") {
    document.getElementById("hasilkalksuhu").textContent = c;
  } else {
    document.getElementById("hasilkalksuhu").textContent = (c + 273).toFixed(2) + " °K";
  }
}
function ubahkereamur() {
  let c = ubahkecelsiussementara();
  if (typeof c === "string") {
    document.getElementById("hasilkalksuhu").textContent = c;
  } else {
    document.getElementById("hasilkalksuhu").textContent = (c * 4/5).toFixed(2) + " °R";
  }
}

/*Kalkulator Jawa*/

function ubahkehari(str) {
  let [h, b, t] =
  str.split("/").map(Number);
  return new Date(t, b - 1, h);
}

function konversitanggalkeharijawa() {
  let inputtanggal =
  ubahkehari(document.getElementById("inputtanggal").value);
  
  let konversiMd = Math.abs(inputtanggal.getTime());
  let patokan = new Date(1938, 1, 1).getTime();
  let konversiD = Math.floor((konversiMd - patokan) / (1000 * 60 * 60 * 24));
  let hariPasaran = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"];
  let indexPasaran = ((konversiD % 5) + 5 ) % 5;
  document.getElementById("hasilharijawa").textContent = hariPasaran[indexPasaran]
}

//kalkulator Lingkaran//

function hitung_keliling_dan_luas_lingkaran() {
  let PI = Math.PI;
  let jari_jari =
  document.getElementById("jari_jari").value;
  let jari_jari_mod_7 = jari_jari % 7;
  let bisa_dibagi_tujuh
  if(jari_jari_mod_7 === 0) {
    bisa_dibagi_tujuh = true;
  } else bisa_dibagi_tujuh = false;
  
  if(bisa_dibagi_tujuh === true) {
    let keliling = (jari_jari * 2) * 22 / 7;
    document.getElementById("keliling_lingkaran").textContent = (keliling) + " cm²";
    
    let luas = 22 / 7 * jari_jari ** 2;
    document.getElementById("luas_lingkaran").textContent = (luas) + " cm²";
    
    document.getElementById("menggunakan_pi").textContent = "22/7";
  } else {
  let keliling = jari_jari * 2 * PI;
  document.getElementById("keliling_lingkaran").textContent = (keliling).toFixed(2) + " cm²";
  
  let luas = PI * jari_jari ** 2;
  document.getElementById("luas_lingkaran").textContent = (luas).toFixed(2) + " cm²";
  
  document.getElementById("menggunakan_pi").textContent = PI;
  }
}

//kalkulator hipotenusa//

function hitung_hipotenusa() {
  let sisi_samping = document.getElementById("panjang_sisi_samping_segitiga").value;
  let sisi_bawah = document.getElementById("panjang_sisi_bawah_segitiga").value;
  let hipotenusa = Math.sqrt(sisi_samping ** 2 + sisi_bawah ** 2)
  document.getElementById("hasil_hipotenusa").textContent = hipotenusa + " cm"
}