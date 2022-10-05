import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import { Button } from '../Button';
import './Modal.scss';

export interface ModalContextProviderProps {
  children?: ReactNode;
}

/**
 * @param require `boolean | undefined`, (true) => (acceptLabel | cancelLabel): string
 * @param acceptLabel `string | undefined`
 * @param cancelLabel `string | undefined`
 * @param content `ReactNode | string` modal content
 * @param showCloseOnRightCorner `boolean`
 * @param header string
 * @require `(acceptLabel | cancelLabel): string` if require === true
 */
export type ModalOptions = {
  content: ReactNode | string;
  header?: string;
  acceptLabel?: string;
  cancelLabel?: string;
  showCloseOnRightCorner?: boolean;
  require?: boolean;
  enableScroll?: boolean;
} & (
  | { require?: false }
  | { require: true | boolean; acceptLabel: string }
  | { require: true | boolean; cancelLabel: string }
);

interface IModalContext {
  modal: (options: ModalOptions) => Promise<boolean>;
  exitModal: () => void;
}

type ModalInternalOptions = ModalOptions & {
  onAccept: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Cannot use useModalContext from outside of the ModalContextProvider');
  }

  return context;
};

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({ children }) => {
  const [options, setOptions] = useState<ModalInternalOptions | undefined>(undefined);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const context: IModalContext = useMemo(
    () => ({
      modal(options) {
        // fix problems with SSR
        return typeof window === 'undefined'
          ? new Promise((resolve, reject) => reject('Window is undefined'))
          : new Promise((resolve, reject) => {
              setOptions({
                ...options,
                onAccept: () => resolve(true),
                onCancel: () => resolve(false),
                onClose: () => (options.require === undefined ? null : reject('Cancelled')),
                acceptLabel: options.acceptLabel || '',
                cancelLabel: options.cancelLabel || '',
                enableScroll: options.enableScroll,
              });
            });
      },
      exitModal: () => setOptions(undefined),
    }),
    []
  );

  const handleAccept = () => {
    setOptions(undefined);
    options?.onAccept && options.onAccept();
  };

  const handleCancel = () => {
    setOptions(undefined);
    options?.onCancel && options.onCancel();
  };

  /**
   * if answer is `required` and acceptLabel && cancelLabel is undefined,
   * there is no way to close that modal.
   * for that reason required is not allowed, if there is no way to exit.
   */
  const handleClose = () => {
    if (
      options?.require &&
      modalContentRef.current &&
      (options.acceptLabel || options.cancelLabel)
    ) {
      modalContentRef.current.style.animationPlayState = 'running';
      return;
    }
    setOptions(undefined);
    options?.onClose && options.onClose();
  };

  useEffect(() => {
    if (!options || (options && !options.enableScroll)) {
      document.body.style.overflow = options ? 'hidden' : '';
    }
  }, [options]);

  // Content is ReactNode
  if (options && typeof options.content !== 'string') {
    return (
      <ModalContext.Provider value={context}>
        <div className='modal-provider-container'>
          <div className='modal-container'>
            <div className='modal-container-overlay' onClick={handleClose} />
            <div ref={modalContentRef} className='modal-content'>
              {options.content}
            </div>
          </div>
        </div>
        {children}
      </ModalContext.Provider>
    );
  }

  // Content is Text
  return (
    <ModalContext.Provider value={context}>
      <div className='modal-provider-container'>
        {!!options && (
          <div className='modal-container'>
            <div className='modal-container-overlay' onClick={handleClose} />
            <div
              ref={modalContentRef}
              className={['modal-content', 'modal-text-content'].join(' ')}
            >
              <div className='modal-header'>
                {options?.header && <h2>{options.header}</h2>}
                {options?.showCloseOnRightCorner && !options.require && (
                  <Button label='X' onClick={handleClose} size='small' />
                )}
              </div>
              <div>{options?.content}</div>
              <div className='modal-bottom-buttons'>
                {options.acceptLabel && (
                  <Button label={options.acceptLabel} primary onClick={handleAccept} />
                )}
                {options.cancelLabel && (
                  <Button label={options.cancelLabel} onClick={handleCancel} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </ModalContext.Provider>
  );
};
