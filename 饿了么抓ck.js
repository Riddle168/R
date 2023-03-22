//#host:.*
//#order:199

__context.continue()
let cookie = __context.request().header('cookie');
if (!cookie || cookie.indexOf('cookie2') === -1) {
    return
}
//SID=xxxx;cookie2=xxxxx;USERID=xxxxx;
let ckObj = cookie.split(";").map(s => s.split("="))
    .reduce((obj, arr) => (obj[(arr[0] + "").trim()] = (arr[1] + "").trim(), obj), {})
let SID = ckObj.SID;
let cookie2 = ckObj.cookie2;
let USERID = ckObj.USERID;
let _tb_token_ = ckObj._tb_token_;
const key = SID + cookie2 + USERID + _tb_token_;
if (SID && cookie2 && USERID && _tb_token_) {
    let oldCookie = __context.globalGet(key) || "";
    //没有这个wskey或者已更新
    let prefix = "设置中";
    let setting = prefix + Math.random();
    if (SID && cookie2 && USERID && _tb_token_ && !oldCookie.startsWith(prefix) && cookie2 !== oldCookie) {
        __context.globalSet(key, setting);
        let lockValue = __context.globalGet(key);
        if (setting === lockValue) {
            __context.globalSet(key, cookie2);
            let ok = false
            try {
                doSend(key, SID, cookie2, USERID, _tb_token_)
            } finally {
                if (!ok) {
                    __context.globalSet(key, null);
                }
            }
        }
    }
}

function doSend(key, SID, cookie2, USERID, _tb_token_) {
    const config = require("./lib/config")
    sendQinglong(config, key, SID, cookie2, USERID, _tb_token_) 
    sendTgBot(config, key, SID, cookie2, USERID, _tb_token_) ||
    sendOther(config, key, SID, cookie2, USERID, _tb_token_)
}

function sendOther(key, SID, cookie2, USERID, _tb_token_) {
    console.log(`无青龙配置(lib/config.js),也没有tgbot配置,需要用户手动复制`)
}


function sendTgBot(config, key, SID, cookie2, USERID, _tb_token_) {
    if (config.tgBotToken && config.tgBotSendToId) {
        console.log(`无青龙配置(lib/config.js),正在发送到tg`)
        __utils.request({
                url: `${config.tgBotBaseUrl || 'https://api.telegram.org'}/bot${config.tgBotToken}/sendMessage?chat_id=${config.tgBotSendToId}&text=${encodeURIComponent("代理获取到elmck: " + "SID=" + SID + ";cookie2=" + cookie2 + ";USERID=" + USERID + ";_tb_token_=" + _tb_token_ + ";")}`,
                method: "post",
            }, (err, info, body) =>
                console.log("发送到tg完成,结果为:", body, err)
        )
        return true
    }
}


function sendQinglong(config, key, SID, cookie2, USERID, _tb_token_) {
    if (config.qinglongBaseUrl && config.clientId && config.clientSecret) {
        console.log(`获取到elmck: ${USERID},尝试添加到青龙: ${config.qinglongBaseUrl}`)
        const ql = require("./lib/qinlong")
        let token = __context.globalGet("qinglongToken")
        if (!token || !token.token) {
            token = ql.login(config.qinglongBaseUrl, config.clientId, config.clientSecret)
            __context.globalSet("qinglongToken", token)
        }
        let envs = ql.getEnvs(token, USERID)
        let env = envs.filter(e => e.name === 'elmck').filter(e => e.value.includes(USERID))[0]
        //修改
//SID=xxxx;cookie2=xxxxx;USERID=xxxxx;
        let v = "SID=" + SID + ";cookie2=" + cookie2 + ";USERID=" + USERID + ";_tb_token_=" + _tb_token_ + ";";
        if (env) {
            env.value = v
            ql.updateEnvById(token, env.id, env)
            console.log(`已更新: ${USERID}`)
        }
        //新增
        else {
            ql.addEnvs(token, [{
                "value": v,
                "name": "elmck",
                "remarks": "自动-" + new Date().getTime()
            }])
            console.log(`已添加: ${USERID}`)
        }
        if (config.tgBotToken && config.tgBotSendToId) {
            let options = {
                url: `${config.tgBotBaseUrl || 'https://api.telegram.org'}/bot${config.tgBotToken}/sendMessage?chat_id=${config.tgBotSendToId}&text=${"代理获取到elmck:" + USERID + ",已添加到青龙"}`,
                method: "post",
            };
            __utils.request(options, (err, info, body) => console.log("tgbot发送消息结果", err, info, body))
        }
        return true
    }
}
