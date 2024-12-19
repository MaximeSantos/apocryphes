'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row items-center justify-between px-4 pb-2">
        <Link className="m-2 self-center text-2xl hover:underline" href="/">
          APOCRYPHES
        </Link>
        <div className="flex flex-row">
          <nav>
            {/* TODO DISPLAY LOGIN/SIGNUP or PROFILE depending on if user is logged in or not */}
            <Link className="m-2 hover:underline" href="/login">
              Login
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:underline">Profil</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Nom du personnage actuel</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Mon profil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile/characters">Mes personnages</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile/RP">Mes RPs en cours</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile/edit">Modifier mon profil</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </div>
  );
}
