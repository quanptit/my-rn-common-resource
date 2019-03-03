let StringsCommons;
let getStringsRef = null;
// Cần gọi hàm này lúc khởi tạo ứng dụng
export function setStringsRef(getStringsFunction) {
    getStringsRef = getStringsFunction;
}
// let strs:ResourceString = {}
function loadStringResource() {
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
        };
    }
}
export function getStringsCommon() {
    if (getStringsRef != null)
        return getStringsRef();
    console.log("ERROR: ===== getStringsCommon Not Reference ====");
    loadStringResource();
    return StringsCommons;
}
