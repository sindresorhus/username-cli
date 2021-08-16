#!/usr/bin/env node
import meow from 'meow';
import {usernameSync} from 'username';

meow(`
	Example
	  $ username
	  sindresorhus
`, {
	importMeta: import.meta,
});

console.log(usernameSync());
