import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <div>
        <nav>
            <div>
              <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
              </ul>
            </div>
          </nav>
       </div>
    )
}