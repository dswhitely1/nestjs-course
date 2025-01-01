'use client';
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react'
import { useState, useEffect } from 'react';

const ModeToggle = () => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    const { theme, setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="focus-visible:ring-0 focus-visible:ring-offset-0">
                    { theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : <SunIcon />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ModeToggle;