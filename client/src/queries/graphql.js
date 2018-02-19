import gql from 'graphql-tag'

export const PersonQuery = (id) => gql`
  query PersonQuery {
    person(id: ${id}) {
        firstName,
        lastName,
        age,
        avatar,
        credentials {
          email,
          password
        }
    }
  }
`
