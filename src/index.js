/*
 * @Author: 小指
 * @Date: 2021-04-14 16:04:44
 * @LastEditTime: 2021-04-14 16:08:20
 * @LastEditors: 小指
 * @Description: 入口文件
 */
module.exports = function ({ types: t }) {
  const getWebpackChunkName = function (name, options = {}) {
    const { connector = '_' } = options;
    const paths = name
      .split('/')
      .filter((val) => !(val === '.' || val === '..'))
      .map((val) => val.replace(/\./g, connector));

    return paths.join(connector);
  };

  return {
    visitor: {
      CallExpression: function (path, state) {
        const { opts = {} } = state;
        const { node } = path;
        if (t.isImport(node.callee)) {
          const component = node.arguments[0];

          if (!component.leadingComments) {
            component.leadingComments = [
              {
                type: 'CommentBlock',
                value: `webpackChunkName: "${getWebpackChunkName(
                  component.value,
                  opts
                )}"`,
              },
            ];

            path.replaceWith(
              t.CallExpression(t.identifier('import'), [component])
            );
          }
        }
      },
    },
  };
};
