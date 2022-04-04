import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AccountActionsButton from './AccountActionsButton';
import { FormattedMessage } from 'react-intl';

export default function ControlAccount({ isSingIn, username, silk }) {
  return isSingIn === false || (isSingIn === undefined && username !== null) ? (
    <Button variant="outlined" color="inherit">
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/singIn">
        <FormattedMessage id="app.buttonSingIn" />
      </Link>
    </Button>
  ) : (
    <AccountActionsButton username={username} silk={silk} />
  );
}
