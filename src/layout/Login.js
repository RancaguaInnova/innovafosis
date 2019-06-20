import { Field, propTypes, reduxForm } from "redux-form";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Notification, translate, userLogin } from "react-admin";
import React, { Component } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import LockIcon from "@material-ui/icons/Lock";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { lightTheme } from "./themes";

const renderInput = ({ meta: { touched, error } = {}, input: { ...inputProps }, ...props }) => (
  <TextField error={!!(touched && error)} helperText={touched && error} {...inputProps} {...props} fullWidth />
);

class Login extends Component {
  login = auth => this.props.userLogin(auth, this.props.location.state ? this.props.location.state.nextPathname : "/");

  render() {
    const { handleSubmit, isLoading, translate } = this.props;
    return (
      <div>
        <Card>
          <div>
            <Avatar>
              <LockIcon />
            </Avatar>
          </div>
          <form onSubmit={handleSubmit(this.login)}>
            <div>Hint: demo / demo</div>
            <div>
              <div>
                <Field
                  autoFocus
                  name="username"
                  component={renderInput}
                  label={translate("ra.auth.username")}
                  disabled={isLoading}
                />
              </div>
              <div>
                <Field
                  name="password"
                  component={renderInput}
                  label={translate("ra.auth.password")}
                  type="password"
                  disabled={isLoading}
                />
              </div>
            </div>
            <CardActions>
              <Button variant="raised" type="submit" color="primary" disabled={isLoading} fullWidth>
                {isLoading && <CircularProgress size={25} thickness={2} />}
                {translate("ra.auth.sign_in")}
              </Button>
            </CardActions>
          </form>
        </Card>
        <Notification />
      </div>
    );
  }
}

Login.propTypes = {
  ...propTypes,
  authProvider: PropTypes.func,
  classes: PropTypes.object,
  previousRoute: PropTypes.string,
  translate: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  translate,
  reduxForm({
    form: "signIn",
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.username) {
        errors.username = translate("ra.validation.required");
      }
      if (!values.password) {
        errors.password = translate("ra.validation.required");
      }
      return errors;
    }
  }),
  connect(
    mapStateToProps,
    { userLogin }
  )
);

const EnhancedLogin = enhance(Login);

const LoginWithTheme = props => (
  <MuiThemeProvider theme={createMuiTheme(lightTheme)}>
    <EnhancedLogin {...props} />
  </MuiThemeProvider>
);

export default LoginWithTheme;
