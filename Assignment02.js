function BMI (){
    var tienvay = document.getElementById("tienvay").value;
    var thoigianvay = document.getElementById("thoigianvay").value;
    var laiSuat = document.getElementById("laiSuat").value;

    var laiSuatPhanTram = laiSuat / 100
    var soTienGocConLai = tienvay;

   for(var i = 0; i < thoigianvay; i++){
    var SoTienGocPhaiTra = Math.round(tienvay / thoigianvay)
    var soTienGocConLai =  soTienGocConLai  - SoTienGocPhaiTra
    var SoTienLaiCanPhaiTra = Math.round(soTienGocConLai * laiSuatPhanTram / 12)
    var soTienPhaiTraHangThang = Math.round(SoTienLaiCanPhaiTra + SoTienGocPhaiTra)
    n=i+1
    var thoigiantra = new Date();
    thoigiantra.setMonth(thoigiantra.getMonth() +n);
   
    if (n>1) {
        alert("Trong tháng thứ "+n+"\nSố gốc còn lại là: " + soTienGocConLai + "\nSố gốc phải trả là: " + SoTienGocPhaiTra +"\nTiền lãi phải trả hàng tháng là : " + SoTienLaiCanPhaiTra +"\nSố tiền phải trả trong tháng nay là: " + soTienPhaiTraHangThang + "\nThời hạn trả: "+ thoigiantra.toLocaleString())
    } else { 
        alert("Trong tháng đầu tiên"+"\nSố gốc còn lại là: " + soTienGocConLai + "\nSố gốc phải trả là: " + SoTienGocPhaiTra +"\nTiền lãi phải trả hàng tháng là : " + SoTienLaiCanPhaiTra +"\nSố tiền phải trả trong tháng nay là: " + soTienPhaiTraHangThang + "\nThời hạn trả: "+ thoigiantra.toLocaleString())
    }
    document.write("Tháng thứ "+ n +"<br>Số gốc còn lại là: " + soTienGocConLai + "<br>Số gốc phải trả là: " + SoTienGocPhaiTra +"<br>Tiền lãi phải trả hàng tháng là : " + SoTienLaiCanPhaiTra +"<br>Số tiền phải trả trong tháng nay là: " + soTienPhaiTraHangThang + "<br>Thời hạn trả: "+ thoigiantra.toLocaleString() + "<br>" + "<br>");
}
}