import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <div className="flex w-full flex-col">
      <Separator />
      <p className="mt-1 self-center pt-1 text-sm">
        Apocryphes est un projet de forum de jeu de rôle basé sur l&apos;univers de la saga The Last
        of Us.
      </p>

      <p className="self-center text-sm">
        Le but de ce projet est de m&apos;améliorer sur Typescript, NextJS, Tailwind and PostgreSQL.
      </p>
    </div>
  );
}
