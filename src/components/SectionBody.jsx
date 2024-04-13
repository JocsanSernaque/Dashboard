import Money from "../assets/images/MoneyStack.svg";
import TransferMoney from "../assets/images/TransferMoney.svg";

export function SectionBody() {
  return (
    <div className="flex flex-col h-dvh gap-3 py-2">
      <div className="h-80 rounded-2xl bg-slate-400 text-black px-4 py-4">
        <div className="flex place-content-between items-center">
          <img src={Money} className="w-16 h-16 " />
          <h3 className=" text-2xl font-bold">Ganancias</h3>
        </div>
        <div className="flex place-content-center items-center">
          <img src={TransferMoney} className="h-32" />
        </div>
        <div className="flex flex-col">
          <p className="py-2">
            <strong className="mr-2">+7%</strong>
            desde la última semana
          </p>
          <h3 className="text-3xl font-bold">S/. 956.50</h3>
        </div>
      </div>
      <div className="bg-black">Reporte dse ventas</div>
      <div className="">Analisis</div>
      <div className="">Facturas</div>
      <div className="bg-black">Acitidad</div>
    </div>
  );
}
