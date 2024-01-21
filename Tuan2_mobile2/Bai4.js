"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToaDo = void 0;
var ToaDo = /** @class */ (function () {
    function ToaDo() {
        this.x = 0;
        this.y = 0;
    }
    return ToaDo;
}());
exports.ToaDo = ToaDo;
var HinhTron = /** @class */ (function () {
    function HinhTron(toaDo, banKinh) {
        this.toaDo = toaDo;
        this.banKinh = banKinh;
    }
    HinhTron.prototype.tinhDienTich = function () {
        return Math.PI * Math.pow(this.banKinh, 2);
    };
    HinhTron.prototype.tinhChuVi = function () {
        return 2 * Math.PI * this.banKinh;
    };
    return HinhTron;
}());
// Tạo ra một đối tượng ToaDo có tên "O" và tọa độ (0, 0)
var toaDo = new ToaDo();
// Tạo ra một đối tượng HinhTron với tâm ở đối tượng ToaDo trên và bán kính 10.5
var hinhTron = new HinhTron(toaDo, 10.5);
// Tính và hiển thị chu vi và diện tích của hình tròn
console.log("H\u00ECnh tr\u00F2n c\u00F3 t\u00E2m (".concat(toaDo.x, ", ").concat(toaDo.y, ") v\u1EDBi b\u00E1n k\u00EDnh ").concat(hinhTron.banKinh, " c\u00F3 di\u1EC7n t\u00EDch v\u00E0 chu vi l\u1EA7n l\u01B0\u1EE3t l\u00E0 ").concat(hinhTron.tinhDienTich(), " v\u00E0 ").concat(hinhTron.tinhChuVi(), "."));
