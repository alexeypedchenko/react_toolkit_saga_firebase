import '../styles/globals.scss'
import Layout from '../components/Layout/Layout'
// redux
import { Provider } from 'react-redux'
import store from '../store/store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
