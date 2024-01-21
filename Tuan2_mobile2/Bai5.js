"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HocVien = void 0;
var HocVien = /** @class */ (function () {
    function HocVien(hoTen, namSinh, diemMon1, diemMon2, diemMon3, diemMon4, diemMon5) {
        this.hoTen = hoTen;
        this.namSinh = namSinh;
        this.diemMon1 = diemMon1;
        this.diemMon2 = diemMon2;
        this.diemMon3 = diemMon3;
        this.diemMon4 = diemMon4;
        this.diemMon5 = diemMon5;
    }
    HocVien.prototype.tinhDiemTrungBinh = function () {
        return (this.diemMon1 + this.diemMon2 + this.diemMon3 + this.diemMon4 + this.diemMon5) / 5;
    };
    HocVien.prototype.coLuậnVăn = function () {
        return this.tinhDiemTrungBinh() > 7 && this.diemMon1 >= 5 && this.diemMon2 >= 5 && this.diemMon3 >= 5 && this.diemMon4 >= 5 && this.diemMon5 >= 5;
    };
    HocVien.prototype.thiTotNghiep = function () {
        return this.tinhDiemTrungBinh() <= 7 && this.diemMon1 >= 5 && this.diemMon2 >= 5 && this.diemMon3 >= 5 && this.diemMon4 >= 5 && this.diemMon5 >= 5;
    };
    HocVien.prototype.canThiLai = function () {
        return this.diemMon1 < 5 || this.diemMon2 < 5 || this.diemMon3 < 5 || this.diemMon4 < 5 || this.diemMon5 < 5;
    };
    return HocVien;
}());
exports.HocVien = HocVien;
// Sử dụng lớp HocVien
var hocVien1 = new HocVien("Nguyen Van A", 2000, 8, 7, 6, 8, 9);
var hocVien2 = new HocVien("Tran Thi B", 2001, 6, 5, 7, 6, 8);
console.log(hocVien1.coLuậnVăn()); // true
console.log(hocVien2.thiTotNghiep()); // false
console.log(hocVien2.canThiLai()); // true
