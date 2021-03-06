import gql from 'graphql-tag';

export const Claims = gql`
  query Claims {
    claims {
      id
      slug
      title
    }
  }
`

export const UserClaims = gql`
  query UserClaims($id: ID!) {
    claimsForUser(id: $id) {
      id
      slug
      title
    }
  }
`

export const Users = gql`
  query Users {
    users {
      id
      email
      firstName
      lastName
    }
  }
`
