let colorRef;
let colorsCommon: ColorsCommon;

export interface ColorsCommon {
    primaryColor: string
    primaryDaskColor: string
    bgMain: string,
}

// Cần gọi hàm này lúc khởi tạo ứng dụng
export function setColorRef(colors: any) {
    colorRef = colors;
}

function loadColorsCommon() {
    if (colorsCommon == null)
        colorsCommon = {
            primaryColor: '#2196f3',
            primaryDaskColor: '#1875d1',
            bgMain: '#f7f7f7',
        };
}

export function getColorsCommon(): ColorsCommon {
    if (colorRef != null) return colorRef;
    loadColorsCommon();
    return colorsCommon;
}
