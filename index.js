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

