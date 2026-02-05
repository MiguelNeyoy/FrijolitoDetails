
const getNextAnniversary = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const anniversary = new Date(`${currentYear}-11-21T00:00:00`);

    // Si ya pasó el aniversario de este año, vamos al del siguiente
    if (now > anniversary) {
        anniversary.setFullYear(currentYear + 1);
    }
    return anniversary;
};

const targetDate = getNextAnniversary();
console.log("Next Anniversary:", targetDate.toString());
console.log("Current Time:", new Date().toString());
