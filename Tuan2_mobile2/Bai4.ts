export class ToaDo {
    x: number;
    y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

class HinhTron {
    toaDo: ToaDo;
    banKinh: number;

    constructor(toaDo: ToaDo, banKinh: number) {
        this.toaDo = toaDo;
        this.banKinh = banKinh;
    }

    tinhDienTich(): number {
        return Math.PI * this.banKinh ** 2;
    }

    tinhChuVi(): number {
        return 2 * Math.PI * this.banKinh;
    }
}

// Tạo ra một đối tượng ToaDo có tên "O" và tọa độ (0, 0)
let toaDo: ToaDo = new ToaDo();

// Tạo ra một đối tượng HinhTron với tâm ở đối tượng ToaDo trên và bán kính 10.5
let hinhTron: HinhTron = new HinhTron(toaDo, 10.5);

// Tính và hiển thị chu vi và diện tích của hình tròn
console.log(`Hình tròn có tâm (${toaDo.x}, ${toaDo.y}) với bán kính ${hinhTron.banKinh} có diện tích và chu vi lần lượt là ${hinhTron.tinhDienTich()} và ${hinhTron.tinhChuVi()}.`);