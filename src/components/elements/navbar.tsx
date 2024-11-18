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

export default function Navbar() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center px-4 pb-2">
        <a className="self-center text-2xl hover:underline" href="/">
          APOCRYPHES
        </a>
        <div className="flex flex-row">
          <nav>
            {/* TODO DISPLAY LOGIN/SIGNUP or PROFILE depending on if user is logged in or not */}
            <a className="hover:underline m-2" href="/login">
              Login
            </a>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:underline">Profil</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Nom du personnage actuel</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/profile">Mon profil</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/profile/characters">Mes personnages</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/profile/RP">Mes RPs en cours</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/profile/edit">Modifier mon profil</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </div>
  );
}
