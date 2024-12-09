

export default function Home({params}: any) {
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {params.name}
        </main>
    )}