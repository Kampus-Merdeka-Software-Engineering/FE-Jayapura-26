const options = {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short"
};

var goodreviewposition = 0;
var goodreviewparse = 3;
var maxclck = 0;
var fclick = 0;

var review;
var arrayGoodReview = [];
var arrayBadReview = [];
fetch('https://be-jayapura-26-production.up.railway.app/home')
  .then(function(response) {
    if (!response.ok) {
        document.getElementById("fdbcktitle").style.display = "none";
        document.getElementById("titlebads").style.display = "none";
        throw new Error('Terjadi kesalahan dalam permintaan.');
    }
    return response.json();
  })
  .then(function(data) {
    review = data;
    arrayGoodReview = review["goodReview"];
    arrayBadReview = review["badReview"];
    maxclck = (arrayGoodReview.length - arrayGoodReview.length % 3)/3;
    addGoodReview();
    badrview();
  })
  .catch(function(error) {
    document.getElementById("fdbcktitle").style.display = "none";
    document.getElementById("titlebads").style.display = "none";
    document.getElementById("hidemorebutton").style.display = "none";
    document.getElementById("more-good-review-button").style.display = "none";
    console.error('Terjadi kesalahan:', error);
});

var count = 0;
function badrview() {
    if (arrayBadReview.length>=3) {
        while (count<3) {
            var badreviewelement = document.createElement("div");
            badreviewelement.classList.add("bad-review");
            badreviewelement.innerHTML = ``
        
            var badreviewelementname = document.createElement("h3");
            badreviewelementname.innerText = arrayBadReview[count].nama;

            var badreviewelementtime = document.createElement("h4");
            var badreviewewtime = new Date(arrayBadReview[count].updatedAt);
            var badformattedDate = badreviewewtime.toLocaleDateString("id-ID", options);
            badreviewelementtime.innerHTML = badformattedDate;
        
            var starbox = document.createElement("div");
            starbox.classList.add("bad-review-starbox")
            var starnumber = parseInt(arrayBadReview[count].penilaian);
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
            commentsbad.innerText = arrayBadReview[count].pengalaman
        
            badreviewelement.appendChild(badreviewelementname);
            badreviewelement.appendChild(badreviewelementtime);
            badreviewelement.appendChild(starbox);
            badreviewelement.appendChild(commentsbad);
        
            document.getElementById("badreviewc").appendChild(badreviewelement);
            count++
        }
    }
    else{
        alert("Kekurangan bad review")
    }
}


function addGoodReview() {
    if (fclick<maxclck) {
        fclick = fclick+1
    } else {
        alert("Maximum Comment Reached")
        document.getElementById("more-good-review-button").style.display = "none";
        return
    }
    var goodreviewcontaier = document.createElement("div");
    goodreviewcontaier.classList.add("good-review-container");

    while (goodreviewposition < goodreviewparse) {
        var goodreviewelement = document.createElement("div");
        goodreviewelement.classList.add("good-review");
        goodreviewelement.innerHTML = ``
    
        var goodreviewelementname = document.createElement("h3");
        goodreviewelementname.innerText = arrayGoodReview[goodreviewposition].nama;

        var goodreviewelementtime = document.createElement("h4");
        var goodreviewewtime = new Date(arrayGoodReview[goodreviewposition].updatedAt);
        var goodformattedDate = goodreviewewtime.toLocaleDateString("id-ID", options);
        goodreviewelementtime.innerHTML = goodformattedDate;
    
        var starbox = document.createElement("div");
        starbox.classList.add("good-review-starbox")
        var starnumber = parseInt(arrayGoodReview[goodreviewposition].penilaian);
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
        commentsgood.innerText = arrayGoodReview[goodreviewposition].pengalaman
    
        goodreviewelement.appendChild(goodreviewelementname);
        goodreviewelement.appendChild(goodreviewelementtime);
        goodreviewelement.appendChild(starbox);
        goodreviewelement.appendChild(commentsgood);
    
        goodreviewcontaier.appendChild(goodreviewelement);

        goodreviewposition++
    }
    goodreviewparse = goodreviewparse+3
    document.getElementById("maingoodc").appendChild(goodreviewcontaier);
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form-fdback");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var nama = document.getElementById("namainfd").value;
        var penilaian = document.querySelector('input[name="star-option"]:checked').value;
        var pengalaman = document.getElementById("comment").value;

        var feedbackData = {
            "nama": nama,
            "penilaian": penilaian,
            "pengalaman": pengalaman
        };
        var loading = document.getElementById("subloading");
        loading.style.display = "flex";
        fetch("https://be-jayapura-26-production.up.railway.app/home", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feedbackData)
        })
        .then(response => response.json())
        .then(data => {
            loading.style.display = "none";
            document.getElementById("submit-success").style.display = "flex";
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
            loading.style.display = "none";
            document.getElementById("submit-failed").style.display = "flex";
        });
    });
});

function subsucok() {
    document.getElementById("submit-success").style.display = "none";
    location.reload();
}

function subfailok() {
    document.getElementById("submit-failed").style.display = "none";
}

function moreReview() {
    document.getElementById("hidemorebutton").style.display = "block";
    addGoodReview();
}

function hideMore() {
    document.getElementById("hidemorebutton").style.display = "none";
    document.getElementById("maingoodc").innerHTML = "";
    document.getElementById("more-good-review-button").style.display = "block";
    fclick = 0;
    goodreviewposition = 0;
    goodreviewparse = 3;
    addGoodReview();
}
