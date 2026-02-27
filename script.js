const kirim = document.getElementById('kirimjawab');
const kolpertanyaan = document.getElementById('pertanyaan');
const koljawaban = document.getElementById('jawab');
let hasil = document.getElementById('hasil');
let skorUI = document.getElementById('skor');
const customalert = document.getElementById('alert');
const pesanAlert = document.getElementById('Pesanalert');
const progress = document.getElementById('progress');
const skorAkhir = document.getElementById('skorAkhir');
const bungkusHasil = document.getElementById('bungkus-hasil');
const skorSempurna = document.getElementById('skorSempurna');
const toggleDark = document.getElementById('toggle');
const toggleDarkDiv = document.getElementById('toggleDiv');
const body = document.querySelector('body');
const game = document.getElementById('game');


const pertanyaan =  [

    {
        pertanyaan:'10 / 2 + 5',
        jawaban:'10'
    },
    {
        pertanyaan:'7 x 5 + 9',
        jawaban:'44'
    },
    // {
    //     pertanyaan:'90 + 9 x 10',
    //     jawaban:'180'
    // },
    // {
    //     pertanyaan:'100 x 50 + 20',
    //     jawaban:'5020'
    // },
    // {
    //     pertanyaan:'Tentukan gradien dari garis lurus yang melewati (0,2) dan (3,4)',
    //     jawaban:'2/3'    
    // },
    // {
    //     pertanyaan:'Jika f(x) = 2x + 3 diketahui x = 10 maka f(10) = ?',
    //     jawaban:'23'
    // },
    // {
    //   pertanyaan:'14 / 2 + 7',
    //   jawaban:'14'
    // },
    // {
    //     pertanyaan:'8 x 9 / 4',
    //     jawaban:'18'
    // },
    // {
    //     pertanyaan:'80 / 8',
    //     jawaban:'10'
    // }
  
]

function tampilPesan(pesan,skor,pertanyaan,nomorPertanyaan){
    progress.textContent = `Soal terjawab ${nomorPertanyaan + 1}/${pertanyaan.length}`;
    kirim.classList.add('hidden');
    koljawaban.classList.add('hidden');
    kolpertanyaan.classList.add('hidden');
    bungkusHasil.classList.add('hidden');
    pesanAlert.textContent = pesan;
    if(skor == -1){
        skorAkhir.textContent = 'kurang dari 0' 
    }else{

        skorAkhir.textContent = skor;
    }
    if(skorAkhir.textContent == pertanyaan.length){
  skorSempurna.textContent = 'ini adalah skor yang sempurna'
    }
    customalert.classList.remove('-translate-y-35');
}



function tutupPesan(){
    customalert.classList.add('-translate-y-35');
    tryAgain()
}


let nomorPertanyaan = 0;
let skor = 0;

function tryAgain(){
    koljawaban.classList.add('h-0');
    progress.innerText = '';
    skorUI.innerText = '0';
    skor = 0;
    nomorPertanyaan = 0;
    hasil.innerText = ''
    kolpertanyaan.innerText = 'Apakah Kamu Siap';
    kirim.innerText = 'Mulai'
    kirim.classList.remove('hidden');
    kolpertanyaan.classList.remove('hidden')
    bungkusHasil.classList.remove('hidden');
    
}

kirim.addEventListener('click',function(){
    koljawaban.classList.remove('h-0');
    koljawaban.classList.remove('hidden');
    kolpertanyaan.classList.remove('hidden');
    koljawaban.classList.remove('hidden');
    bungkusHasil.classList.remove('hidden');
    kirim.innerText = 'Jawab';
    kolpertanyaan.textContent = pertanyaan[nomorPertanyaan].pertanyaan
    if(koljawaban.value == pertanyaan[nomorPertanyaan].jawaban){
        koljawaban.classList.add('hidden')
        kirim.textContent = "Lanjut";
        hasil.textContent = 'Benar'
        skor++
        skorUI.textContent = skor
        if(nomorPertanyaan+1 == pertanyaan.length){
           setTimeout(()=>{
               tampilPesan('Anda Menang',skor,pertanyaan,nomorPertanyaan)
           },0)
   
           
                 
        }else{
            nomorPertanyaan++
        }
        
    }
    else if(koljawaban.value == ''){
        hasil.textContent = 'Isi kolom jawaban';
    }
    else{
        hasil.textContent = 'Salah'
        skor--
        skorUI.textContent = skor
        if(skor < 0){
  
           tampilPesan('Anda Kalah',skor,pertanyaan,nomorPertanyaan);
          
        }
        
    }
    progress.textContent = `Soal terjawab : ${nomorPertanyaan}/${pertanyaan.length}`
    koljawaban.value = '';
})



toggleDark.addEventListener('click',function(){
  toggleDark.classList.toggle('translate-x-9.5');
  toggleDark.classList.toggle('bg-yellow-400');
  toggleDark.classList.toggle('bg-slate-400');
  toggleDarkDiv.classList.toggle('bg-yellow-200');
  toggleDarkDiv.classList.toggle('bg-slate-200');

  //ketika dark mode
body.classList.toggle('light-mode');
body.classList.toggle('bg-slate-600');
game.classList.toggle('text-white');
game.classList.toggle('bg-white');
game.classList.toggle('bg-slate-500');


})