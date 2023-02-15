import './RedesSociais.css'

const RedesSociais = () => {

    const ListaRedes = [        
        { id: 1, urlNome: 'Nova Coleção', url:'https://www.thugnine.com.br/lancamentos'},
        { id: 2, urlNome: 'Instagram', url:'https://www.instagram.com/thugnine/'},
        { id: 3, urlNome: 'Loja Online', url:'https://www.thugnine.com.br/'},
        { id: 4, urlNome: 'Bazar Online', url:'https://www.thugnine.com.br/bazar'},
        { id: 5, urlNome: 'Youtube', url:'https://www.youtube.com/@ThugNine09'}
    ]

    const LinksRedes = ListaRedes.map((props) =>
        <div key={props.id} className='conteudo_links'>
            <a href={props.url}>{props.urlNome}</a>
        </div>
    )

    return (
      <>
        {LinksRedes} <br></br>
        <footer class="copy">
            <p>&copy; João Pedro Viana</p>
        </footer>
      </>
    )
  }
  
  export default RedesSociais;