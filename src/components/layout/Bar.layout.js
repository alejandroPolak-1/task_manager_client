import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/authentication/authContext'

const Bar = () => {
     //Extract information to authentication
  const authContext = useContext(AuthContext)
  const { user, userAuthenticated } = authContext

  useEffect(() => {
    userAuthenticated()
  }, [])

    return ( 
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hello <span>{user.name}</span></p> : null}
            

            <nav className="nav-principal">
                <a href="#!">Sign off</a>
            </nav>
        </header>
     );
}
 
export default Bar;