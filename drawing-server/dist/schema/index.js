"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlCompose = require("graphql-compose");

var _db = require("../utils/db");

var _db2 = _interopRequireDefault(_db);

var _user = require("./user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars
const schemaComposer = new _graphqlCompose.SchemaComposer();
schemaComposer.Query.addFields({ ..._user.UserQuery
});
schemaComposer.Mutation.addFields({ ..._user.UserMutation
});
exports.default = schemaComposer.buildSchema();