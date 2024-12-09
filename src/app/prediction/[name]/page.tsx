
const getPredictedAge = async (name:string) => {
    const res= await fetch(`http://api.agify.io/?name=${name}`);
    return res.json();
}

const getPredictedGender = async (name:string) => {
    const res= await fetch(`http://api.genderize.io/?name=${name}`);
    return res.json();
}

const getPredictedCountry = async (name:string) => {
    const res= await fetch(`http://api.nationalize.io/?name=${name}`);
    return res.json();
}


interface Params {
    params: { name: string};
}

export default async function Home({params}: Params) {

    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const[age,gender,country] = await Promise.all([
        ageData,
        genderData,
        countryData,
    ])
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {params.name}
        </main>
    )}