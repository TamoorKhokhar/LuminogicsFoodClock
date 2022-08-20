import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Auth(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('email')) {
      navigate('/adminLogin');
    } else {
      navigate('/adminDashboard');
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
}
