'use strict'
const BaseGenerator = require('../lib/generatorbase');
const SCAFFOLDER_PROJECT_PROPERTY_NAME = "alertNotification";
const SERVICE_NAME = "service-alert-notification";
const localDevConfig = ['url', 'name', 'password'];

module.exports = class extends BaseGenerator {
	constructor(args, opts) {
		super(args, opts, SERVICE_NAME, SCAFFOLDER_PROJECT_PROPERTY_NAME, localDevConfig);
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
