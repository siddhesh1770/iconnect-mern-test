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