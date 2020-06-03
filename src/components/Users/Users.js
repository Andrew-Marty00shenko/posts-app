import React, { useState } from 'react'
import './Users.scss'
import Ham from '../../assets/hamburger.svg'

const Users = (props) => {

   const [showList, hideList] = useState(false)

   const userList = props.users.map(user => {
      return <li>
         {user.name}
      </li>
   });

   return (
      <div>
         <img className="user-btn" onClick={() => hideList(!showList)} src={Ham} alt="" />
         {showList && <ul className={`${showList ? 'users' : 'hideUsers'}`}>
            <h2> Users</h2>
            {userList}
         </ul >
         }
      </div>
   )
}


export default Users