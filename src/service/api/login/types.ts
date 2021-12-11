/*
 * @Author: MarioGo
 * @Date: 2021-12-08 14:01:27
 * @LastEditTime: 2021-12-08 14:04:15
 * @LastEditors: MarioGo
 * @Description: 文件描述
 * @FilePath: /vite_vue3_ts/src/service/api/login/type.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
export interface ILoginParams {
  userName: string;
  passWord: string | number;
}
export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>;
}
