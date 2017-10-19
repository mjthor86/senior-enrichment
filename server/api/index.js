'use strict';

const api = require('express').Router();
const db = require('../../db');

api.use('/campus', require('./campus'));

api.use('/student', require('./student'));

module.exports = api;
