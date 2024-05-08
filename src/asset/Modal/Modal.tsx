import React from 'react';


interface ModalProps {
  isvisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isvisible, onClose, children }) => {
  if (!isvisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-40 backdrop-blur-none flex justify-center items-center flex-col z-[300]" onClick={handleClose} id='wrapper'>
      <div className="w-[1200px] flex flex-col">
        <button className=" text-3xl bg-transparent border-none text-right relative top-20 right-16" onClick={onClose}>x</button>
        <div className="bg-white p-10 rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
