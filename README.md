# Synchronous API For JSON Schema $Ref Parser

[BigstickCarpet](https://github.com/BigstickCarpet)'s [JSON Schema $Ref Parser](https://github.com/BigstickCarpet/json-schema-ref-parser) is very useful, but at present has no synchronous API -- despite [multiple](https://github.com/BigstickCarpet/json-schema-ref-parser/issues/14) [requests](https://github.com/BigstickCarpet/swagger-parser/issues/54) for [one](https://github.com/BigstickCarpet/json-schema-ref-parser/issues/82).

This tiny package uses a hideous hack to present a simple synchronous API to $Ref Parser's `dereference` method:

    const $SyncRefParser = require('json-schema-ref-parser-sync');
    expandedSchema = $SyncRefParser.dereference(schema, options);

`$SyncRefParser.dereference` expands the provided JSON Schema's `$ref` references, infuenced by the `option` if they are provided, and returns the expanded version of the schema. If an error occurs, it throws an `Error` object.

This code, such as it is, was inspired by [a comment](https://github.com/BigstickCarpet/json-schema-ref-parser/issues/14#issuecomment-204624236) by [willfarrell](https://github.com/willfarrell) on JSON Schema $Ref Parser's as-yet unresolved [issue 24: Syncronous API](https://github.com/BigstickCarpet/json-schema-ref-parser/issues/14).

I hope this will go away some time soon, when JSON Schema $Ref Parser gains a synchronous API of its own.

