import Format from '../app/components/format'

export default function Details() {

    return (
        <Format>
            <div>
                <h1 className="font-bold text-center text-5xl py-5">Projetos</h1>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
            <section className="mb-32 text-gray-800 text-center md:text-left">

                <div className="block rounded-lg shadow-lg bg-white">
                    <div className="flex flex-wrap items-center">
                        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg" alt="Trendy Pants and Shoes"
                                className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg" />
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-8/12">
                            <div className="px-6 py-12 md:px-12">
                                <h2 className="text-3xl font-bold mb-6">
                                    <span className="text-red-600">"Spicy life"</span> project
                                </h2>
                                <p className="text-gray-500 mb-6 pb-2">
                                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                                    neque iaculis malesuada. Aenean gravida magna orci, non
                                    efficitur est porta id. Donec magna diam.
                                </p>
                                <button type="button"
                                    className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Format>
    );
}