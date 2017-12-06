'use strict';
const BaseGenerator = require('../lib/generatorbase');
const SCAFFOLDER_PROJECT_PROPERTY_NAME = "redis";
const CLOUD_FOUNDRY_SERVICE_NAME = "compose-for-redis";

module.exports = class extends BaseGenerator {
	constructor(args, opts) {
		super(args, opts, SCAFFOLDER_PROJECT_PROPERTY_NAME, CLOUD_FOUNDRY_SERVICE_NAME);
	}

	initializing(){
		return super.initializing();
	}

	configuring(){
		return super.configuring();
	}

	writing(){
		return super.writing();
	}
};

