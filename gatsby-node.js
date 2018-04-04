'use strict';

module.exports = {
  modifyBabelrc: ({babelrc}) => Object.assign(
    {},
    babelrc,
    {presets: babelrc.presets.concat(['flow'])}
  )
};
