import { gql, useQuery, useMutation } from "@apollo/client";

const query = gql`
  query {
    songs {
      title
    }
  }
`;
const mutationQry = gql`
  mutation mutationName($user: String!) {
    insertUser(user: $user) {
      username
      email
    }
  }
`;
const Movies = () => {
  const { loading, err, data } = useQuery(query);
  const [
    postData,
    { data: mutationResponse, loading: mutationLoading }
  ] = useMutation(mutationQry);
  const handleMovies = () => {
    postData({
      variables: {
        user: "rammohana rao"
      }
    });
  };
  return <button onClick={handleMovies}>Movies</button>;
};

export default Movies;
