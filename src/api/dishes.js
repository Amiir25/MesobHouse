// Fetch all dishes
export async function getDishes(signal) {
    try {
        const res = await fetch("https://addis-eats-backend.onrender.com/menu/", { signal });
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const json = await res.json();
        return json.data ?? [];

    } catch (err) {
        if (err.name === "AbortError") return [];
        console.log(`Failed to fetch dishes: ${err.message}`);
        throw err;
    }
}

// Fetch special dishes
export async function getSpecials(signal) {
    try {
        const res = await fetch("https://addis-eats-backend.onrender.com/menu/specials", { signal });
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const json = await res.json();
        return json.data ?? [];
        
    } catch (err) {
        if (err.name === "AbortError") return [];
        console.log(`Failed to fetch special dishes: ${err.message}`);
        throw err;
    }
}