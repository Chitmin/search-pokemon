import { Pokemon } from "@/types/pokemon";
import {
  Layers2,
  MoveRight,
  Ruler,
  Shapes,
  Shield,
  ShieldX,
  Swords,
  Weight,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";

function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant="secondary">
          {item}
        </Badge>
      ))}
    </div>
  );
}

export default function PokemonDetails({
  pokemon,
}: {
  pokemon: Readonly<Pokemon>;
}) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={300}
          height={260}
          priority
          placeholder="empty"
        />
        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            {pokemon.name}
          </h1>
          <ul className="text-sm flex flex-col space-y-4">
            <li className="flex items-center gap-2" title="Classification">
              <Shapes className="w-h h-4 text-accent-foreground" />{" "}
              {pokemon.classification}
            </li>
            <li className="flex items-center gap-2" title="Height">
              <Ruler className="w-h h-4 text-accent-foreground" />{" "}
              {pokemon.height.minimum} - {pokemon.height.maximum}
            </li>
            <li className="flex items-center gap-2" title="Weight">
              <Weight className="w-h h-4 text-accent-foreground" />{" "}
              {pokemon.weight.minimum} - {pokemon.weight.maximum}
            </li>
            <li className="flex items-center gap-2" title="Types">
              <Layers2 className="w-h h-4 text-accent-foreground" />{" "}
              <BadgeList items={pokemon.types} />
            </li>
            <li className="flex items-center gap-2" title="Resistant">
              <Shield className="w-h h-4 text-accent-foreground" />{" "}
              <BadgeList items={pokemon.resistant} />
            </li>
            <li className="flex items-center gap-2" title="Weaknesses">
              <ShieldX className="w-h h-4 text-accent-foreground" />{" "}
              <BadgeList items={pokemon.weaknesses} />
            </li>
          </ul>
        </div>
      </div>
      {pokemon.evolutions && pokemon.evolutions.length > 0 && (
        <>
          <Separator />
          <div
            className="flex flex-wrap gap-2 items-center justify-center text-sm"
            title="Evolutions"
          >
            <span className="flex gap-2 items-center">
              {pokemon.name}{" "}
              <MoveRight className="w-4 h-4 text-accent-foreground" />
            </span>
            {pokemon.evolutions.map((evo, i) => (
              <span className="flex gap-2 items-center" key={evo.id}>
                {evo.name} {}{" "}
                {i < pokemon.evolutions!.length - 1 && (
                  <MoveRight className="w-4 h-4 text-accent-foreground" />
                )}
              </span>
            ))}
          </div>
          <Separator />
        </>
      )}
      <div
        className="border p-4 rounded-md space-y-4 shadow-lg"
        title="Attacks"
      >
        <header className="flex items-center justify-center mb-4 gap-1">
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
            Attacks
          </h2>
          <Swords className="w-6 h-6 text-accent-foreground" />
        </header>
        <div className="flex space-x-4">
          <div>
            <h3 className="font-semibold text-md md:text-lg lg:text-xl mb-2">
              Special
            </h3>
            <ul className="list-disc list-inside text-sm flex flex-col space-y-2">
              {pokemon.attacks.special.map((attack) => (
                <li key={attack.name}>
                  <span className="font-semibold">{attack.name}</span> - Type:{" "}
                  {attack.type}, Damage: {attack.damage}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-md md:text-lg lg:text-xl mb-2">
              Fast
            </h3>
            <ul className="list-disc list-inside text-sm flex flex-col space-y-2">
              {pokemon.attacks.fast.map((attack) => (
                <li key={attack.name}>
                  <span className="font-semibold">{attack.name}</span> - Type:{" "}
                  {attack.type}, Damage: {attack.damage}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
