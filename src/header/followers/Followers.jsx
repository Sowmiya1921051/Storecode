import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faCartShopping, faLock } from '@fortawesome/free-solid-svg-icons';

function Followers() {
  const data = [
    { icon: faMoneyBill, title: "Earn Rewards", subTitle: "Earn from every purchase made through your unique codes." },
    { icon: faCartShopping, title: "Your Personal Store", subTitle: "Have a personal store powered by your influence." },
    { icon: faLock, title: "Exclusive Codes", subTitle: "Keep your recommended sites a secret under your unique code." },
  ];

  return (
    <div>
      <h2 className='text-center text-2xl font-semibold p-10'>Give your Followers</h2>
      <div className='flex justify-between'>
        {data.map((item, index) => (
          <div key={index} className='text-center p-4 bg-gray-100 rounded-lg shadow-lg'>
            <FontAwesomeIcon icon={item.icon} style={{ color: '#b43cec' }} className='w-10 h-10 mx-auto'/>
            <h1 className='text-xl font-bold'>{item.title}</h1>
            <p>{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Followers;
