import {
    get
} from "./request";

function getUserInfo(successBack, next) {
    dd.ready(function () {
        dd.runtime.permission.requestAuthCode({
            corpId: "ding8cca6b4b2a8973a435c2f4657eb6378f",
            onSuccess: codeInfo => {
                get("/jc/ding/getUserId", {
                        code: codeInfo.code
                    }).then(access_tokenInfo => {
                        successBack(access_tokenInfo.dataMap, next)
                    })
                    .catch(err => alert(JSON.stringify(err)))
            },
            onFail: err => alert(JSON.stringify(err))
        })
    });
}
export default getUserInfo;
