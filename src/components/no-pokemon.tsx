import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NoPokemon({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>No Pokemon Found</CardTitle>
        <CardDescription>Try searching for another name</CardDescription>
      </CardHeader>
      <CardContent>
        <small className="block mb-2">
          Couldn't find any Pokémon matching your search.
        </small>
        {children}
      </CardContent>
    </Card>
  );
}
