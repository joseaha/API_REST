"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _connection = _interopRequireDefault(require("./database/connection"));
_app["default"].listen(_app["default"].get('port'));
console.log('Servidor inicializado en port ' + _app["default"].get('port'));