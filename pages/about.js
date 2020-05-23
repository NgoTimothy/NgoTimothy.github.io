import NavBar from '../components/NavBar'
import Home from '../style/themes/theme'

export default () => (
  <div>
    <NavBar></NavBar>
    <style jsx global>{`
      body {
        background-color: ${Home.background};
        color: ${Home.text};
        text-align: ${Home.alignCenter};
      }
    `}</style>
  </div>
)
