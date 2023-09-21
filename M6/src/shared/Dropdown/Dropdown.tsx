import React, {useEffect, useRef, useState} from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  // isOpen?: boolean;
  // onOpen?: () => void;
  // onClose?: () => void;
}

export function Dropdown({button, children}: IDropdownProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [top, setTop] = useState(0);

    const handleOpen = () => {
        let scrolledTop = window.scrollY;
        if (ref.current?.getBoundingClientRect().top) {
            scrolledTop += ref.current?.getBoundingClientRect().y;
        }
        setTop(scrolledTop);
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
      <div className={styles.container}>
        <div onClick={handleOpen} ref={ref}>
          {button}
        </div>
          {isDropdownOpen && <ListContainer
              children={children}
              onClose={handleOpen}
              top={top}
              left={ref.current?.getBoundingClientRect().x}
          />
        }
      </div>
  );
}

interface IListContainerProps {
    children: React.ReactNode;
    onClose?: () => void;
    left?: number;
    top?: number;
}

export function ListContainer({children, onClose, top = 0, left = 0}: IListContainerProps){
    // const ref = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        function handleClick(event: MouseEvent) {
            onClose?.();
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);


    const node = document.querySelector('#modal_root');
    if (!node) return null;

    const listContainerStyle = {
        left: left,
        top: top,
    }

    return ReactDOM.createPortal((
        <div className={styles.listContainer} style={listContainerStyle}>
            <div className={styles.list}>
                {children}
            </div>
        </div>
    ), node);
}