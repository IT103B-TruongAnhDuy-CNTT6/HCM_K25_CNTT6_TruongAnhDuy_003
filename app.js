let currentOrderCode = "";
let isOrderValid = false;
let totalRevenue = 0;
let totalOrders = 0;
while (true) {
  console.log("\n");
  console.log("=".repeat(50));
  console.log("      HỆ THỐNG THANH TOÁN NHÀ SÁCH TRI THỨC");
  console.log("=".repeat(50));
  console.log("1. Nhập và kiểm chuẩn mã đơn hàng");
  console.log("2. Tính tiền đơn sách");
  console.log("3. Thẩm định mã hóa đơn may mắn");
  console.log("0. Thoát chương trình");
  console.log("=".repeat(50));
  let choice = prompt("Vui lòng nhập lựa chọn của bạn (0-3): ").trim();
  switch (choice) {
    case "1":
      while (true) {
        currentOrderCode = prompt("Nhập mã đơn hàng: ").trim().toUpperCase();
        if (!currentOrderCode) {
          console.log("Chưa nhập mã đơn hàng");
          break;
        }
        if (
          currentOrderCode.length >= 6 &&
          currentOrderCode.startsWith("BOK-") &&
          !currentOrderCode.includes(" ")
        ) {
          isOrderValid = true;
          console.log("Mã đơn hàng hợp lệ!");
          break;
        } else {
          console.log("Mã đơn hàng không hợp lệ!");
        }
      }
      break;

    case "2":
      if (!isOrderValid) {
        console.log("Chưa có mã đơn hàng! Quay lại case 1");
        break;
      }
      let bookCount = Number.parseInt(prompt("Nhập số lượng sách: ").trim());
      let pricePerBook = Number.parseInt(
        prompt("Nhập giá tiền mỗi cuốn sách: ").trim(),
      );
      let basePrice = bookCount * pricePerBook;
      let discount = 0;
      if (bookCount >= 4) {
        discount = basePrice * 0.1;
      }
      let packageFee = (basePrice - discount) * 0.08;
      let totalPayment = Math.round(basePrice - discount + packageFee);
      totalRevenue += totalPayment;
      totalOrders++;
      currentOrderCode = "";
      isOrderValid = false;
      console.log("=".repeat(50));
      console.log("HÓA ĐƠN THANH TOÁN");
      console.log("=".repeat(50));
      console.log("Mã đơn hàng: " + currentOrderCode);
      console.log("Số cuốn sách: " + bookCount);
      console.log(
        "Giá mỗi cuốn: " + pricePerBook.toLocaleString("vi-VN") + " VNĐ",
      );
      console.log(
        "Chi phí cơ sở: " + basePrice.toLocaleString("vi-VN") + " VNĐ",
      );
      console.log(
        "Tiền giảm giá: " + discount.toLocaleString("vi-VN") + " VNĐ",
      );
      console.log(
        "Phí bọc sách và đóng gói: " +
          packageFee.toLocaleString("vi-VN") +
          " VNĐ",
      );
      console.log(
        "Tổng thanh toán: " + totalPayment.toLocaleString("vi-VN") + " VNĐ",
      );
      console.log("=".repeat(50));
      break;

    case "3":
      let luckyNumber = prompt("Nhập chuỗi số in trên hóa đơn: ").trim();
      let reverseNumber = "";
      let digitSum = 0;
      for (let i = luckyNumber.length - 1; i >= 0; i--) {
        reverseNumber += luckyNumber[i];
      }
      for (let i = 0; i < luckyNumber.length; i++) {
        digitSum += Number.parseInt(luckyNumber[i]);
      }
      if (reverseNumber === luckyNumber && digitSum % 9 === 0) {
        console.log(`Mã số gốc: ${luckyNumber}
Mã đảo ngược: ${reverseNumber}
Tổng chữ số: ${digitSum}
Chia hết cho 9: Có
Giải thưởng: Giải Đặc Biệt`);
      } else if (reverseNumber === luckyNumber) {
        console.log(`Mã số gốc: ${luckyNumber}
Mã đảo ngược: ${reverseNumber}
Tổng chữ số: ${digitSum}
Chia hết cho 9: Không
Giải thưởng: Giải Nhất`);
      } else if (digitSum % 9 === 0) {
        console.log(`Mã số gốc: ${luckyNumber}
Mã đảo ngược: ${reverseNumber}
Tổng chữ số: ${digitSum}
Chia hết cho 9: Có
Giải thưởng: Giải Nhì`);
      } else {
        console.log("Không trúng thưởng");
      }
      break;

    case "0":
      console.log("Cảm ơn bạn đã sử dụng chương trình!");
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
  }
  if (choice === "0") {
    break;
  }
}
// HCM_K25_CNTT6_TruongAnhDuy_003
