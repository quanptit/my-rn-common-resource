let colorRef;
let colorsCommon: ColorsCommon;

/**
 * Enum Color của main project phải có 3 thuộc tính này
 */
export interface ColorsCommon {
    primaryColor: string
    primaryDaskColor: string
    bgMain: string,
}

/**
 * Tham chiếu đến cái Enum Color của main project.
 * */
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
