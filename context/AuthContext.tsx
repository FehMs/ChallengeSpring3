import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoggedIn(!!currentUser);
    });
    return unsubscribe;
  }, []);

  const cadastro = (usuario, password, cnpj, empresa, contato) => {
    axios.post(`${BASE_URL}/cadastro`, {
      usuario: usuario,
      password: password,
      cnpj: cnpj,
      empresa: empresa,
      contato: contato
    })
    .then(res => {
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log(userInfo);
    })
    .catch(e => {
      console.log(`cadastro error ${e}`);

    });
  };

  const perguntas = (produtos, meta, canais, desafio, estilo, meses, estrategia) => {

    axios.post(`${BASE_URL}/perguntas`, {
      produtos: produtos,
      meta: meta,
      canais: canais,
      desafio: desafio,
      estilo: estilo,
      meses: meses,
      estrategia: estrategia
    })
    .then(res => {
      let questsInfo = res.data;
      AsyncStorage.setItem('questsInfo', JSON.stringify(questsInfo));
      console.log(questsInfo);
    })
    .catch(e => {
      console.log(`Erro ao inserir perguntas ${e}`);
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      userInfo,
      isLoggedIn,
      cadastro,
      perguntas,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
