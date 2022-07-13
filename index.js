/**
 * Bài 1
 * INPUT: nhập điểm của 3 môn học, điểm chuẩn, vùng ưu tiên, đối tượng ưu tiên
 * FROCESS:
 *          - Lấy giá trị điểm của 3 môn học
 *          - Tính tổng điểm = điểm moon + điểm môn 2 + điểm môn 3 + điểm ưu tiên vùng(nếu có) + điểm ưu tiên đối tượng(nếu có)
 *          - So sánh kết quả tổng điểm với điểm chuẩn:
 *              + Nều tổng điểm >= điểm chuẩn log ra chúc mừng bạn đã đậu
 *              + Nếu tổng điểm <= điểm chuẩn log ra chia buồn bạn đã rớt
 * OUTPUT: Kết quả thi
 */


function calculare(subject1,subject2,subject3,area,beneficiary){
    // var subject1 = 5;
    // var subject2 = 8;
    // var subject3 = 9;
    // var area = "A";
    var areaPoint = 0;
    // var beneficiary = "1";
    var beneficiaryPoint = 0;
    var total = 0;
    var matchPoint = 28;

    console.log("Điểm môn 1:",subject1);
    console.log("Điểm môn 2:",subject2);
    console.log("Điểm môn 3:",subject3);


    
    if(area === "A"){
        areaPoint = 2;
        console.log("Điểm ưu tiên theo khu vực:", areaPoint);
    } else if(area === "B"){
        areaPoint = 1.5;
        console.log("Điểm ưu tiên theo khu vực:", areaPoint);
    } else if(area === "C"){
        areaPoint = 0.5;
        console.log("Điểm ưu tiên theo khu vực:", areaPoint);
    }
    else if(area === "X"){
        areaPoint = 0;
        beneficiaryPoint =0;
        console.log("Điểm ưu tiên theo khu vực:", areaPoint);
    }


    if(beneficiary === "1"){
        beneficiaryPoint = 2.5;
        console.log("Điểm ưu tiên theo đối tượng:",beneficiaryPoint)
    } else if(beneficiary === "2"){
        beneficiaryPoint = 1.5;
        console.log("Điểm ưu tiên theo đối tượng:",beneficiaryPoint)
    } else if(beneficiary === "3"){
        beneficiaryPoint = 1;
        console.log("Điểm ưu tiên theo đối tượng:",beneficiaryPoint)
    } else if(beneficiary === "0"){
        beneficiaryPoint = 0;
        console.log("Điểm ưu tiên theo đối tượng:",beneficiaryPoint)
    }
    

    total = subject1 + subject2 + subject3 + areaPoint + beneficiaryPoint;
    console.log("Tổng điểm:", total);

    if(total >= matchPoint){
        console.log("Kết quả thi: Chúc mừng bạn đã đậu")
   } else {
       console.log("Kết quả thi: Chia buồn bạn đã rớt")
   }
    
    return total;
    

}
calculare(9,10,9,"A","1")







/**
 * Bài 2
 * INPUT: Nhập tên người dùng, số chữ điện đã dùng
 * PROCESS:
 *          - lấy giá trị tên người dùng(harcode), số chữ điện
 *          - Tính tiền điện phải trả:
 *              + Nếu số chữ điện đã dùng <= 50:
 *                  Tiền điện = số chữ điện đã dùng*500
 *                  log ra tiền điện
 *              + Nếu số chữ điện > 50 và số chữ điện <= 100:
 *                  Tiền điện = 50*500 +(số chữ điện -50)*650
 *                  Log ra tiền điện
 *              + Nếu số chữ điện > 100 và số chữ điện <=200:
 *                  Tiền điện = 50*(500 + 650) + (số chữ điện - 100)*850
 *                  log ra tiền điện
 *              + Nếu số chữ điện > 200 và số chữ điện <= 350:
 *                  Tiền điện = 50*(500 + 650 + 850) + (số chữ điện -200)*1100
 *                  log ra tiền điện
 *              + Nếu số chữ điện > 350:
 *                  Tiền điện = 50*(500 + 650 +850 +1100) + (số chữ điện - 350)*1300
 *                  Log ra tiền điện
 * OUTPUT: Tiền điện là:
 * 
 */










function electricPaymment(electricNumber){
    var name1 ="A";
    // var electricNumber = 400;
    var bill = 0;
    if(electricNumber <= 50){
        bill = electricNumber*500;
        console.log("Tiền điện là:", bill);
    } else if(electricNumber > 50 && electricNumber <= 100){
        bill = 50*500 +(electricNumber-50)*650;
        console.log("Tiền điện là:", bill);
    } else if(electricNumber > 100 && electricNumber <= 200){
        bill = 50*(500+650) + (electricNumber-100)*850;
        console.log("Tiền điện là:", bill);
    } else if(electricNumber > 200 && electricNumber <= 350){
        bill = 50*(500+650+850) + (electricNumber-200)*1100;
        console.log("Tiền điện là:", bill);
    } else{
        bill = 50*(500+650+850+1100) + (electricNumber-350)*1300;
        console.log("Tiền điện của",name1 ,"là:" , bill);
    }
}

electricPaymment(500)