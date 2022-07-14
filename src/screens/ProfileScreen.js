import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../Nav';
import './ProfileScreen.css';
import { auth } from '../firebase';
import { selectUser } from '../features/userSlice';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            src='https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg'
            alt=''
          />

          <div className='profileScreen__details'>
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className='profileScreen__signOut'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
