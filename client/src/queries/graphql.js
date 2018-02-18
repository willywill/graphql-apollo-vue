import gql from 'graphql-tag'

export const PersonQuery = (id) => gql`
  query PersonQuery {
    person(id: ${id}) {
        firstName,
        lastName,
        age,
        credentials {
          email,
          password
        }
    }
  }
`
