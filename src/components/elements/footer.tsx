import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <div className="flex flex-col w-full">
      <Separator />
      <p className="text-sm self-center pt-1 mt-1">
        Apocryphes est un projet de forum de jeu de rôle basé sur l&apos;univers de la
        saga The Last of Us.
      </p>

      <p className="text-sm self-center">
        Le but de ce projet est de m&apos;améliorer sur Typescript, NextJS, Tailwind and
        PostgreSQL.
      </p>
    </div>
  );
}
