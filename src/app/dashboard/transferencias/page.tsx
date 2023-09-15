'use client';

const TransferenciasPage = () => {
  
  return (
    <section className="w-screen h-screen bg-gray-200 gap-x-4 py-8 px-4 flex justify-between">
      <div className="flex flex-col py-4 px-5 w-[68%] bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Pagos y Transferencias</h2>

        <div className="w">
          <h3>Tipo de transacción</h3>
        </div>
      </div>
      <div className="flex flex-col py-4 px-5 w-[32%] bg-white shadow-sm rounded-md">
        <h2 className="text-xl text-gray-400 font-medium">Accesos</h2>
      </div>
    </section>
  );
};

export default TransferenciasPage;