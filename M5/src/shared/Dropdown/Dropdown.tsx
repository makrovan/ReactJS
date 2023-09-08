import React, {useState} from 'react';
import styles from './dropdown.css';
import {noop} from "../../utils/ts/noop";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({button, children, isOpen, onOpen = noop, onClose = noop}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  React.useEffect(() => {setIsDropdownOpen(isOpen)}, [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isOpen])

  const handleOpen = () => {
      if (isOpen === undefined) {
          setIsDropdownOpen(!isDropdownOpen);
      }
  }
  return (
      <div className={styles.container}>
        <div onClick={handleOpen}>
          {button}
        </div>
        {isDropdownOpen && (
            <div className={styles.listContainer}>
              <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                {children}
              </div>
            </div>
        )}
      </div>
  );
}
