import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useClickOutside from "../lib/useClickOutside";
import {
  MdArrowBack,
  MdChevronLeft,
  MdChevronRight,
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdSearch,
} from "react-icons/md";

const StyledSideModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  color: var(--color-gray-800);
  background-color: var(--color-gray-50);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
`;

const StyledInfoModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-gray-800);
  background-color: var(--color-gray-50);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 1000;
  transition: all 0.5s;
`;

type ModalContextType = {
  activeModalId: string | null;
  open: (id: string) => void;
  toggle: (id: string) => void;
  openInfo: () => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const [activeModalId, setActiveModalId] = useState<string>("info");
  const [infoModalCount, setInfoModalCount] = useState<number>(0);

  const open = (id: string) => {
    setActiveModalId(id);
  };

  const toggle = (id: string) => {
    if (id !== activeModalId) {
      setActiveModalId(id);
    } else {
      setActiveModalId("");
    }
  };

  const openInfo = () => {
    setInfoModalCount((c) => c + 1);

    if (infoModalCount % 6 !== 0) return;

    setActiveModalId("info");
  };

  const close = () => {
    setActiveModalId("");
  };

  return (
    <ModalContext.Provider
      value={{ activeModalId, open, toggle, openInfo, close }}
    >
      {children}
    </ModalContext.Provider>
  );
}

type SideContentProps = {
  children: ReactNode;
  modalId: string;
};

function SideContent({ children, modalId }: SideContentProps) {
  const modalRef = useRef(null);
  const { activeModalId, close } = useModal();

  useClickOutside(modalRef, close);

  if (modalId !== activeModalId) return null;

  return createPortal(
    <Overlay>
      <StyledSideModal ref={modalRef}>{children}</StyledSideModal>
    </Overlay>,
    document.body
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 450px;

  /* background-color: var(--color-gray-50); */
  background-color: #115e59;
  border: 2px solid #14b8a6;
  border-radius: var(--radius-md);

  padding: 1rem;
`;

const InfoText = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function InfoContent() {
  const modalRef = useRef(null);
  const { activeModalId, close } = useModal();

  useClickOutside(modalRef, close);

  if ("info" !== activeModalId) return null;

  return createPortal(
    <Overlay>
      <StyledInfoModal ref={modalRef}>
        <InfoContainer>
          <InfoText>
            This is case study of responsive YouTube layout. You can resize the
            window and interact with layout:
          </InfoText>
          <InfoRow>
            <p>❖ Control side bar with</p>
            <MdMenu />
          </InfoRow>
          <InfoRow>
            <p>❖ Control theme with</p>
            <MdLightMode />
            <MdDarkMode />
          </InfoRow>
          <InfoRow>
            <p>❖ Control category selection bar with</p>
            <MdChevronLeft />
            <MdChevronRight />
          </InfoRow>
          <InfoRow>
            <p>❖ Control search bar on small screen with</p>
            <MdSearch />
            <MdArrowBack />
          </InfoRow>
        </InfoContainer>
      </StyledInfoModal>
    </Overlay>,
    document.body
  );
}

Modal.SideContent = SideContent;
Modal.InfoContent = InfoContent;

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error("ModalContext must be used within a ModalProvider");

  return context;
};
