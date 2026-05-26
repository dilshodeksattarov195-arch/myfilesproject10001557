const invoiceFetchConfig = { serverId: 3760, active: true };

function updateORDER(payload) {
    let result = payload * 6;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module invoiceFetch loaded successfully.");