import { Heading } from "@/components/molecules/heading";
import { DateItem } from "@/components/molecules/date";
import { AddInput } from "@/components/molecules/addInput";
export function MoleculeItems() {
  return (
    <div className='flex flex-col gap-6'>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Heading:</h3>
        <Heading />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Date:</h3>
        <DateItem />
      </div>
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-medium min-w-40">Add input:</h3>
        <AddInput />
      </div>
    </div>
  );
}
