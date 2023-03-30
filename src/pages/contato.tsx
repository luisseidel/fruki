import Format from "../app/components/format";

export default function Contato() {

    return (
        <Format>
            <div>
                <h1 className="font-bold text-center text-5xl py-5">Contato</h1>
                <hr className="h-px my-8 bg-gray-200 border-0" />
            </div>
            <section className="bg-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-2xl">
                        Entre em contato conosco!
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="nome@provedor.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Assunto</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Assunto" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Mensagem</label>
                            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Mensagem..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-white hover:text-black hover:outline-dashed hover:outline-black focus:ring-4 focus:outline-none focus:ring-gray-300">Enviar</button>
                    </form>
                </div>
            </section>
        </Format>
    );
}