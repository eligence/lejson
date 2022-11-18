export let listEducation = [
    {
        school: 'Palm Beach Code School',
        degree: 'Web Developer Program',
        date: {
            start: 'DECEMBER 2015',
            end: 'APRIL 2016'
        },
        location: 'WEST PALM BEACH FLORIDA'
    },
    {
        school: 'Daemen College',
        degree: 'Master of Science - Special Education',
        date: {
            start: 'JANUARY 2012',
            end: 'OCTOBER 2013'
        },
        location: 'AMHERST NEW YORK'
    },
    {
        school: 'Western Washington University',
        degree: 'Bachelor of Music',
        date: {
            start: 'SEPTEMBER 2003',
            end: 'JULY 2007'
        },
        location: 'BELLINGHAM WASHINGTON'
    }
]
export default listEducation.map(
    e => {
        if (!e.date.end)
            e.date.end = 'present'
        return e
    }
);