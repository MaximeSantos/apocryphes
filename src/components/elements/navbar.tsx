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
      <div className="flex flex-row justify-between justify-items-center px-4 pb-2">
        <a className="self-center text-2xl hover:underline" href="/">
          APOCRYPHES
        </a>
        <nav className="flex flex-row justify-between">
          <a className="hover:underline m-2" href="/login">
            Login
          </a>
          <a className="hover:underline m-2" href="/signup">
            Signup
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
      <Separator />
    </div>
  );
}
