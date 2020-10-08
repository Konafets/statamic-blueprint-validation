# Autocompletion and validation of [Statamics](https://statamic.com/) Blueprint YAML configuration

**This is work in progress**

![Example](assets/Demo.gif)

## Setup

### PhpStorm

1. Open PhpStorm and switch to *File > Preferences > Languages & Frameworks > Schemas and DTDs > JSON Schema Mappings*
2. Add a new entry with the following options
   - **Schema file or URL**: `https://raw.githubusercontent.com/Konafets/statamic-blueprint-validation/master/statamic.blueprint.schema.json`
   - **Directory**: `resources/blueprints`
3. Provide path to the directory containing the yaml files.

## Credits

* Thanks to [Jonas](https://github.com/jonassiewertsen) for providing a testing blueprint
