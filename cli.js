#!/usr/bin/env node
'use strict';
const meow = require('meow');
const username = require('username');

meow(`
	Example
	  $ username
	  sindresorhus
`);

console.log(username.sync());
