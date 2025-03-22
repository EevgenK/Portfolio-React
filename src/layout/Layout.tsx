import { useState } from 'react';
import s from './Layout.module.css';
import Header from '../components/Header/Header';
import BackGround from './BackGround/BackGround';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header modalOpen={() => setOpenModal(true)} />
      <main>{children}</main> <footer></footer>
      {openModal && <Modal modalClose={() => setOpenModal(false)} />}
      <Footer />
      <BackGround />
    </>
  );
};

export default Layout;
