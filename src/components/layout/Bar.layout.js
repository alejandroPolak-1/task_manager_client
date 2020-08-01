import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/authentication/authContext'

const Bar = () => {
     //Extract information to authentication
  const authContext = useContext(AuthContext)
  const { user, userAuthenticated, signOff } = authContext

  useEffect(() => {
    userAuthenticated()
    //eslint-disable-next-line
  }, [ ])

    return ( 
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hello <span>{user.name}</span></p> : null}
            

            <nav className="nav-principal">
                <button
                className="btn btn-blank sign-off"
                onClick={() => signOff()}
                >
                    Sign off</button>
            </nav>
        </header>
     );
}
 
export default Bar;