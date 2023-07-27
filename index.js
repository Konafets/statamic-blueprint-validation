const fs = require('fs');
const yaml = require('js-yaml');
const addFormats = require('ajv-formats');
const Ajv2020 = require('ajv/dist/2020')
const ajv = new Ajv2020({ strict: false, allErrors: true })
require("ajv-keywords")(ajv)
const draft7MetaSchema = require("ajv/dist/refs/json-schema-draft-07.json")
ajv.addMetaSchema(draft7MetaSchema)
addFormats(ajv);

let schema = JSON.parse(fs.readFileSync('statamic.blueprint.schema.json', 'utf8'));

const validate = ajv.compile(schema);

console.log('Testing Fieldtypes');
const fieldtypes = yaml.load(fs.readFileSync('tests/resources/blueprints/fieldtypes.yaml', {encoding: 'utf-8'}));
let valid = validate(fieldtypes);
if (valid) {
    console.log("Is valid.");
} else {
    console.log(validate.errors);
}

console.log('Testing Uniqness');
const uniqueness = yaml.load(fs.readFileSync('tests/resources/blueprints/uniqueness.yaml', {encoding: 'utf-8'}));
valid = validate(uniqueness);
if (valid) {
    console.log("Is valid.");
} else {
    console.log(validate.errors);
}

console.log('Testing Page Statamic 3');
const page_statamic3 = yaml.load(fs.readFileSync('tests/resources/blueprints/page_statamic3.yaml', {encoding: 'utf-8'}));
valid = validate(page_statamic3);
if (valid) {
    console.log("Is valid.");
} else {
    console.log(validate.errors);
}

console.log('Testing Page Statamic 4');
const page_statamic4 = yaml.load(fs.readFileSync('tests/resources/blueprints/page_statamic4.yaml', {encoding: 'utf-8'}));
valid = validate(page_statamic4);
if (valid) {
    console.log("Is valid.");
} else {
    console.log(validate.errors);
}
