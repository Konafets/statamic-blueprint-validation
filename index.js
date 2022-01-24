const fs = require('fs');
const yaml = require('js-yaml');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv({ strict: false, allErrors: true }); // options can be passed, e.g. {allErrors: true}
addFormats(ajv);

let schema = JSON.parse(fs.readFileSync('statamic.blueprint.schema.json', 'utf8'));

const validate = ajv.compile(schema);

console.log('All Fieldtypes');
const foo = yaml.load(fs.readFileSync('tests/resources/blueprints/fieldtypes.yaml', {encoding: 'utf-8'}));
const valid = validate(foo);
if (valid) {
    console.log("Is valid.");
} else {
    console.log(validate.errors);
}

//
// const foo = yaml.load(fs.readFileSync('tests/resources/blueprints/foo.yml', {encoding: 'utf-8'}));
//
// const valid = validate(foo)
// if (!valid) console.log(validate.errors)
