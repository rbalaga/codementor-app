import { connect } from "react-redux";
import { Label } from "reactstrap";

const Home = ({ user, isAuthenticated }) => {
  return (
    <Label className="my-5">
      <h3>{`Hello  ${user.firstName} ${user.lastName}`}</h3>
    </Label>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Home);
