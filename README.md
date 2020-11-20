# 1. 安装
```shell
npm install -D jest ts-jest @types/jest typescript
```

# 2. jest.config.js
```typescript
module.exports = {
    roots: [
        "<rootDir>/"
    ],
    testRegex: '\\.test\\.(jsx?|tsx?)$',  // .test.[tsx?|jsx?]
    transform: {
        "^.+\\.tsx?$": "ts-jest"     // 转化 transform
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

```

# 3. vsCode
![](https://image-tuchang.oss-cn-beijing.aliyuncs.com/20201120104336.png)


# 4. 结果

写一个*sum.ts*
```typescript

export const sum = ( a: number, b: number ) => a + b;


```
对应写个测试文件*sum.test.ts*
```typescript
import { sum } from './sum'

test( "adds 1 + 2 to equal 3", () =>
{
    expect( sum( 1, 2 ) ).toBe( 3 );
} );

it("fail you test",()=>{
      expect(1).toEqual(1)
})
```


vscode 会自动执行
![](https://image-tuchang.oss-cn-beijing.aliyuncs.com/20201120104656.png)


可以在 npm中 加入 coverage 
```
  "scripts": {
    "test": "jest",
    "coverage":"jest --coverage"
  },
```

运行后会自动生成coverage报表

![](https://image-tuchang.oss-cn-beijing.aliyuncs.com/20201120105723.png)

打开看下

![](https://image-tuchang.oss-cn-beijing.aliyuncs.com/20201120105817.png)

![](https://image-tuchang.oss-cn-beijing.aliyuncs.com/20201120105839.png)
能标记出 哪些代码已经覆盖了， 哪些没有 /棒·