let StringsCommons: ResourceStringCommon;
let getStringsRef = null;

// Cần gọi hàm này lúc khởi tạo ứng dụng
export function setStringsRef(getStringsFunction) {
    getStringsRef = getStringsFunction;
}

export interface ResourceStringCommon {
    Ok?: string
    Cancel?: string
    has_error?: string
    review_description?: string
    yes_sure?: string
    remind_me_late?: string
    Yes?: string
    No?: string
    CLOSE_X?: string
    loading_?: string
    Install_now?: string,
    not_empty?: string,
    need_external_module?: string,
    Anonymous?: string,
    Click_nangcap?: string
    Click_dang_nhap_dong_bo?: string
    Other_app?: string
    msg_share?: string
    downloaded_dialog_title?: string,
    downloaded_dialog_mes?: string
    confirm_delete_data?: string
    success_need_restart?: string
    Ung_dung_hay?: string,
    xem_video_nhan_gold?: string
    quang_cao_not_avail?: string
    Dung?: string
    Sai?: string
    LUYEN_TAP?: string
    kem_10_vang?: string
    gold?: string
    success?: string
    Nang_cap_ngay?: string
    dong_bo_ngay?: string
    dong_bo_tai_khoan_msg?: string
    dang_dong_do?: string
    nang_cap_vip?: string
    dong_bo_tai_khoan?: string
    SUBMIT?: string
    Next?: string
    search?: string
    Nghe_lai?:string
    Ghi_am?:string
    Stop?:string
    tap_to_speak?:string
    dang_thu_am_noi?: string
    confirmQuitDes?:string
    Thong_tin_ve_tu?:string
}

// let strs:ResourceString = {}
function loadStringCommonResource() {
    if (StringsCommons == null) {
        StringsCommons = {
            Ok: "OK",
            Cancel: "CANCEL",
            Yes: "Yes",
            No: "No",
            CLOSE_X: "CLOSE (X)",
            loading_: "loading..",
            has_error: "An error occurred. Please check your internet connection and try again!",
            review_description: "If you enjoy using the App, would you mind taking a moment to rate it? It won't take more than a minute.\nThanks for your support!",
            yes_sure: "Yes, sure !",
            remind_me_late: "Remind Later",
            not_empty: "Can not be empty",
            Install_now: "Install Now",
            need_external_module: "Function needs external module, please install it first.",
            Anonymous: "Anonymous",
            confirmQuitDes: "Are you sure want to quit?",
            search: "search"
        };
    }
}

export function getStringsCommon(): ResourceStringCommon {
    if (getStringsRef != null) return getStringsRef();
    console.log("ERROR: ===== getStringsCommon Not Reference ====");
    loadStringCommonResource();
    return StringsCommons;
}
