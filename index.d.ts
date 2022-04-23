import OriginModal from 'antd/lib/modal/Modal';
import { ModalStaticFunctions, modalGlobalConfig } from 'antd/lib/modal/confirm';
import useModal from 'antd/lib/modal/useModal/index';
export { ModalProps, ModalFuncProps } from 'antd/lib/modal/Modal';
declare type ModalType = typeof OriginModal & ModalStaticFunctions & {
    useModal: typeof useModal;
    destroyAll: () => void;
    config: typeof modalGlobalConfig;
};
declare const Modal: ModalType;
export default Modal;