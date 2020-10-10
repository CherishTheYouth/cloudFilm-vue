/*
 * @Author: yongbo.zeng
 * @Date: 2020-09-29 15:56:13
 * @LastEditTime: 2020-09-29 16:03:00
 * @LastEditors: Please set LastEditors
 * @Description: 验证jtest是否正常工作
 * @FilePath: \cloudFilm-vue\cloud-film-vue\test\hello.test.js
 */
const returnHelloWorld = () => {
    return 'hello world'
}
test('输出hello world ', () => {
    expect(returnHelloWorld()).toBe('hello world')
})
