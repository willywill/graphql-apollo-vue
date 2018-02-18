import Users from './users'
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList 
} from 'graphql'

// -- Child Objects

const CredentialType = new GraphQLObjectType({
    name: 'Credentials',
    description: 'User\'s credentials such as password and email address.',
    fields: () => ({
        email: {
            type: GraphQLString,
            resolve: credentials => credentials.email
        },
        password: {
            type: GraphQLString,
            resolve: credentials => credentials.password
        }
    })
})

const LocationType = new GraphQLObjectType({
    name: 'Location',
    description: 'User\'s location information including street address, city, state, and zip.',
    fields: () => ({
        address: {
            type: GraphQLString,
            resolve: location => location.address
        },
        city: {
            type: GraphQLString,
            resolve: location => location.city
        },
        state: {
            type: GraphQLString,
            resolve: location => location.state
        },
        zip: {
            type: GraphQLString,
            resolve: location => location.zip
        }
    })
})

const OccupationType = new GraphQLObjectType({
    name: 'Occupation',
    description: 'User\'s occupational data including job title and salary.',
    fields: () => ({
        title: {
            type: GraphQLString,
            resolve: occupation => occupation.title
        },
        salary: {
            type: GraphQLInt,
            resolve: occupation => occupation.salary
        }
    })
})

// -- Parent Object(s)

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'A person object.',
    fields: () => ({
        firstName: {
            type: GraphQLString,
            resolve: person => person.firstName
        },
        lastName: {
            type: GraphQLString,
            resolve: person => person.lastName
        },
        age: {
            type: GraphQLInt,
            resolve: person => person.age
        },
        phoneNumber: {
            type: GraphQLString,
            resolve: person => person.phoneNumber
        },
        weight: {
            type: GraphQLString,
            resolve: person => person.weight
        },
        credentials: {
            type: CredentialType,
            resolve: person => person.credentials
        },
        location: {
            type: LocationType,
            resolve: person => person.location
        },
        occupation: {
            type: OccupationType,
            resolve: person => person.occupation
        }
    })
})

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'Root query',
        fields: () => ({
            person: {
                type: PersonType,
                args: {
                    id: { type: GraphQLInt }
                },
                resolve: (root, args) => Users.findOne({id: args.id})
            }
        })
    })
})
