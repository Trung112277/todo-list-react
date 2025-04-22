import { Heading } from "@/components/molecules/heading";
export function MoleculeItems() {
  return (
    <div className='flex flex-col gap-6'>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Heading:</h3>
        <Heading />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Heading:</h3>
      </div>
    </div>
  );
}
