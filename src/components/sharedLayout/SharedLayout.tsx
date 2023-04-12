import { Outlet } from 'react-router-dom';
import { useState, useCallback, MouseEvent, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import modalStyle from '../modal/Modal.module.scss';
import Modal from '../modal/Modal';

export type ContextType = {
	openModal: (elem: string) => void;
	handleClose: () => void;
};

const SharedLayout = () => {
	const [modal, setModal] = useState<string>('');
	const nodeRef = useRef(null);

	const openModal = useCallback((name: string) => {
		setModal(name);
	}, []);

	const keyClose = useCallback((e: KeyboardEvent) => {
		if (e.code === 'Escape') setModal('');
	}, []);

	const mouseClose = useCallback((e: MouseEvent) => {
		if (e.target === e.currentTarget) setModal('');
	}, []);

	const handleClose = useCallback(() => setModal(''), []);

	return (
		<>
			<Header openModal={openModal} />
			<Outlet context={{ openModal }} />
			<Footer />
			<CSSTransition
				nodeRef={nodeRef}
				in={!!modal}
				timeout={300}
				classNames={{
					enterActive: modalStyle['overlay-enter-active'],
					enterDone: modalStyle['overlay-enter'],
					exitActive: modalStyle['overlay-exit-active'],
					exitDone: modalStyle['overlay-exit'],
				}}
				unmountOnExit
			>
				<Modal
					ref={nodeRef}
					modal={modal}
					keyClose={keyClose}
					mouseClose={mouseClose}
					handleClose={handleClose}
				/>
			</CSSTransition>
		</>
	);
};

export default SharedLayout;
