// context/SidebarContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type SidebarContextType = {
  blurred: boolean;
  setBlurred: (value: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [blurred, setBlurred] = useState(false);
  return (
    <SidebarContext.Provider value={{ blurred, setBlurred }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within SidebarProvider');
  return context;
};
