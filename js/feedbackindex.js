var review = [
    {name:"Sarah Aulia", 
    star:"5", 
    comment:" Layanan di rumah sakit ini sangat luar biasa! Para stafnya sangat ramah dan perhatian. Saya merasa sangat nyaman selama kunjungan saya dan merasa bahwa saya mendapatkan perawatan yang sangat baik. Terima kasih banyak!"},
    
    {name:"Brian Agusta", 
    star:"5", 
    comment:" Pelayanan rumah sakit sangat baik, dokternya juga sabar ditambah fasilitas yang sangat menunjang."},
    
    {name:"Fitriani", 
    star:"4", 
    comment:"Selama berkunjung dan konsultasi di rumah sakit ini saya merasa nyaman karena ditunjang oleh fasilitas yang lengkap serta dokter yang sabar tetapi mungkin dari sisi staf perlu lebih ramah lagi"},
    
    {name:"Michael Tan", 
    star:"4", 
    comment:" Saya merasa puas dengan pengalaman saya di rumah sakit ini. Meskipun ada beberapa waktu tunggu yang cukup lama, dokter dan perawatnya sangat kompeten dan memberikan perhatian yang baik pada pasien."},
    
    {name:"Lisa Rahma", 
    star:"4", 
    comment:"Pelayanan medis yang diberikan di rumah sakit ini sangat profesional. Namun, saya harap mereka dapat memperbaiki sistem antrian agar waktu tunggu pasien lebih singkat. Selain itu, semuanya berjalan dengan baik."},
    
    {name:"David Maulana", 
    star:"4", 
    comment:"Saya senang dengan perawatan yang saya terima di rumah sakit ini. Stafnya sangat ramah dan perawatnya sangat ahli. Hanya saja, fasilitasnya bisa diperbarui untuk lebih nyaman."},
    
    {name:"Emma Yulia", 
    star:"3", 
    comment:" Saya memberikan peringkat tiga karena saya merasa pelayanan di sini masih cukup baik, tetapi ada beberapa kekurangan. Waktu tunggu yang cukup lama dan beberapa kesalahan administrasi kecil. Saya harap mereka dapat meningkatkan layanan mereka."},
    
    {name:"Aldo Renaldi", 
    star:"2", 
    comment:" Pengalaman saya di rumah sakit ini sangat buruk. Saya merasa diabaikan oleh staf dan terkesan kuran menghargai pengunjung. Saya cukup kecewa."},
    
    {name:"Ayu Sulistyawati", 
    star:"2", 
    comment:" Saya merasa sangat marah dengan pengalaman saya di rumah sakit ini. Pelayanan kurang responsif dan dokternya tidak komunikatif."},
    
    {name:"Kevin Agustian", 
    star:"2", 
    comment:" Rumah sakit ini memiliki fasilitas yang cukup baik, tetapi pelayanannya kurang baik. Saya merasa kurang dihargai sebagai pasien oleh staf."},
    
    {name:"Dina Anggraini ", 
    star:"1", 
    comment:" Saya sangat kecewa dengan layanan rumah sakit ini. Tidak hanya pelayanan staff buruk, tetapi juga dokternya tidak komunikatif."
}];

var arrayGoodReview = [];
var arrayBadReview = [];

review.forEach(function(item) {
    var star = parseInt(item.star);
    
    if (star === 4 || star === 5) {
        arrayGoodReview.push(item);
    } else if (star === 3 || star === 2 || star === 1) {
        arrayBadReview.push(item);
    }
});

var count = 0;
while (count<3) {
    var badreviewelement = document.createElement("div");
    badreviewelement.classList.add("bad-review");
    badreviewelement.innerHTML = ``

    var badreviewelementname = document.createElement("h3");
    badreviewelementname.innerText = arrayBadReview[count].name;

    var starbox = document.createElement("div");
    starbox.classList.add("bad-review-starbox")
    var starnumber = parseInt(arrayBadReview[count].star);
    var greystarnumber = 5-starnumber;

    for (var i = 0; i<starnumber; i++) {
        var star = document.createElement("img");
        star.src = "./image/icon/star.png"
        starbox.appendChild(star);
    }
    
    for (var i = 0; i<greystarnumber; i++) {
        var star = document.createElement("img");
        star.src = "./image/icon/star.png"
        star.style.filter = "grayscale(100%)"
        starbox.appendChild(star);
    }

    var commentsbad = document.createElement("p");
    commentsbad.innerText = arrayBadReview[count].comment

    badreviewelement.appendChild(badreviewelementname);
    badreviewelement.appendChild(starbox);
    badreviewelement.appendChild(commentsbad);

    document.getElementById("badreviewc").appendChild(badreviewelement);
    count++
}

var goodreviewposition = 0;
var goodreviewparse = 3;

var goodreviewlength = arrayGoodReview.length
var maxclck = (goodreviewlength - goodreviewlength % 3)/3
var fclick = 0

function addGoodReview() {
    if (fclick<maxclck) {
        fclick = fclick+1
    } else {
        alert("Maximum Comment Reached")
        return
    }
    var goodreviewcontaier = document.createElement("div");
    goodreviewcontaier.classList.add("good-review-container");

    while (goodreviewposition < goodreviewparse) {
        var goodreviewelement = document.createElement("div");
        goodreviewelement.classList.add("good-review");
        goodreviewelement.innerHTML = ``
    
        var goodreviewelementname = document.createElement("h3");
        goodreviewelementname.innerText = arrayGoodReview[goodreviewposition].name;
    
        var starbox = document.createElement("div");
        starbox.classList.add("good-review-starbox")
        var starnumber = parseInt(arrayGoodReview[goodreviewposition].star);
        var greystarnumber = 5-starnumber;
    
        for (var i = 0; i<starnumber; i++) {
            var star = document.createElement("img");
            star.src = "./image/icon/star.png"
            starbox.appendChild(star);
        }
        
        for (var i = 0; i<greystarnumber; i++) {
            var star = document.createElement("img");
            star.src = "./image/icon/star.png"
            star.style.filter = "grayscale(100%)"
            starbox.appendChild(star);
        }
    
        var commentsgood = document.createElement("p");
        commentsgood.innerText = arrayGoodReview[goodreviewposition].comment
    
        goodreviewelement.appendChild(goodreviewelementname);
        goodreviewelement.appendChild(starbox);
        goodreviewelement.appendChild(commentsgood);
    
        goodreviewcontaier.appendChild(goodreviewelement);

        goodreviewposition++
    }
    goodreviewparse = goodreviewparse+3
    document.getElementById("maingoodc").appendChild(goodreviewcontaier);
}

addGoodReview();