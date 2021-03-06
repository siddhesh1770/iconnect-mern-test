const url = "https://iconnect-mern-test.herokuapp.com/api/";

export const addCompany = async (company) => {
    try {
        const res = await fetch(`${url}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(company),
        })
        return await res.json();
    } catch (error) {
        window.alert(error);
    }
}

export const getStates = async () => {
    const data = await fetch("https://raw.githubusercontent.com/bhanuc/indian-list/master/state-city.json");
    return await data.json();
}

export const getAllCompanies = async () => {
    const data = await fetch(`${url}/getCompanies`);
    return await data.json();
}

export const getCompanyById = async (id) => {
    const data = await fetch(`${url}/getCompanyById`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });
    return await data.json();
}

export const updateCompany = async (company) => {
    const data = await fetch(`${url}/update`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(company),
    });
    return await data.json();
}

export const deleteCompany = async (id) => {
    const data = await fetch(`${url}delete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });
    return await data.json();
}