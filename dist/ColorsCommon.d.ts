/**
 * Enum Color của main project phải có 3 thuộc tính này
 */
export interface ColorsCommon {
    primaryColor: string;
    primaryDaskColor: string;
    bgMain: string;
}
/**
 * Tham chiếu đến cái Enum Color của main project.
 * */
export declare function setColorRef(colors: any): void;
export declare function getColorsCommon(): ColorsCommon;
