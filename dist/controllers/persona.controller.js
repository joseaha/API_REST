"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePersonaById = exports.getPersonas = exports.getPersonaById = exports.deletePersonaById = exports.addPersona = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index");
var getPersonas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, _result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _index.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_index.querys.getAllPersona);
        case 6:
          _result = _context.sent;
          console.log(_result);
          res.json(_result.recordset);
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(result.recordset);
          res.send(_context.t0.msg);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getPersonas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getPersonas = getPersonas;
var addPersona = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, ID, Nombre, Apellidos, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, ID = _req$body.ID, Nombre = _req$body.Nombre, Apellidos = _req$body.Apellidos;
          if (!(ID == null || Nombre == null || Apellidos == null)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bab Request.Please fill all fields'
          }));
        case 4:
          _context2.next = 6;
          return (0, _index.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input("ID", _index.sql.VarChar, ID).input("Nombre", _index.sql.VarChar, Nombre).input("Apellidos", _index.sql.VarChar, Apellidos).query(_index.querys.addPersona);
        case 9:
          res.json({
            status: true,
            ID: req.query.ID,
            Nombre: req.query.Nombre,
            Apellidos: req.query.Apellidos
          });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          res.status(result.recordset);
          res.send(_context2.t0.msg);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function addPersona(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.addPersona = addPersona;
var getPersonaById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, _result2;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return (0, _index.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("ID", _index.sql.VarChar, id).query(_index.querys.getPersonaId);
        case 7:
          _result2 = _context3.sent;
          return _context3.abrupt("return", res.json(_result2.recordset[0]));
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send(_context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function getPersonaById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getPersonaById = getPersonaById;
var deletePersonaById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, _result3;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _index.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("ID", _index.sql.VarChar, id).query(_index.querys.deletePersonas);
        case 7:
          _result3 = _context4.sent;
          return _context4.abrupt("return", res.json(_result3));
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.status(500);
          res.send(_context4.t0.message);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function deletePersonaById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deletePersonaById = deletePersonaById;
var updatePersonaById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, Nombre, Apellidos, id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, Nombre = _req$body2.Nombre, Apellidos = _req$body2.Apellidos;
          id = req.params.id;
          if (!(id == null || Nombre == null || Apellidos == null)) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            msg: 'Bab Request.Please fill all fields'
          }));
        case 5:
          _context5.next = 7;
          return (0, _index.getConnection)();
        case 7:
          pool = _context5.sent;
          _context5.next = 10;
          return pool.request().input("ID", _index.sql.VarChar, id).input("Nombre", _index.sql.VarChar, Nombre).input("Apellidos", _index.sql.VarChar, Apellidos).query(_index.querys.updatePersona);
        case 10:
          res.json({
            status: true,
            ID: req.query.id,
            Nombre: req.query.Nombre,
            Apellidos: req.query.Apellidos
          });
          _context5.next = 17;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          res.status(result.recordset);
          res.send(_context5.t0.msg);
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return function updatePersonaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updatePersonaById = updatePersonaById;