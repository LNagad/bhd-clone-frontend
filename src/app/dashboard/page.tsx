'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

const BankDashboard = () => {
  
  const { data : session} =  useSession();
  
  
  return (
    <div>
      
      <h1>page</h1>
      {JSON.stringify(session?.user, null, 2)}
    </div>
  );
};

export default BankDashboard;