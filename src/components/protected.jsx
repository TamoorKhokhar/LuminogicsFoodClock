import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signIn');
    } else {
      navigate('/homePage');
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
}
