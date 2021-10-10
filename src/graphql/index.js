import 'graphql-import-node'
import { mergeSchemas } from 'graphql-tools'

import pruebaSchema from './schemas/prueba_schema'
import pruebaResolvers from './resolvers/prueba_resolvers'

export default mergeSchemas({
    schemas: [pruebaSchema],
    resolvers: [pruebaResolvers],
})
