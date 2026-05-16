import React from 'react'
import { useAuth } from '../features/auth/hooks/useAuth'
import { useNavigate, Link } from 'react-router'
import '../style/navbar.scss'

const Navbar = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()

    const onLogout = async () => {
        await handleLogout()
        navigate('/login')
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    AI<span className="highlight"> Interviewer</span>
                </Link>

                <div className="navbar__right">
                    {user && (
                        <div className="navbar__user">
                            <span className="navbar__username">{user.username}</span>
                            <button onClick={onLogout} className="navbar__logout-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
