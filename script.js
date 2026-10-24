const button = document.getElementById("generateBtn")
button.addEventListener("click", function(){
    const name= document.getElementById("plushieName").value;
    document.getElementById("result").textContent = "恭喜!"+ name +"已經被領養了!";
    document.getElementById("certName").textContent =name || "尚未填寫";

    const owner = document.getElementById("ownerName").value;
    const birthday = document.getElementById("birthday").value;
    const adoptionDate = document.getElementById("adoptionDate").value;
    const personality = document.getElementById("personality").value;
    const food = document.getElementById("favoriteFood").value;

    document.getElementById("certOwner").textContent = owner || "尚未填寫";
    document.getElementById("certBirthday").textContent = birthday || "尚未填寫";
    document.getElementById("certDate").textContent = adoptionDate || "尚未填寫";
    document.getElementById("certPersonality").textContent = personality || "尚未填寫";
    document.getElementById("certFood").textContent = food || "尚未填寫";
    });
const photoInput = document.getElementById("photo");
const certPhoto = document.getElementById("certPhoto");
photoInput.addEventListener("change", function(){
    const file = photoInput.files[0]
    if(!file) {
        certPhoto.removeAttribute("src");
        certPhoto.hidden = true;
        return;
    }
    if(!["image/jpeg","image/png","image/webp"].includes(file.type)){
        alert("請選擇圖片!");
        photoInput.value = "";
        certPhoto.removeAttribute("src");
        certPhoto.hidden = true;
        return;
    }
    const reader = new FileReader();
    reader.onload = function(){
        certPhoto.src = reader.result;
        certPhoto.hidden = false;
    };
    reader.readAsDataURL(file);
});
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function(){
    const certificate = document.querySelector(".certificate");

    html2canvas(certificate, {
        scale: 2,
        backgroundColor: "#FFFFFF"
    }).then(function(canvas){
        const link = document.createElement("a");
        link.download = "娃娃領養證書.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
