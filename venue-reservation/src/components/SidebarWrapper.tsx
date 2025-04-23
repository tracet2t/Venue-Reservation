'use client';

import Sidebar from '@/components/admin/side-bar';  
import { SidebarProvider, useSidebar } from '@/components/sidebarContext';  

export default function SidebarWrapper() {
    const { blurred } = useSidebar();
    return <Sidebar isOpen={true} blurred={blurred} />;
}
