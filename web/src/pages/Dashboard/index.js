import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <h1>Bem vindo a Concrete Solutions!</h1>

      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}
