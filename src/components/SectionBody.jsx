import Money from "../assets/images/MoneyStack.svg";
import TransferMoney from "../assets/images/TransferMoney.svg";
import Ellipsis from "../assets/images/VerticalEllipsis.svg";

export function SectionBody() {

  return (

    <div className="flex flex-wrap place-content-center items-center gap-6 mt-6">   

      <div className="h-80 w-80  rounded-2xl bg-slate-400 text-black px-4 py-4">

        <div className="flex place-content-between items-center">
          <img src={Money} className="w-12 h-12"  />
          <h3 className=" text-xl font-bold">Ganancias</h3>          
          <img src={Ellipsis} className="w-4 h-4" />          
        </div>

        <div className="flex place-content-center items-center mt-4">
          <img src={TransferMoney} className="h-32"/>
        </div>
        <div className="flex flex-col">
          <p className="py-2">
            <strong className="mr-2">+7%</strong>
            desde la última semana
          </p>
          <h3 className="text-3xl font-bold">S/. 956.50</h3>
        </div>
      </div>

      <div className="h-80 w-80 rounded-2xl bg-HoverColor text-white px-4 py-4">
        <div className="flex place-content-between items-center">          
          <h3 className="text-xl font-bold">Reporte de ventas</h3>
          <img src={Ellipsis} className="w-4 h-4" /> 
        </div>
        <div className="flex place-content-center items-center mt-4">
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

      <div className="h-80 w-80 rounded-2xl bg-HoverColor text-white px-4 py-4">
        <div className="flex place-content-between items-center">
          <img src={Money} className="w-12 h-12 " />
          <h3 className=" text-xl font-bold">Análisis</h3>
          <img src={Ellipsis} className="w-4 h-4" /> 
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

      <div className="h-80 w-80 rounded-2xl bg-HoverColor text-white px-4 py-4">
        <div className="flex place-content-between items-center">
          <img src={Money} className="w-12 h-12 " />
          <h3 className=" text-xl font-bold">Facturas</h3>
          <img src={Ellipsis} className="w-4 h-4" />
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

      <div className="h-80 w-80 rounded-2xl bg-HoverColor text-white px-4 py-4">
        <div className="flex place-content-between items-center">
          <img src={Money} className="w-12 h-12 " />
          <h3 className=" text-xl font-bold">Actividad</h3>
          <img src={Ellipsis} className="w-4 h-4" />
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
    </div>
  );
}
