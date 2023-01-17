const averageAge = arr => {
    return Math.round(arr.reduce((x, y) => x + y.age,0) / arr.length);
};

const orderedAlumni = arr => {
    return arr.sort((a, b) => b.age - a.age);
};

const allUseJavaScript = arr => {
    return arr.every(x => x.language === 'JavaScript');
};
