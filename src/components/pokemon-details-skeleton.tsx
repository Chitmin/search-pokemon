import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "./ui/separator";

export default function PokemonDetailsSkeleton() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <Skeleton className="h-[260px] w-[300px]" />
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-8 w-48" />
          <ul className="text-sm flex flex-col space-y-4">
            <li className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-32" />
            </li>
            <li className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-32" />
            </li>
            <li className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-32" />
            </li>
            <li className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-32" />
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <Skeleton className="h-[25px] w-full my-2" />
      <Separator />
      <div className="border p-4 rounded-md space-y-4 shadow-lg">
        <Skeleton className="h-[25px] w-full mb-4" />
        <div className="flex space-x-4">
          <ul className="list-disc list-inside text-sm flex flex-col space-y-2">
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
          </ul>
          <ul className="list-disc list-inside text-sm flex flex-col space-y-2">
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
            <li>
              <Skeleton className="h-4 w-full" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
