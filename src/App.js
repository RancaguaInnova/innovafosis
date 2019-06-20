import { Admin, EditGuesser, ListGuesser, Login, Resource, ShowGuesser } from 'react-admin'
import { EventEdit, EventList, EventShow } from './event'
import { ProfessionalEdit, ProfessionalList, ProfessionalShow } from './Professional'
import { VictimEdit, VictimList, VictimShow } from './victim'

import { AuthProvider } from './component/firebase/'
import Configuration from './configuration/Configuration'
import { FirebaseDataProvider } from 'react-admin-firebase'
import { Layout } from './layout'
import Live from './Live'
import React from 'react'
import addUploadCapabilities from './addUploadCapabilities'
import { createMuiTheme } from '@material-ui/core/styles'
import spanishMessages from 'aor-language-spanish'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CC333F'
    },
    secondary: {
      main: '#00A0B0'
    }
  }
})
const messages = {
  es: spanishMessages
}
const i18nProvider = locale => messages[locale]

const authConfig = {
  userProfilePath: '/Users/'
}
const dataProvider = FirebaseDataProvider(firebaseConfig)

const loginStyles = {
  backgroundSize: '100%',
  backgroundRepeat: 'round'
}

const LoginPage = () => <Login style={loginStyles} backgroundImage='' />

const App = () => (
  <Admin
    locale='es'
    i18nProvider={i18nProvider}
    theme={theme}
    dataProvider={addUploadCapabilities(dataProvider)}
    authProvider={AuthProvider(authConfig)}
    loginPage={LoginPage}
    appLayout={Layout}
  >
    <Resource
      name='Event'
      list={EventList}
      options={{ label: 'Historico de Eventos' }}
      edit={EventEdit}
      show={EventShow}
    />
    <Resource
      name='Victim'
      list={VictimList}
      options={{ label: 'Victimas' }}
      edit={VictimEdit}
      show={VictimShow}
    />
    <Resource
      name='Professional'
      list={ProfessionalList}
      options={{ label: 'Profesionales' }}
      edit={ProfessionalEdit}
      show={ProfessionalShow}
    />
    <Resource name='Configuration' list={Configuration} options={{ label: 'Configuración' }} />
    <Resource name='Live' options={{ label: 'Eventos en vivo' }} list={Live} />
    <Resource
      name='Announcements'
      options={{ label: 'Anuncios' }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name='Blogs'
      options={{ label: 'Blog' }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name='CommentsFeedback'
      options={{ label: 'Comentarios y Feedback' }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name='GeneralDiscussion'
      options={{ label: 'Discusión General' }}
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
)
export default App
