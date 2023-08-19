import React from 'react';
import './UI/ConfirmModal.css';
import { connect, useDispatch } from 'react-redux';
import { hideConfirmModal } from '../actions/authActions';

const ConfirmModal = ({ isActive }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={isActive ? 'confirm active' : 'confirm'}>
        <div className={isActive ? 'confirm__wrapper active' : 'confirm__wrapper'}>
          <i
            className="ri-check-line confirm__icon"
            onClick={() => {
              dispatch(hideConfirmModal());
            }}
          ></i>
          <div className="confirm__title">Вы почти у цели!</div>
          <div className="confirm__subtitle">Осталось совсем чу-чуть!</div>
          <p className="confirm__desc">
            Для завершения регистрации, вы должны подтвердить свой Email. Вам должно прийти
            сообщение, где будет кнопка подтверждения. Просто нажмите на неё и всё, готово! Не
            забудьте проверить Спам!
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    isActive: state.auth.errorModal.active
})

const mapDispatchToProps = {
    hideConfirmModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal);
