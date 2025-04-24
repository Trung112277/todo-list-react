import { AtomItems } from './atoms/atomItems';
import { MoleculeItems } from './molecules/moleculeItems';
import { OrganismsItems } from './organisms/organismsitems';

export function PageDesignSystem() {
  return (
    <div className="container m-auto p-5 font-sans">
      <header>
        <h1 className="text-6xl font-bold text-center text-primary">
          Design System
        </h1>
      </header>
      <div className="grid grid-cols-2 grid-rows-2 gap-[50px] my-10">
        <div className=" flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-center text-primary">
            Atoms
          </h2>
          <AtomItems />
        </div>
        <div className=" flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-center text-primary">
            Molecules
          </h2>
          <MoleculeItems />
        </div>
        <div className=" flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-center text-primary">
            Organisms
          </h2>
          <OrganismsItems />
        </div>
      </div>
    </div>
  );
}
