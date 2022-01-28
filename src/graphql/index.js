import { stitchSchemas } from '@graphql-tools/stitch';
import 'graphql-import-node'

import pruebaSchema from './schemas/prueba_schema'
import pruebaResolvers from './resolvers/prueba_resolvers'

export default stitchSchemas({
    schemas: [pruebaSchema],
    resolvers: [pruebaResolvers],
})
