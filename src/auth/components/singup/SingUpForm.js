import { Fragment, React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SingUpForm({
  handleSubmit,
  userNameErrors,
  nameErrors,
  emailErrors,
  passwordErrors,
  secretQErrors,
  secretAErrors
}) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [selectValue, setSelectValue] = useState('');

  const handleSelectChange = ({ target }) => {
    setSelectValue(target.value);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label={t('app.SingUpInputUserId')}
              autoFocus
              helperText={userNameErrors.error ? userNameErrors.description : ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label={t('app.SingUpInputName')}
              name="name"
              autoComplete="lname"
              //onBlur={handlerLastNameOnBlur}
              helperText={nameErrors.error ? nameErrors.description : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label={t('app.SingUpInputEmail')}
              name="email"
              autoComplete="email"
              //onBlur={handleEmailOnBlur}
              helperText={emailErrors.error ? emailErrors.description : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label={t('app.SingUpInputPassword')}
              type="password"
              id="password"
              autoComplete="current-password"
              //onBlur={handlePasswordOnBlur}
              helperText={passwordErrors.error ? passwordErrors.description : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.form}>
              <InputLabel>{t('app.SingUpInputSecretQ')}</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="secretQuestion"
                name="secretQuestion"
                value={selectValue}
                onChange={handleSelectChange}
                label={t('app.SingUpInputSecretQ')}
              >
                <MenuItem value="Lugar de nacimiento de la madre">{t('app.SingUpInputSecretQ1')}</MenuItem>
                <MenuItem value="Mejor amigo de la infancia">{t('app.SingUpInputSecretQ2')}</MenuItem>
                <MenuItem value="Nombre de la primera mascota">{t('app.SingUpInputSecretQ3')}</MenuItem>
                <MenuItem value="Personaje faborita de la historia">{t('app.SingUpInputSecretQ4')}</MenuItem>
                <MenuItem value="ocupacion del abuelo">{t('app.SingUpInputSecretQ5')}</MenuItem>
              </Select>
              <FormHelperText>{secretQErrors.error ? secretQErrors.description : ''}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="secretAnswer"
              label={t('app.SingUpInputSecretQ5')}
              type="secretAnswer"
              id="secretAnswer"
              autoComplete="current-secretAnswer"
              //onBlur={handleSecretAnswerOnBlur}
              helperText={secretAErrors.error ? secretAErrors.description : ''}
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
          {t('app.SingUpButtonCreateAccount')}
        </Button>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Button fullWidth variant="contained" color="default" className={classes.submit}>
            {t('app.SingUpButtonBackHome')}
          </Button>
        </Link>
        <Grid container justify="flex-end">
          {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
        </Grid>
      </form>
    </Fragment>
  );
}
