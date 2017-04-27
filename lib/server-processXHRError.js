/**
 * Module : kero app serverEvent processXHRError
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2016-07-29 09:34:01
 */

/****
 * 通过去判断请求头来验证请求是否成功
 * @memberof ServerEvent
 * @param  {object} self  ServerEvent的this对象
 * @param  {object} rsl   请求返回的数据
 * @param  {object} state 描述状态的字符串
 * @param  {object} xhr   jqXHR对象
 */
var processXHRError = function processXHRError(self, rsl, state, xhr) {
    if (typeof rsl === 'string') rsl = JSON.parse(rsl);
    if (xhr.getResponseHeader && xhr.getResponseHeader("X-Error")) {
        if (self.orignError) self.orignError.call(self, rsl, state, xhr);else {
            if (u.showMessageDialog) u.showMessageDialog({ type: "info", title: "提示", msg: rsl["message"], backdrop: true });else alert(rsl["message"]);
            if (rsl["operate"]) {
                eval(rsl["operate"]);
            }
        }
        return false;
    }
    return true;
};

export { processXHRError };