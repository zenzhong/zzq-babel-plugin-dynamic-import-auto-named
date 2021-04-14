/*
 * @Author: 小指
 * @Date: 2021-04-14 16:23:56
 * @LastEditTime: 2021-04-14 16:45:51
 * @LastEditors: 小指
 * @Description: 单元测试
 */
const babel6 = require('babel-core');
const babel7 = require('@babel/core');
const path = require('path');
const readFileSync = require('fs').readFileSync;
const expect = require('chai').expect;

function replaceLineBreak(string) {
  return string.replace(/\r\n|\n/gi, '');
}

function readFile(filepath) {
  return readFileSync(path.join(__dirname, filepath), 'utf8');
}

describe('zzq-babel-plugin-dynamic-import-auto-named', () => {
  it('babel6: 转换后的代码应该和期望获得的代码一致', () => {
    const actual = readFile('babel6.actual.code.js');
    const expected = readFile('babel6.expected.code.js');
    const result = babel6.transform(actual, {
      plugins: [
        './lib/index.js',
        'babel-plugin-syntax-dynamic-import',
      ],
    });
    expect(replaceLineBreak(result.code)).to.equal(replaceLineBreak(expected));
  });

  it('babel7: 转换后的代码应该和期望获得的代码一致', () => {
    const actual = readFile('babel7.actual.code.js');
    const expected = readFile('babel7.expected.code.js');
    const result = babel7.transform(actual, {
      plugins: [
        './lib/index.js',
        '@babel/plugin-syntax-dynamic-import',
      ],
    });
    expect(replaceLineBreak(result.code)).to.equal(replaceLineBreak(expected));
  });
});
