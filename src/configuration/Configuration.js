import { Title, changeLocale, translate } from 'react-admin'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import React from 'react'
import { changeTheme } from './actions'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
}

const Configuration = ({ classes, theme, locale, changeTheme, changeLocale, translate }) => (
  <Card>
    <Title title={translate('pos.configuration')} />
    <CardContent>
      <div className={classes.label}>{translate('pos.theme.name')}</div>
      <Button
        variant='raised'
        className={classes.button}
        color={theme === 'light' ? 'primary' : 'default'}
        onClick={() => changeTheme('light')}
      >
        {translate('pos.theme.light')}
      </Button>
      <Button
        variant='raised'
        className={classes.button}
        color={theme === 'dark' ? 'primary' : 'default'}
        onClick={() => changeTheme('dark')}
      >
        {translate('pos.theme.dark')}
      </Button>
    </CardContent>
    <CardContent>
      <div className={classes.label}>{translate('pos.language')}</div>
      <Button
        variant='raised'
        className={classes.button}
        color={locale === 'en' ? 'primary' : 'default'}
        onClick={() => changeLocale('en')}
      >
        en
      </Button>
      <Button
        variant='raised'
        className={classes.button}
        color={locale === 'fr' ? 'primary' : 'default'}
        onClick={() => changeLocale('fr')}
      >
        fr
      </Button>
    </CardContent>
  </Card>
)

const mapStateToProps = state => ({
  theme: state.theme,
  locale: state.i18n.locale
})

const enhance = compose(
  connect(
    mapStateToProps,
    {
      changeLocale,
      changeTheme
    }
  ),
  translate,
  withStyles(styles)
)

export default enhance(Configuration)
