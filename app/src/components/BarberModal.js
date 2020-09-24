import React from 'react';
import styled from 'styled-components/native';
//import {useNavigation} from '@react-navigation/native';

const Modal = styled.Modal``;

const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalBody = styled.View`
  background-color: #83d6e3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

export default (show, setShow, user, service) => {
  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody />
      </ModalArea>
    </Modal>
  );
};
