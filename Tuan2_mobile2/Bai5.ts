export class HocVien {
    hoTen: string;
    namSinh: number;
    diemMon1: number;
    diemMon2: number;
    diemMon3: number;
    diemMon4: number;
    diemMon5: number;

    constructor(hoTen: string, namSinh: number, diemMon1: number, diemMon2: number, diemMon3: number, diemMon4: number, diemMon5: number) {
        this.hoTen = hoTen;
        this.namSinh = namSinh;
        this.diemMon1 = diemMon1;
        this.diemMon2 = diemMon2;
        this.diemMon3 = diemMon3;
        this.diemMon4 = diemMon4;
        this.diemMon5 = diemMon5;
    }

    tinhDiemTrungBinh(): number {
        return (this.diemMon1 + this.diemMon2 + this.diemMon3 + this.diemMon4 + this.diemMon5) / 5;
    }

    coLuậnVăn(): boolean {
        return this.tinhDiemTrungBinh() > 7 && this.diemMon1 >= 5 && this.diemMon2 >= 5 && this.diemMon3 >= 5 && this.diemMon4 >= 5 && this.diemMon5 >= 5;
    }

    thiTotNghiep(): boolean {
        return this.tinhDiemTrungBinh() <= 7 && this.diemMon1 >= 5 && this.diemMon2 >= 5 && this.diemMon3 >= 5 && this.diemMon4 >= 5 && this.diemMon5 >= 5;
    }

    canThiLai(): boolean {
        return this.diemMon1 < 5 || this.diemMon2 < 5 || this.diemMon3 < 5 || this.diemMon4 < 5 || this.diemMon5 < 5;
    }
}

// Sử dụng lớp HocVien
let hocVien1 = new HocVien("Nguyen Van A", 2000, 8, 7, 6, 8, 9);
let hocVien2 = new HocVien("Tran Thi B", 2001, 6, 5, 7, 6, 8);

console.log(hocVien1.coLuậnVăn()); // true
console.log(hocVien2.thiTotNghiep()); // false
console.log(hocVien2.canThiLai()); // true
