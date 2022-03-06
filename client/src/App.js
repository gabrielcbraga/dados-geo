import { Header, Main, LinksHome, ContactForm, Footer } from './components'

export default function App() {

    const componentDidMount = () => {
        this.callBackendAPI()
          .then(res => this.setState({ data: res.express }))
          .catch(err => console.log(err));
    }

    const callBackendAPI = async () => {
        const response = await fetch('/');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };

    return (
        <h1 >
            <Header />
            <Main />
            <LinksHome />
            <ContactForm />
            <Footer />
        </h1>
    )
}