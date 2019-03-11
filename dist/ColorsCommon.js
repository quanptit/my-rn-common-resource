let colorRef;
let colorsCommon;
/**
 * Tham chiếu đến cái Enum Color của main project.
 * */
export function setColorRef(colors) {
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
export function getColorsCommon() {
    if (colorRef != null)
        return colorRef;
    loadColorsCommon();
    return colorsCommon;
}
