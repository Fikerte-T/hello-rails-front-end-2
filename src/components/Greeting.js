import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div>
      <h3>
        {' '}
        { greeting }
      </h3>
      <button type="button" className="getGreetingsBtn" onClick={() => dispatch(getDataFromApi())}>Random Greeting</button>
    </div>
  );
};

export default Greeting;
