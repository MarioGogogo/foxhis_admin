/*
 * @Author: MarioGo
 * @Date: 2021-12-08 14:01:17
 * @LastEditTime: 2021-12-08 14:03:59
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vite_vue3_ts/src/service/api/login/login.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import http from "@/service/http";
import * as T from "./types";

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post("/login", params);
  },
};
export default loginApi;
