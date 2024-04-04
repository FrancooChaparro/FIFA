// navUtils.ts
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useShowCor = () => {
    const [showCor, setShowCor] = useState(false);
    const router = useRouter();
  
    const handleMouseEnterCor = () => {
      setShowCor(true);
    };
  
    const handleMouseLeaveCor = () => {
      setShowCor(false);
    };
  
    const handleShow = (param: string) => { 
        setShowCor(false);
        router.push(param)
      }

      function ruter (param: string): void {
        router.push(param)
      }

    return { showCor, handleMouseEnterCor, handleMouseLeaveCor, handleShow, ruter };
  };

export function handleClick(top: number): void {
  window.scrollTo({
    top,
    left: 0,
    behavior: "smooth",
  });
}


export function ruter (param: string): void {
  const router = useRouter();
  router.push(param);
}

export function handleShow(param: string): void {
  const router = useRouter();
  router.push(param);
}

export function handleShowMenu(setShowMenu: (value: boolean) => void, setShowBrowse: (value: boolean) => void, showBrowse: boolean): void {
  setShowMenu(false);
  setShowBrowse(!showBrowse);
}

export function useClient(topOffset: number, setShowBackground: (value: boolean) => void): void {
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= topOffset) {
          setShowBackground(true);
        } else {
          setShowBackground(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  }
  