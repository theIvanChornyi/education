import { useEffect, MouseEvent, forwardRef, useMemo } from 'react';
import { createPortal } from 'react-dom';

import style from './Modal.module.scss';
import AboutContent from '../aboutContent/AboutContent';
import CoursesContent from '../coursesContent/CoursesContent';

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

interface IProps {
	modal: string;
	keyClose: (e: KeyboardEvent) => void;
	mouseClose: (e: MouseEvent) => void;
	handleClose: () => void;
}

type Ref = HTMLDivElement;

const Modal = forwardRef<Ref, IProps>(
	({ keyClose, mouseClose, modal, handleClose }, ref) => {
		useEffect(() => {
			document.addEventListener('keydown', keyClose);
			// document.body.style.overflow = 'hidden';

			return () => {
				document.removeEventListener('keydown', keyClose);
				// document.body.style.overflow = 'unset';
			};
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		const createContent = (name: string) => {
			switch (name) {
				case 'courses':
					return <CoursesContent handleClose={handleClose} />;
				case 'about':
					return <AboutContent />;
			}
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
		const content = useMemo(() => createContent(modal), []);

		return createPortal(
			<div ref={ref} onClick={mouseClose} className={style.overlay}>
				<div className={style.modal}>
					<button
						className={style.modal__btn}
						type="button"
						onClick={mouseClose}
					>
						X
					</button>
					<div className={style.modal__wrapper}>{content}</div>
				</div>
			</div>,
			modalRoot
		);
	}
);

export default Modal;
