// // tests/utils/sleep.test.ts
// import sleep from "utils/sleep";

// // 错误1
/**
 * 这里用了 Fake Timer，所以 setTimeout 会替换成了 Jest 的 setTimeout。
 * 执行 setTimeout(callback, 1000) 之后， Jest 的 Message Queue 里会推入一个当前 Promise 的 resolve 函数。
 * 走到第一个 expect 通过，再走到 jest.runAllTimers ，此时会同步地执行 Jest 中的 Message Queue 所有回调，也即同步执行了 resolve。
 * 由于 sleep 这个 Promise 被 resolved 了，会把 then 的回调放到 Promise Job Queue 里。
 * 但是此时，当前 Message 还没走完，会走到最后一个 expect。
 * 由于我们的 callback 一直在 Promise Job Queue 里， 所以当执行最后一个 expect 时，callback 一直没有被调用。最终测试用例不通过。
 */
// describe("sleep", () => {
//   beforeAll(() => {
//     jest.useFakeTimers();
//   });

//   it("可以睡眠 1000m", async () => {
//     const callback = jest.fn();

//     // const act = async () => {
//     //   await sleep(1000);
//     //   callback();
//     // };
//     // act()
//     sleep(1000).then(() => {
//       callback();
//     });
 

//     expect(callback).not.toHaveBeenCalled();

//     jest.runAllTimers();

//     expect(callback).toHaveBeenCalledTimes(1);
//   });
// });

// 错误2
/**
 * setTimeout 把 resolve 函数推入 Jest 的 Message Queue 这一步依然不变。
 * 但这里的 await act() 会把后面的所有代码（测试用例代码以及 jest-cli 的结束代码）都包裹在 then 的回调里。
 * 而由于在 sleep 里的 resolve 一直没调用，act 后面的所有代码代码一直没放到 Promise Job Queue 里， 导致最后结束测试的 jest-cli 代码也一直无法执行。
 * 最终测试用例超时失败。
 */


// describe('sleep', () => {
//   beforeAll(() => {
//     jest.useFakeTimers();
//   })

//   it('可以睡眠 1000ms', async () => {
//     const callback = jest.fn();

//     const act = async () => {
//       await sleep(1000)
//       callback();
//     }

//     await act()

//     expect(callback).not.toHaveBeenCalled();

//     jest.runAllTimers();

//     expect(callback).toHaveBeenCalledTimes(1);
//   })
// })