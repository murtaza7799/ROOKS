import * as React from 'react';
import { auth } from '@/util/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// export default function isUserAuth() {
//   console.log('isUserAuth');
//   const user = auth.currentUser;
//   if (user) {
//     return user;
//   } else {
//     return null;
//   }
// }
function getCurrentUser(auth) {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}
const isUserAuth = async () => {
  const check = await getCurrentUser(auth);
  if (check !== null) {
    console.log('User Already Successful check at validity', check);
    return check;
  }
  return null;
};
export default isUserAuth;
